// The synchronous copy event also works in embedded editors with limited clipboard APIs.
function copyWithSelection(html,text){
  const host=document.querySelector('dialog[open]')||document.body,area=document.createElement('textarea');
  area.value=text;area.style.cssText='position:fixed;left:0;top:0;width:1px;height:1px;opacity:0;';host.appendChild(area);
  const focus=document.activeElement;let handled=false;
  const onCopy=event=>{if(!event.clipboardData)return;event.clipboardData.setData('text/plain',text);if(html!=null)event.clipboardData.setData('text/html',html);event.preventDefault();handled=true;};
  document.addEventListener('copy',onCopy,true);
  try{area.focus();area.select();return document.execCommand('copy')&&handled;}
  catch{return false;}
  finally{document.removeEventListener('copy',onCopy,true);area.remove();focus?.focus();}
}
