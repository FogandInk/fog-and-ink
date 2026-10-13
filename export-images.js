(function(root){
  'use strict';
  const cache=new Map();
  const clamp=(value,min,max,fallback)=>Number.isFinite(Number(value))?Math.max(min,Math.min(max,Number(value))):fallback;
  function hasTransparency(pixels){for(let index=3;index<pixels.length;index+=4)if(pixels[index]<255)return true;return false;}
  function cropGeometry(iw,ih,width,height,x=50,y=50,zoom=100){
    const scale=Math.max(width/iw,height/ih)*zoom/100;
    return {x:(width-iw*scale)*x/100,y:(height-ih*scale)*y/100,width:iw*scale,height:ih*scale};
  }
  function render(html){
    const doc=new DOMParser().parseFromString(html,'text/html');
    // Scene covers keep their background sizing, crop and height limit.
    // Embedded portraits need img conversion for clipboard upload. Public URLs
    // retain the same background crop as the preview, including zoom and X/Y.
    for(const slot of doc.querySelectorAll('.character-portrait')){
      // CSSOM may discard a very large data URL before it can be resized.
      const match=(slot.style.backgroundImage||slot.getAttribute('style')||'').match(/url\(\s*(?:"([^"]*)"|'([^']*)'|([^)]*))\s*\)/i);
      const src=match&&(match[1]||match[2]||match[3]);if(!src)continue;
      if(!/^data:image\/(?:png|jpeg|webp|gif);base64,/i.test(src))continue;
      const padding=parseFloat(slot.style.paddingTop||slot.firstElementChild?.style.paddingTop)||100;
      const position=slot.style.backgroundPosition.split(/\s+/),zoom=parseFloat(slot.style.backgroundSize.match(/[\d.]+%/)?.[0])||100;
      const img=doc.createElement('img');img.src=src;img.alt=slot.getAttribute('aria-label')||'from RisuAI';
      img.style.cssText='display:block;width:100%;max-width:100%;height:auto;margin:0;padding:0;border:0;';
      img.style.aspectRatio='100 / '+padding;img.style.objectFit='cover';img.style.objectPosition=slot.style.backgroundPosition;
      img.dataset.fogCrop=JSON.stringify({ratio:100/padding,x:clamp(parseFloat(position[0]),0,100,50),y:clamp(parseFloat(position[1]),0,100,50),zoom:clamp(zoom,100,300,100),limit:400});
      for(const prop of ['background-image','background-size','background-position','background-repeat','padding-top','max-height'])slot.style.removeProperty(prop);
      slot.removeAttribute('role');slot.removeAttribute('aria-label');slot.style.padding='0';slot.replaceChildren(img);
    }
    return doc.body.innerHTML;
  }
  async function cropImage(src,options){
    const key=src+'|'+JSON.stringify(options);if(cache.has(key))return cache.get(key);
    const img=new Image();
    await new Promise((resolve,reject)=>{
      const timer=setTimeout(()=>{img.onload=img.onerror=null;reject(new Error('사진 처리 시간이 초과됐어요. 다시 복사해 주세요.'));},10000);
      img.onload=()=>{clearTimeout(timer);resolve();};img.onerror=()=>{clearTimeout(timer);reject(new Error('복사할 사진을 읽지 못했어요. 이미지 설정에서 다시 가져와 주세요.'));};img.src=src;
    });
    const canvas=document.createElement('canvas'),ratio=clamp(options.ratio,.05,20,1);
    if(options.zoom===100&&Math.abs(img.naturalWidth/img.naturalHeight-ratio)<.001&&Math.max(img.naturalWidth,img.naturalHeight)<=options.limit&&/^data:image\/(?:png|jpeg);base64,/.test(src)){cache.set(key,src);return src;}
    const width=Math.min(options.limit,img.naturalWidth),height=width/ratio;
    const resize=Math.min(1,options.limit/height);canvas.width=Math.max(1,Math.round(width*resize));canvas.height=Math.max(1,Math.round(height*resize));
    const ctx=canvas.getContext('2d'),crop=cropGeometry(img.naturalWidth,img.naturalHeight,canvas.width,canvas.height,options.x,options.y,options.zoom);
    ctx.drawImage(img,crop.x,crop.y,crop.width,crop.height);
    const transparent=hasTransparency(ctx.getImageData(0,0,canvas.width,canvas.height).data);
    // JPEG destroys alpha. Keep transparent portraits as PNG throughout copying.
    let data=canvas.toDataURL(transparent?'image/png':'image/jpeg',.82);
    if(!transparent&&data.length>180000)data=canvas.toDataURL('image/jpeg',.65);
    if(cache.size>=16)cache.delete(cache.keys().next().value);cache.set(key,data);return data;
  }
  async function prepare(html){
    const doc=new DOMParser().parseFromString(html,'text/html');
    for(const img of doc.querySelectorAll('img[data-fog-crop]')){
      const crop=JSON.parse(img.dataset.fogCrop);
      if(/^data:image\/(?:png|jpeg|webp|gif);base64,/i.test(img.getAttribute('src')||'')){
        img.src=await cropImage(img.src,crop);img.style.removeProperty('aspect-ratio');img.style.removeProperty('object-fit');img.style.removeProperty('object-position');
      }
      img.removeAttribute('data-fog-crop');
    }
    return doc.body.innerHTML;
  }
  async function portraits(characters,options={}){
    const result=[],limit=clamp(options.limit,80,400,200);
    for(const character of characters){
      if(!/^data:image\//.test(character.image||'')){result.push(character);continue;}
      const ratio=character.imageShape==='portrait'?2/3:1;
      const image=await cropImage(character.image,{ratio,x:clamp(character.imageX,0,100,50),y:clamp(character.imageY,0,100,50),zoom:clamp(character.imageZoom,100,300,100),limit});
      result.push({...character,image,imageX:50,imageY:50,imageZoom:100,imageRatio:ratio});
    }
    return result;
  }
  root.FogRisuExportImages={render,prepare,portraits,cropGeometry};
  if(typeof module!=='undefined'&&module.exports)module.exports=root.FogRisuExportImages;
})(typeof globalThis!=='undefined'?globalThis:this);
