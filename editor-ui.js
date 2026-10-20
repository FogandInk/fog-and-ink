/* Editor chrome only. Publication rendering and export remain in app.js/logic.js. */
(()=>{
  'use strict';
  const byId=id=>document.getElementById(id),editor=byId('editor'),form=byId('editor-form');
  if(!editor||!form)return;
  document.body.classList.add('editor-desktop');
  byId('editor-theme-btn').setAttribute('aria-label','편집기 다크 모드');
  const make=(tag,attrs={},text='')=>{const node=document.createElement(tag);for(const [key,value]of Object.entries(attrs))node.setAttribute(key,value);node.textContent=text;return node;};
  const chevron=()=>{const span=make('span',{'aria-hidden':'true',class:'ui-section-chevron'});span.innerHTML='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m4 6 4 4 4-4"/></svg>';return span;};
  const intro=editor.querySelector('.editor-intro');
  intro.replaceChildren(make('h1',{},'편집 설정'),make('p',{},'설정은 지면에 바로 반영됩니다.'));
  const save=editor.querySelector('.save-status');
  document.querySelector('.header-caption').replaceWith(save);
  const tabs=make('div',{class:'inspector-tabs',role:'tablist','aria-label':'편집 설정'});
  const configs=[
    {key:'paper',label:'지면',note:'신문 정보와 이야기의 서식을 정합니다.',nodes:[form.querySelector('.layout-picker'),byId('title-editor'),byId('paper-settings')]},
    {key:'scene',label:'연출',note:'사진의 크기와 구도, 영상 배치를 조절합니다.',nodes:[form.querySelector('details'),byId('risu-image-settings')]},
    {key:'characters',label:'캐릭터',note:'인물 소개를 편집하고 화살표로 순서를 바꿉니다.',nodes:[byId('characters-editor')]},
    {key:'palette',label:'팔레트',note:'지면과 글자에 어울리는 색을 고릅니다.',nodes:[byId('palette-settings')]}
  ];
  const titles={'title-editor':'신문 정보','paper-settings':'작품과 지면','characters-editor':'인물 소개','palette-settings':'색상 선택','risu-image-settings':'채팅 이미지'};
  for(const config of configs){
    const button=make('button',{type:'button',id:'inspector-tab-'+config.key,role:'tab','aria-controls':'inspector-panel-'+config.key,'aria-selected':'false',tabindex:'-1'},config.label);
    tabs.append(button);
    const panel=make('div',{id:'inspector-panel-'+config.key,class:'inspector-panel',role:'tabpanel','aria-labelledby':button.id});
    panel.hidden=true;panel.append(make('p',{class:'inspector-note'},config.note));
    for(const node of config.nodes.filter(Boolean)){
      if(node.tagName==='DETAILS'){
        node.open=true;node.dataset.uiSection='';
        if(titles[node.id])node.querySelector('summary').replaceChildren(make('span',{},titles[node.id]),chevron());
      }
      panel.append(node);
    }
    form.append(panel);
    button.addEventListener('click',()=>selectInspector(config.key));
  }
  intro.after(tabs);
  const shortcuts=form.querySelector('.editor-shortcuts');form.append(shortcuts);
  const bodyTab=byId('tab-body');if(bodyTab)bodyTab.textContent='본문';
  // Keep the existing help text available without occupying the preview on every visit.
  const help=byId('preview-edit-help');
  if(help){const fold=make('details',{class:'ui-preview-help'});fold.append(make('summary',{},'미리보기 편집 안내'));help.before(fold);fold.append(help);}
  const footer=editor.querySelector('.editor-footer');
  footer.prepend(make('p',{class:'ui-footer-label'},'파일과 보관'));
  editor.querySelector('.editor-signoff')?.remove();editor.querySelector('.editor-ornament')?.remove();
  const mobileButton=make('button',{type:'button',id:'inspector-mobile-toggle','aria-label':'편집 설정 열기','aria-controls':'editor','aria-expanded':'false',class:'inspector-mobile-toggle'},'편집 설정 열기');
  document.querySelector('.workspace-nav').after(mobileButton);
  const closeButton=make('button',{type:'button',class:'inspector-mobile-close','aria-label':'편집 설정 닫기'},'완료');intro.append(closeButton);
  const narrow=window.matchMedia('(max-width:600px)');
  function setMobileOpen(open){
    document.body.classList.toggle('inspector-open',open);
    mobileButton.setAttribute('aria-expanded',String(open));mobileButton.textContent=open?'편집 설정 닫기':'편집 설정 열기';
    mobileButton.setAttribute('aria-label',mobileButton.textContent);
    if(narrow.matches)editor.hidden=!open;else editor.hidden=false;
  }
  mobileButton.addEventListener('click',()=>{const open=!document.body.classList.contains('inspector-open');if(open&&document.body.classList.contains('reading-mode'))byId('reading-btn').click();setMobileOpen(open);if(open)tabs.querySelector('[aria-selected="true"]').focus();});
  closeButton.addEventListener('click',()=>{setMobileOpen(false);mobileButton.focus();});
  shortcuts.addEventListener('click',event=>{if(narrow.matches&&event.target.closest('button'))setMobileOpen(false);});
  editor.addEventListener('keydown',event=>{if(event.key==='Escape'&&narrow.matches){setMobileOpen(false);mobileButton.focus();}});
  narrow.addEventListener('change',()=>setMobileOpen(false));setMobileOpen(false);
  function selectInspector(key){
    for(const config of configs){const active=config.key===key,button=byId('inspector-tab-'+config.key);button.setAttribute('aria-selected',String(active));button.tabIndex=active?0:-1;byId('inspector-panel-'+config.key).hidden=!active;}
    editor.dataset.inspectorTab=key;
  }
  tabs.addEventListener('keydown',event=>{
    const current=configs.findIndex(config=>byId('inspector-tab-'+config.key)===event.target);if(current<0)return;
    let index;if(event.key==='ArrowRight')index=(current+1)%configs.length;else if(event.key==='ArrowLeft')index=(current+configs.length-1)%configs.length;else if(event.key==='Home')index=0;else if(event.key==='End')index=configs.length-1;else return;
    event.preventDefault();selectInspector(configs[index].key);byId('inspector-tab-'+configs[index].key).focus();
  });
  selectInspector('paper');
  // Numeric companions dispatch the original range events; there is only one saved value.
  const numbers=new Map();
  function mountNumbers(){
    for(const range of editor.querySelectorAll('input[type="range"]')){
      if(numbers.has(range))continue;
      const row=make('div',{class:'ui-range-row'}),number=make('input',{type:'number',class:'ui-range-number','aria-label':(editor.querySelector('label[for="'+range.id+'"]')?.firstChild?.textContent.trim()||'값')+' (숫자)'});
      range.before(row);row.append(range,number);numbers.set(range,number);
      const sync=()=>{number.min=range.min;number.max=range.max;number.step=range.step||'1';number.disabled=range.disabled;if(document.activeElement!==number)number.value=range.value;};
      const apply=(commit=false)=>{
        if(number.value===''||!Number.isFinite(number.valueAsNumber))return;
        if(!commit&&(number.valueAsNumber<Number(range.min)||number.valueAsNumber>Number(range.max)))return;
        range.value=number.value;if(commit)number.value=range.value;range.dispatchEvent(new Event('input',{bubbles:true}));range.dispatchEvent(new Event('change',{bubbles:true}));
      };
      number.addEventListener('input',()=>apply());number.addEventListener('change',()=>{apply(true);number.value=range.value;});number.addEventListener('blur',()=>number.value=range.value);
      range.addEventListener('input',()=>{if(document.activeElement!==number)number.value=range.value;sync();});sync();
    }
    for(const [range,number]of numbers){if(!range.isConnected){numbers.delete(range);continue;}number.min=range.min;number.max=range.max;number.step=range.step||'1';if(document.activeElement!==number)number.value=range.value;}
  }
  function refreshCharacters(){
    for(const panel of byId('character-editors').querySelectorAll('[data-character-index]')){
      const summary=panel.querySelector('summary');let thumb=summary.querySelector('.ui-character-thumb');
      if(!thumb){thumb=make('span',{class:'ui-character-thumb','aria-hidden':'true'});summary.prepend(thumb);}
      // Read the already-rendered portrait, including the plugin's source selection.
      const index=Number(panel.dataset.characterIndex),portrait=byId('characters-view').querySelector('[data-character-index="'+index+'"] .character-portrait');
      const src=portrait?.querySelector('img')?.getAttribute('src');
      const background=portrait?getComputedStyle(portrait).backgroundImage:'none';
      if(src){let img=thumb.querySelector('img');if(!img){img=make('img',{alt:'',loading:'lazy'});thumb.replaceChildren(img);}if(img.getAttribute('src')!==src)img.src=src;thumb.style.backgroundImage='none';}
      else{thumb.replaceChildren();thumb.style.backgroundImage=background;thumb.textContent=background==='none'?String(index+1):'';}
    }
  }
  const search=make('input',{id:'ui-palette-search',type:'search',placeholder:'팔레트 이름 또는 작품 검색',autocomplete:'off'});
  const searchLabel=make('label',{for:search.id},'팔레트 검색'),searchNote=make('p',{class:'ui-search-status',role:'status','aria-live':'polite'});
  const paletteFields=byId('palette-settings').querySelector('.field-group');paletteFields.prepend(searchLabel,search,searchNote);
  const gallery=byId('palette-gallery');
  for(const [key,name]of [['custom','커스텀 · 색 지정 지면'],['transparent','커스텀 · 투명 지면']]){
    const button=make('button',{type:'button',class:'ui-search-shortcut','data-category':'커스텀 팔레트'},name);
    button.hidden=true;button.addEventListener('click',()=>{search.value='';filterPalettes();selectPalette(key,'커스텀 팔레트');});gallery.append(button);
  }
  let previousSearch='';const seriesOpen=new Map();
  function filterPalettes(){
    const query=search.value.trim().toLocaleLowerCase();let count=0;
    renderPalettePicker();paletteFields.classList.toggle('is-searching',!!query);
    for(const card of gallery.querySelectorAll('.palette-card-wrap')){
      const text=(card.textContent+' '+(card.closest('[data-series]')?.dataset.series||'')+' '+card.dataset.category).toLocaleLowerCase(),match=!query||text.includes(query);
      card.classList.toggle('ui-search-miss',!match);if(match&&!card.closest('#favorite-palette-list'))count++;
    }
    for(const series of gallery.querySelectorAll('.palette-series')){
      if(query&&!previousSearch)seriesOpen.set(series,series.open);
      const hasMatch=!!series.querySelector('.palette-card-wrap:not(.ui-search-miss)');series.classList.toggle('ui-search-miss',!!query&&!hasMatch);
      if(query&&hasMatch)series.open=true;else if(!query&&previousSearch&&seriesOpen.has(series))series.open=seriesOpen.get(series);
    }
    for(const heading of gallery.querySelectorAll('.palette-gallery-heading')){
      const hasMatch=Array.from(gallery.querySelectorAll('.palette-card-wrap:not(.ui-search-miss)')).some(card=>card.dataset.category===heading.dataset.category&&!card.closest('#favorite-palette-list'));
      heading.classList.toggle('ui-search-miss',!!query&&!hasMatch);
    }
    for(const button of gallery.querySelectorAll('.ui-search-shortcut')){
      button.hidden=!query||!button.textContent.toLocaleLowerCase().includes(query);if(!button.hidden)count++;
    }
    searchNote.textContent=query?(count?count+'개의 팔레트 · 전체 분류에서 검색':'검색 결과가 없습니다. 다른 이름이나 작품명을 입력하세요.'):'모든 분류에서 팔레트 이름과 작품명을 검색합니다.';
    previousSearch=query;
  }
  search.addEventListener('input',filterPalettes);
  byId('palette-category-switch').addEventListener('click',filterPalettes);
  // The gallery replaces only its favorite cards, so observe child changes, not styles.
  new MutationObserver(filterPalettes).observe(byId('palette-gallery'),{childList:true,subtree:true});
  // Quick left/right buttons retain the original select for compatibility and keyboard use.
  const side=byId('cinema-poster-side');
  const sideButtons=make('div',{class:'ui-side-picker',role:'group','aria-label':'포스터 위치'});
  for(const [value,label]of [['left','사진 왼쪽'],['right','사진 오른쪽']]){
    const button=make('button',{type:'button','data-poster-side':value},label);
    button.addEventListener('click',()=>{side.value=value;side.dispatchEvent(new Event('input',{bubbles:true}));side.dispatchEvent(new Event('change',{bubbles:true}));});sideButtons.append(button);
  }
  side.after(sideButtons);side.hidden=true;
  function refresh(){
    mountNumbers();refreshCharacters();filterPalettes();
    sideButtons.querySelectorAll('button').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.posterSide===side.value)));
  }
  globalThis.FogEditorUI={refresh};refresh();
  new MutationObserver(()=>{mountNumbers();refreshCharacters();}).observe(byId('character-editors'),{childList:true});
})();
