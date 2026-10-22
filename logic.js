(function(root){
  'use strict';
  const PALETTES={
    ivory:{name:'골동품 도자기',note:'크림 종이 · 토프 잉크',colors:['#f2efe6','#d9cbb6','#b7a38a','#8a7a6a','#3f3a36'],bg:0,ink:4,accent:3,tint:1,line:2,muted:3},
    antique:{name:'도서관 가죽',note:'양피지 · 에스프레소',colors:['#e7d9c4','#c1a27f','#8b5e34','#5b3b2e','#1f1a17'],bg:0,ink:4,accent:3,tint:1,line:2,muted:2},
    hollywood:{name:'옛 할리우드 글램',note:'샴페인 · 버건디',colors:['#f4f1e8','#d9c5a3','#a48a6a','#3b3b3f','#8b1e3f'],bg:0,ink:3,accent:4,tint:1,line:2,muted:2},
    rose:{name:'에어룸 로즈',note:'더스티 핑크 · 자주 잉크',colors:['#f6e1e7','#e2a4b4','#b96a7a','#7b6d76','#3a2d33'],bg:0,ink:4,accent:2,tint:1,line:2,muted:3},
    blue:{name:'페이디드 데님 워크샵',note:'블루 그레이 · 황갈색',colors:['#e9edf2','#9eb3c2','#5a7990','#a67c52','#2e3a45'],bg:0,ink:4,accent:2,tint:1,line:3,muted:2},
    lavender:{name:'다락방 트렁크',note:'린넨 종이 · 토프 잉크',colors:['#efe7db','#d1bfa7','#9a7d62','#6b5a4c','#2a2420'],bg:0,ink:4,accent:3,tint:1,line:2,muted:3},
    travel:{name:'빈티지 여행 태그',note:'지도 종이 · 벽돌색',colors:['#f3f1e9','#d2c4a5','#b07d62','#4f6c79','#a53f2b'],bg:0,ink:3,accent:4,tint:1,line:2,muted:3},
    deco:{name:'아르데코 로비',note:'골드 크림 · 와인 잉크',colors:['#f2e7d6','#d7b36a','#2f6f6d','#24404a','#7a2d2d'],bg:0,ink:3,accent:4,tint:1,line:1,muted:2},
    newsprint:{name:'신문지 · 회색',note:'회색 신문지 · 먹색 활자',colors:['#e0e0dc','#282828','#4b4b49','#646461','#a5a5a0'],bg:0,ink:1,accent:2,thought:3,tint:4,line:4,muted:3,original:true},
    graphite:{name:'짙은 회색 신문',note:'짙은 회색 종이 · 흑연 활자',colors:['#c6c6c2','#252525','#444444','#50504e','#8b8b87'],bg:0,ink:1,accent:2,thought:3,tint:4,line:4,muted:3,original:true},
    ashpaper:{"name":"먹빛 회색 신문","note":"짙은 회색 신문보다 어두운 종이 · 검은 활자","colors":["#9c9c98","#191919","#252525","#272727","#646462"],"bg":0,"ink":1,"accent":2,"thought":3,"tint":4,"line":4,"muted":3,"original":true},
    darkroom:{"name":"흑백 암실","note":"무채색 블랙 · 은회색 대사","colors":["#101010","#e2e2df","#c2c2c0","#a7a7a4","#595957"],"bg":0,"ink":1,"accent":2,"thought":3,"tint":4,"line":4,"muted":3,"original":true},
    deepteal:{"name":"심해 청록","note":"깊은 청록 지면 · 옅은 아쿠아와 모래빛","colors":["#083d37","#e0ebe7","#a2dac4","#e7c893","#527e70"],"bg":0,"ink":1,"accent":2,"thought":3,"tint":4,"line":4,"muted":3,"original":true},
    indigovelvet:{"name":"인디고 벨벳","note":"보랏빛 남색 지면 · 라벤더와 은빛 블루","colors":["#211c43","#e8e5f0","#c0b4dd","#b3c3d3","#73648d"],"bg":0,"ink":1,"accent":2,"thought":3,"tint":4,"line":4,"muted":3,"original":true},
    olivenight:{"name":"올리브 야간열차","note":"어두운 올리브 지면 · 카키와 린넨","colors":["#303b20","#e7e7d7","#c0d095","#cbc0aa","#798752"],"bg":0,"ink":1,"accent":2,"thought":3,"tint":4,"line":4,"muted":3,"original":true},
    amberlamp:{"name":"앰버 램프","note":"짙은 황갈색 지면 · 부드러운 금빛과 회청색","colors":["#33270f","#ede7d4","#d6be7d","#b9c5d1","#88733f"],"bg":0,"ink":1,"accent":2,"thought":3,"tint":4,"line":4,"muted":3,"original":true},
    terracottanight:{"name":"테라코타 심야","note":"붉은 흙빛 지면 · 말린 살구와 린넨","colors":["#39211c","#eee2da","#d7a28b","#cabba6","#976953"],"bg":0,"ink":1,"accent":2,"thought":3,"tint":4,"line":4,"muted":3,"original":true},
    cobaltstage:{name:'코발트 스테이지',note:'코발트 지면 · 맑은 블루와 복숭아빛',colors:['#122454','#edf1fb','#87b4ed','#e3bb98','#607daf'],bg:0,ink:1,accent:2,thought:3,tint:4,line:4,muted:3,original:true},
    orchidmidnight:{name:'오키드 미드나잇',note:'짙은 난초색 지면 · 오키드 핑크와 세이지',colors:['#351a3b','#f2eaf3','#dfa5d9','#bdd5ad','#87668e'],bg:0,ink:1,accent:2,thought:3,tint:4,line:4,muted:3,original:true},
    slatelemon:{name:'석판과 레몬',note:'슬레이트 지면 · 부드러운 레몬과 회보라',colors:['#303235','#eceeed','#e1d574','#c3b4df','#80838a'],bg:0,ink:1,accent:2,thought:3,tint:4,line:4,muted:3,original:true},
    apricot:{name:'살구빛 석간',note:'옅은 살구 종이 · 적갈색 잉크',colors:['#f1e6dc','#382d29','#92553d','#64546d','#c4ad9c'],bg:0,ink:1,accent:2,thought:3,tint:4,line:4,muted:3,original:true},
    lilac:{name:'라일락 편지',note:'회보라 종이 · 자두색 잉크',colors:['#eeebf1','#34303b','#6e5176','#4e6875','#b6adbf'],bg:0,ink:1,accent:2,thought:3,tint:4,line:4,muted:3,original:true},
    seaglass:{name:'해안의 아침',note:'옅은 바다빛 종이 · 청록 잉크',colors:['#e4edeb','#293b3c','#3c6e70','#855c43','#a6bfba'],bg:0,ink:1,accent:2,thought:3,tint:4,line:4,muted:3,original:true},
    dark:{name:'그라모폰 누아르',note:'차콜 지면 · 따뜻한 회색',colors:['#f0ebe3','#b9b1a6','#6b6762','#2a2a2c','#7b5d4a'],bg:3,ink:0,accent:1,tint:4,line:2,muted:1},
    navy:{name:'황폐한 모텔 간판',note:'밤색 지면 · 살구빛',colors:['#f9e8d4','#ffb46a','#e85d75','#4f7aa3','#243041'],bg:4,ink:0,accent:1,tint:3,line:3,muted:1},
    espresso:{name:'밤의 서재',note:'에스프레소 지면 · 구릿빛 잉크',colors:['#231e1b','#e9dfd2','#c49c78','#b6c3bb','#625347'],bg:0,ink:1,accent:2,thought:3,tint:4,line:4,muted:3,original:true},
    plum:{name:'자주빛 잉크',note:'먹자주 지면 · 말린 장미',colors:['#282027','#efe3e8','#d7a3ae','#bac3d3','#63505e'],bg:0,ink:1,accent:2,thought:3,tint:4,line:4,muted:3,original:true},
    midnight:{name:'새벽의 청사진',note:'짙은 남색 · 은빛 블루',colors:['#1e2731','#e5e9ed','#9db9ca','#d4b28c','#4c6070'],bg:0,ink:1,accent:2,thought:3,tint:4,line:4,muted:3,original:true},
    forest:{name:'깊은 숲의 신문',note:'그린 차콜 · 세이지 잉크',colors:['#202924','#e6e9dc','#aebfaa','#d0ad91','#536457'],bg:0,ink:1,accent:2,thought:3,tint:4,line:4,muted:3,original:true},
    scarlet:{name:'블랙 & 레드',note:'검은 지면 · 살짝 부드럽게 한 레드',colors:['#181617','#eee5e1','#d24450','#d4aea5','#684247'],bg:0,ink:1,accent:2,thought:3,tint:4,line:4,muted:3,original:true},
    naver:{"name":"NAVER · 그린 페이퍼","note":"흰 지면 · 네이버 그린","colors":["#ffffff","#111111","#03c75a","#00853c","#03c75a"],"sourceName":"NAVER 브랜드 컬러","sourceURL":"https://www.navercorp.com/en/company/brandGuide","bg":0,"ink":1,"accent":2,"thought":3,"tint":4,"line":4,"muted":3,"original":true,"brandColor":"#03c75a"},
    spotify:{"name":"Spotify · 그린 나이트","note":"블랙 지면 · 스포티파이 그린","colors":["#121212","#ffffff","#1ed760","#b3b3b3","#1ed760"],"sourceName":"Spotify 디자인 가이드","sourceURL":"https://developer.spotify.com/documentation/design","bg":0,"ink":1,"accent":2,"thought":3,"tint":4,"line":4,"muted":3,"original":true,"brandColor":"#1ed760"},
    kakao:{"name":"Kakao · 옐로 페이퍼","note":"연한 옐로 지면 · 카카오 옐로와 브라운","colors":["#fffceb","#191919","#fee500","#3c1e1e","#fee500"],"sourceName":"Kakao 색상 가이드","sourceURL":"https://developers.kakao.com/docs/ko/kakaologin/design-guide","bg":0,"ink":1,"accent":2,"thought":3,"tint":4,"line":4,"muted":3,"original":true,"brandColor":"#fee500"},
    discord:{"name":"Discord · 블루 아워","note":"차콜 지면 · 디스코드 블러플","colors":["#23272a","#ffffff","#5865f2","#99aab5","#5865f2"],"sourceName":"Discord 브랜드 컬러","sourceURL":"https://discord.com/branding","bg":0,"ink":1,"accent":2,"thought":3,"tint":4,"line":4,"muted":3,"original":true,"brandColor":"#5865f2"},
    soundcloud:{"name":"SoundCloud · 오렌지 잉크","note":"차콜 지면 · 흰 본문과 사운드클라우드 오렌지","colors":["#202020","#ffffff","#ff5500","#ff8800","#ff5500"],"sourceName":"SoundCloud 컬러 팔레트","sourceURL":"https://soundcloud.com/company/media-kit","bg":0,"ink":1,"accent":2,"thought":3,"tint":4,"line":4,"muted":3,"original":true,"brandColor":"#ff5500","dialogueSaturation":0.65},
    telegram:{"name":"Telegram · 블루 레터","note":"흰 지면 · 텔레그램 블루","colors":["#ffffff","#111111","#229ed9","#0088cc","#229ed9"],"sourceName":"Telegram 공식 이미지","sourceURL":"https://telegram.org/tour/screenshots","bg":0,"ink":1,"accent":2,"thought":3,"tint":4,"line":4,"muted":3,"original":true,"brandColor":"#229ed9"},
    slack:{"name":"Slack · 플럼 라운지","note":"흰 지면 · 슬랙 퍼플, 그린, 골드","colors":["#ffffff","#1d1c1d","#4a154b","#007a5a","#ecb22e"],"sourceName":"Slack 브랜드 가이드","sourceURL":"https://a.slack-edge.com/4d5bb/marketing/img/media-kit/slack_brand_guidelines_september2020.pdf","bg":0,"ink":1,"accent":2,"thought":3,"tint":4,"line":4,"muted":3,"original":true,"brandColor":"#4a154b"},
    netflix:{"name":"Netflix · 시네마 레드","note":"블랙 지면 · 넷플릭스 레드","colors":["#141414","#ffffff","#e50914","#b3b3b3","#e50914"],"sourceName":"Netflix 브랜드 사이트","sourceURL":"https://brand.netflix.com/en/assets/logos/","bg":0,"ink":1,"accent":2,"thought":3,"tint":4,"line":4,"muted":3,"original":true,"brandColor":"#e50914","lineSaturation":0.45,"dialogueColor":"#e0696f"},
    youtube:{"name":"YouTube · 레드 페이퍼","note":"흰 지면 · 유튜브 레드","colors":["#ffffff","#0f0f0f","#ff0033","#606060","#ff0033"],"sourceName":"YouTube 브랜드 가이드","sourceURL":"https://brand.youtube/","bg":0,"ink":1,"accent":2,"thought":3,"tint":4,"line":4,"muted":3,"original":true,"brandColor":"#ff0033"},
    github:{"name":"GitHub · 잉크 터미널","note":"잉크 지면 · 깃허브 블루와 그린","colors":["#0d1117","#e6edf3","#79c0ff","#3fb950","#1f6feb"],"sourceName":"GitHub Primer 컬러","sourceURL":"https://primer.style/product/getting-started/react/theme-reference/","bg":0,"ink":1,"accent":2,"thought":3,"tint":4,"line":4,"muted":3,"original":true,"brandColor":"#0d1117"},
    notion:{"name":"Notion · 모노 페이퍼","note":"흰 지면 · 노션의 무채색 잉크","colors":["#ffffff","#37352f","#191919","#787774","#a5a5a3"],"sourceName":"Notion 브랜드 가이드","sourceURL":"https://notion.notion.site/Notion-Brand-Guidelines-db8fda2d1f0048bba1f4e547dfc48830","bg":0,"ink":1,"accent":2,"thought":3,"tint":4,"line":4,"muted":3,"original":true,"brandColor":"#191919"},
    twitch:{"name":"Twitch · 바이올렛 나이트","note":"블랙 지면 · 트위치 퍼플","colors":["#0e0e10","#efeff1","#9146ff","#adadb8","#9146ff"],"sourceName":"Twitch 브랜드 자료","sourceURL":"https://brand.twitch.com/","bg":0,"ink":1,"accent":2,"thought":3,"tint":4,"line":4,"muted":3,"original":true,"brandColor":"#9146ff","dialogueSaturation":0.65},
    pinterest:{"name":"Pinterest · 로즈 보드","note":"흰 지면 · 핀터레스트 레드","colors":["#ffffff","#111111","#e60023","#767676","#e60023"],"sourceName":"Pinterest 브랜드 가이드","sourceURL":"https://business.pinterest.com/brand-guidelines/","bg":0,"ink":1,"accent":2,"thought":3,"tint":4,"line":4,"muted":3,"original":true,"brandColor":"#e60023"},
    dropbox:{"name":"Dropbox · 코발트 룸","note":"흰 지면 · 드롭박스 블루와 먹색","colors":["#ffffff","#1e1919","#0061fe","#1e1919","#0061fe"],"sourceName":"Dropbox 브랜드 가이드","sourceURL":"https://brand.dropbox.com/color","bg":0,"ink":1,"accent":2,"thought":3,"tint":4,"line":4,"muted":3,"original":true,"brandColor":"#0061fe"},
    figma:{"name":"Figma · 컬러 스튜디오","note":"차콜 지면 · 피그마 오렌지, 퍼플, 그린","colors":["#1e1e1e","#ffffff","#ff7237","#874fff","#0acf83"],"sourceName":"Figma 브랜드 가이드","sourceURL":"https://static.figma.com/uploads/6645755656177435f83e10b48d9947645b55a033","bg":0,"ink":1,"accent":2,"thought":3,"tint":4,"line":4,"muted":3,"original":true,"brandColor":"#ff7237"},
    duolingo:{"name":"Duolingo · 라임 노트","note":"흰 지면 · 듀오링고 그린과 블루","colors":["#ffffff","#4b4b4b","#58cc02","#1cb0f6","#58cc02"],"sourceName":"Duolingo 디자인 자료","sourceURL":"https://design.duolingo.com/","bg":0,"ink":1,"accent":2,"thought":3,"tint":4,"line":4,"muted":3,"original":true,"brandColor":"#58cc02"},
    line:{"name":"LINE · 그린 레터","note":"흰 지면 · 라인 그린","colors":["#ffffff","#111111","#06c755","#4d4d4d","#06c755"],"sourceName":"LINE 디자인 시스템","sourceURL":"https://designsystem.line.me/LDSG/foundation/color-ko","bg":0,"ink":1,"accent":2,"thought":3,"tint":4,"line":4,"muted":3,"original":true,"brandColor":"#06c755"},
    reddit:{"name":"Reddit · 오렌지 레터","note":"흰 지면 · 레딧 오렌지와 블루","colors":["#ffffff","#1a1a1b","#ff4500","#0079d3","#ff4500"],"sourceName":"Reddit 브랜드 가이드","sourceURL":"https://redditinc.com/hubfs/Reddit%20Inc/PDF/reddit_brand_guidelines_202009-3.pdf","bg":0,"ink":1,"accent":2,"thought":3,"tint":4,"line":4,"muted":3,"original":true,"brandColor":"#ff4500"},
    applemusic:{"name":"Apple Music · 로즈 트랙","note":"흰 지면 · 애플 뮤직 레드","colors":["#ffffff","#1d1d1f","#fa243c","#6e6e73","#fa243c"],"sourceName":"Apple Music 브랜드 자료","sourceURL":"https://marketing.services.apple/apple-music-identity-guidelines","bg":0,"ink":1,"accent":2,"thought":3,"tint":4,"line":4,"muted":3,"original":true,"brandColor":"#fa243c"},
    steam:{"name":"Steam · 나이트 라이브러리","note":"남색 지면 · 스팀 스카이 블루","colors":["#1b2838","#c7d5e0","#66c0f4","#8f98a0","#2a475e"],"sourceName":"Steam 브랜드 가이드","sourceURL":"https://partner.steamgames.com/doc/marketing/branding","bg":0,"ink":1,"accent":2,"thought":3,"tint":4,"line":4,"muted":3,"original":true,"brandColor":"#1b2838"},
    airbnb:{"name":"Airbnb · 코랄 스테이","note":"흰 지면 · 에어비앤비 코랄과 청록","colors":["#ffffff","#484848","#ff5a5f","#00a699","#ff5a5f"],"sourceName":"Airbnb 브랜드 자료","sourceURL":"https://news.airbnb.com/media-assets/","bg":0,"ink":1,"accent":2,"thought":3,"tint":4,"line":4,"muted":3,"original":true,"brandColor":"#ff5a5f"},
    ikea:{"name":"IKEA · 옐로 블루","note":"흰 지면 · 이케아 블루와 옐로","colors":["#ffffff","#111111","#0058a3","#ffdb00","#ffdb00"],"sourceName":"IKEA 브랜드 이야기","sourceURL":"https://www.ikea.com/global/en/our-business/how-we-work/story-of-ikea/","bg":0,"ink":1,"accent":2,"thought":3,"tint":4,"line":4,"muted":3,"original":true,"brandColor":"#0058a3"},
    zoom:{"name":"Zoom · 블루 미팅","note":"흰 지면 · 줌 블루","colors":["#ffffff","#232333","#0b5cff","#2d8cff","#0b5cff"],"sourceName":"Zoom 공식 사이트","sourceURL":"https://www.zoom.com/en/about/","bg":0,"ink":1,"accent":2,"thought":3,"tint":4,"line":4,"muted":3,"original":true,"brandColor":"#0b5cff"},
    microsoft:{"name":"Microsoft · 컬러 데스크","note":"흰 지면 · 마이크로소프트 오렌지, 그린, 블루","colors":["#ffffff","#2f2f2f","#f25022","#7fba00","#00a4ef"],"sourceName":"Microsoft 브랜드 자료","sourceURL":"https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks","bg":0,"ink":1,"accent":2,"thought":3,"tint":4,"line":4,"muted":3,"original":true,"brandColor":"#f25022"}
  };
  Object.assign(PALETTES,{
  "msdos": {
    "name": "MS-DOS · 터미널",
    "note": "검은 화면 · 옅은 녹색 활자",
    "colors": [
      "#131815",
      "#e6e9dc",
      "#b8cfa4",
      "#a9bed2",
      "#5d7161"
    ],
    "category": "브랜드 팔레트 2",
    "series": "MS 운영체제",
    "sourceName": "Microsoft 디자인 자료",
    "sourceURL": "https://microsoft.design/articles/a-glimpse-into-the-history-of-windows-design/",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 3,
    "original": true,
    "dialogueSaturation": 0.92
  },
  "windows95": {
    "name": "Windows 95 · 클래식",
    "note": "클래식 회색 · 네이비와 청록",
    "colors": [
      "#d4d0c8",
      "#202020",
      "#303969",
      "#356665",
      "#858681"
    ],
    "category": "브랜드 팔레트 2",
    "series": "MS 운영체제",
    "sourceName": "Microsoft 디자인 자료",
    "sourceURL": "https://microsoft.design/articles/a-glimpse-into-the-history-of-windows-design/",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 3,
    "original": true,
    "dialogueSaturation": 0.92
  },
  "windowsxp": {
    "name": "Windows XP · 루나",
    "note": "연한 하늘색 · 파랑과 초원빛",
    "colors": [
      "#edf4fc",
      "#263648",
      "#386b9f",
      "#4b6e35",
      "#9cbba8"
    ],
    "category": "브랜드 팔레트 2",
    "series": "MS 운영체제",
    "sourceName": "Microsoft 디자인 자료",
    "sourceURL": "https://microsoft.design/articles/a-glimpse-into-the-history-of-windows-design/",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 3,
    "original": true,
    "dialogueSaturation": 0.92
  },
  "windowsvista": {
    "name": "Windows Vista · 에어로",
    "note": "깊은 청록 · 유리빛 블루와 연두",
    "colors": [
      "#132b32",
      "#e3edf0",
      "#9fc6d5",
      "#bccd95",
      "#577e89"
    ],
    "category": "브랜드 팔레트 2",
    "series": "MS 운영체제",
    "sourceName": "Microsoft 디자인 자료",
    "sourceURL": "https://microsoft.design/articles/a-glimpse-into-the-history-of-windows-design/",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 3,
    "original": true,
    "dialogueSaturation": 0.92
  },
  "windows7": {
    "name": "Windows 7 · 스카이",
    "note": "밝은 바다빛 · 에어로 블루와 금빛",
    "colors": [
      "#edf7f8",
      "#263b47",
      "#356f8e",
      "#856736",
      "#aec9cb"
    ],
    "category": "브랜드 팔레트 2",
    "series": "MS 운영체제",
    "sourceName": "Microsoft 디자인 자료",
    "sourceURL": "https://microsoft.design/articles/a-glimpse-into-the-history-of-windows-design/",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 3,
    "original": true,
    "dialogueSaturation": 0.92
  },
  "windows8": {
    "name": "Windows 8 · 메트로",
    "note": "옅은 보라 지면 · 퍼플과 청록 타일",
    "colors": [
      "#f7f1fa",
      "#392e43",
      "#745096",
      "#34736d",
      "#b8a5ca"
    ],
    "category": "브랜드 팔레트 2",
    "series": "MS 운영체제",
    "sourceName": "Microsoft 디자인 자료",
    "sourceURL": "https://microsoft.design/articles/a-glimpse-into-the-history-of-windows-design/",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 3,
    "original": true,
    "dialogueSaturation": 0.92
  },
  "windows10": {
    "name": "Windows 10 · 블루 나이트",
    "note": "깊은 네이비 · 부드러운 윈도우 블루",
    "colors": [
      "#10263c",
      "#e7f0f8",
      "#92bfe3",
      "#a4c8c1",
      "#456c8d"
    ],
    "category": "브랜드 팔레트 2",
    "series": "MS 운영체제",
    "sourceName": "Microsoft 디자인 자료",
    "sourceURL": "https://microsoft.design/articles/a-glimpse-into-the-history-of-windows-design/",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 3,
    "original": true,
    "dialogueSaturation": 0.92
  },
  "windows11": {
    "name": "Windows 11 · 블룸",
    "note": "밝은 미색 · 블룸 블루와 라벤더",
    "colors": [
      "#f5f6fb",
      "#283248",
      "#4b66a2",
      "#78688b",
      "#bdc5dd"
    ],
    "category": "브랜드 팔레트 2",
    "series": "MS 운영체제",
    "sourceName": "Microsoft 디자인 자료",
    "sourceURL": "https://microsoft.design/articles/a-glimpse-into-the-history-of-windows-design/",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 3,
    "original": true,
    "dialogueSaturation": 0.92
  },
  "kuugaUltimate": {
    "name": "쿠우가 얼티밋",
    "note": "검정 · 금색 · 차분한 붉은 눈",
    "colors": [
      "#11100f",
      "#eee6d6",
      "#df323a",
      "#c5ab72",
      "#75664c"
    ],
    "category": "캐릭터 팔레트",
    "series": "가면라이더",
    "sourceName": "공식 캐릭터 이미지",
    "sourceURL": "https://www.kamen-rider-official.com/zukan/forms/585",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 3,
    "original": true,
    "dialogueSaturation": 0.8
  },
  "garren": {
    "name": "갸렌",
    "note": "와인빛 블랙 · 붉은 갑옷과 실버 · 초록 눈",
    "colors": [
      "#251a1c",
      "#eee9e6",
      "#d94a51",
      "#63b284",
      "#9da7ab"
    ],
    "category": "캐릭터 팔레트",
    "series": "가면라이더",
    "sourceName": "공식 캐릭터 이미지",
    "sourceURL": "https://www.kamen-rider-official.com/zukan/kamen_rider_members/172",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 3,
    "original": true,
    "dialogueSaturation": 0.97
  },
  "decade": {
    "name": "디케이드",
    "note": "화이트와 블랙 · 마젠타 갑옷과 초록 눈",
    "colors": [
      "#f8f7f7",
      "#23242b",
      "#cd2381",
      "#24774b",
      "#9395a1"
    ],
    "category": "캐릭터 팔레트",
    "series": "가면라이더",
    "sourceName": "공식 캐릭터 이미지",
    "sourceURL": "https://www.kamen-rider-official.com/zukan/kamen_rider_members/32",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 3,
    "original": true,
    "dialogueSaturation": 0.97
  },
  "ooo": {
    "name": "오즈",
    "note": "블랙 지면 · 타토바의 빨강 · 초록 · 노랑",
    "colors": [
      "#171b1a",
      "#f0ede4",
      "#e44b45",
      "#58b775",
      "#d8b841"
    ],
    "category": "캐릭터 팔레트",
    "series": "가면라이더",
    "sourceName": "공식 캐릭터 이미지",
    "sourceURL": "https://www.kamen-rider-official.com/zukan/forms/438",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 3,
    "original": true,
    "dialogueSaturation": 0.97
  },
  "gaim": {
    "name": "가이무",
    "note": "갑옷의 남색 · 오렌지와 금색",
    "colors": [
      "#172744",
      "#eee8dc",
      "#d9ab75",
      "#cabc89",
      "#69758f"
    ],
    "category": "캐릭터 팔레트",
    "series": "가면라이더",
    "sourceName": "공식 캐릭터 이미지",
    "sourceURL": "https://www.kamen-rider-official.com/zukan/",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 3,
    "original": true,
    "dialogueSaturation": 0.92
  },
  "ghost": {
    "name": "고스트",
    "note": "블랙 지면 · 오렌지 파카와 은빛 장식",
    "colors": [
      "#17181d",
      "#eeece6",
      "#ec873b",
      "#aeb8cc",
      "#8e623d"
    ],
    "category": "캐릭터 팔레트",
    "series": "가면라이더",
    "sourceName": "공식 캐릭터 이미지",
    "sourceURL": "https://www.kamen-rider-official.com/zukan/forms/781",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 3,
    "original": true,
    "dialogueSaturation": 0.97
  },
  "exaid": {
    "name": "에그제이드",
    "note": "흰 지면 · 핑크와 라임",
    "colors": [
      "#ffffff",
      "#342c34",
      "#ed328f",
      "#77b72c",
      "#c5cbaa"
    ],
    "category": "캐릭터 팔레트",
    "series": "가면라이더",
    "sourceName": "공식 캐릭터 이미지",
    "sourceURL": "https://www.kamen-rider-official.com/zukan/",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 3,
    "original": true,
    "dialogueSaturation": 0.92
  },
  "buildSparkling": {
    "name": "빌드 스파클링",
    "note": "실버 지면 · 레드와 블루",
    "colors": [
      "#f6f7f9",
      "#283447",
      "#df334f",
      "#326d92",
      "#b9c6d2"
    ],
    "category": "캐릭터 팔레트",
    "series": "가면라이더",
    "sourceName": "공식 캐릭터 이미지",
    "sourceURL": "https://www.kamen-rider-official.com/zukan/kamen_rider_members/1",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 3,
    "original": true,
    "dialogueSaturation": 0.92
  },
  "zio": {
    "name": "지오",
    "note": "검정과 실버 · 시계의 핑크",
    "colors": [
      "#202026",
      "#ece9ef",
      "#c28daa",
      "#b8c2ca",
      "#756b7f"
    ],
    "category": "캐릭터 팔레트",
    "series": "가면라이더",
    "sourceName": "공식 캐릭터 이미지",
    "sourceURL": "https://www.kamen-rider-official.com/zukan/",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 3,
    "original": true,
    "dialogueSaturation": 0.92
  },
  "zeroone": {
    "name": "제로원",
    "note": "블랙 지면 · 옐로 라임 갑옷과 붉은 눈",
    "colors": [
      "#171a18",
      "#eeefe4",
      "#cbdc37",
      "#eb5655",
      "#849a3c"
    ],
    "category": "캐릭터 팔레트",
    "series": "가면라이더",
    "sourceName": "공식 캐릭터 이미지",
    "sourceURL": "https://www.kamen-rider-official.com/zukan/forms/614",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 3,
    "original": true,
    "dialogueSaturation": 0.97
  },
  "revice": {
    "name": "리바이스",
    "note": "옅은 핑크 지면 · 핑크와 시안",
    "colors": [
      "#fbf0f5",
      "#392f40",
      "#9e4b73",
      "#347585",
      "#cab5ca"
    ],
    "category": "캐릭터 팔레트",
    "series": "가면라이더",
    "sourceName": "공식 캐릭터 이미지",
    "sourceURL": "https://www.kamen-rider-official.com/zukan/",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 3,
    "original": true,
    "dialogueSaturation": 0.92
  },
  "gavv": {
    "name": "가브",
    "note": "연보라 지면 · 구미 퍼플과 오렌지",
    "colors": [
      "#f4eff9",
      "#332743",
      "#745697",
      "#977134",
      "#b9a8ca"
    ],
    "category": "캐릭터 팔레트",
    "series": "가면라이더",
    "sourceName": "공식 캐릭터 이미지",
    "sourceURL": "https://www.kamen-rider-official.com/series/gavv/",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 3,
    "original": true,
    "dialogueSaturation": 0.92
  },
  "valen": {
    "name": "발렌",
    "note": "화이트 초콜릿 지면 · 코코아와 레드",
    "colors": [
      "#f3e7d7",
      "#422e26",
      "#ba3b38",
      "#79603c",
      "#b89d83"
    ],
    "category": "캐릭터 팔레트",
    "series": "가면라이더",
    "sourceName": "공식 캐릭터 이미지",
    "sourceURL": "https://www.kamen-rider-official.com/zukan/forms/1477",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 3,
    "original": true,
    "dialogueSaturation": 0.92
  },
  "zeztz": {
    "name": "젯츠",
    "note": "블랙 그린 · 연두와 선명한 붉은 눈",
    "colors": [
      "#141e18",
      "#e7eadf",
      "#b2c58d",
      "#ed4b46",
      "#5e7662"
    ],
    "category": "캐릭터 팔레트",
    "series": "가면라이더",
    "sourceName": "공식 캐릭터 이미지",
    "sourceURL": "https://www.kamen-rider-official.com/series/zeztz/",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 3,
    "original": true,
    "dialogueSaturation": 0.92
  },
  "venti": {
    "name": "벤티",
    "note": "밝은 민트 지면 · 초록과 금빛",
    "colors": [
      "#eef6f1",
      "#233e36",
      "#35765f",
      "#88663c",
      "#b4cabc"
    ],
    "category": "캐릭터 팔레트",
    "series": "원신",
    "sourceName": "공식 캐릭터 이미지",
    "sourceURL": "https://genshin.hoyoverse.com/en/",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 3,
    "original": true,
    "dialogueSaturation": 0.92,
    "characterGroup": "집정관"
  },
  "zhongli": {
    "name": "종려",
    "note": "짙은 갈색 · 바위의 금색과 호박빛",
    "colors": [
      "#241e1a",
      "#eee6d8",
      "#d2b17b",
      "#cea089",
      "#75664e"
    ],
    "category": "캐릭터 팔레트",
    "series": "원신",
    "sourceName": "공식 캐릭터 이미지",
    "sourceURL": "https://genshin.hoyoverse.com/en/",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 3,
    "original": true,
    "dialogueSaturation": 0.92,
    "characterGroup": "집정관"
  },
  "raiden": {
    "name": "라이덴",
    "note": "연보라 기모노 지면 · 짙은 자색과 붉은 띠, 금빛 장식",
    "colors": [
      "#dacce9",
      "#302242",
      "#674790",
      "#914556",
      "#aa936b"
    ],
    "category": "캐릭터 팔레트",
    "series": "원신",
    "sourceName": "공식 캐릭터 이미지",
    "sourceURL": "https://genshin.hoyoverse.com/en/",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 3,
    "original": true,
    "dialogueSaturation": 0.92,
    "characterGroup": "집정관"
  },
  "nahida": {
    "name": "나히다",
    "note": "밝은 잎빛 지면 · 초록과 금색",
    "colors": [
      "#f5f8ed",
      "#33432c",
      "#54763b",
      "#84693c",
      "#bccba5"
    ],
    "category": "캐릭터 팔레트",
    "series": "원신",
    "sourceName": "공식 캐릭터 이미지",
    "sourceURL": "https://genshin.hoyoverse.com/en/",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 3,
    "original": true,
    "dialogueSaturation": 0.92,
    "characterGroup": "집정관"
  },
  "furina": {
    "name": "푸리나",
    "note": "짙은 남청 지면 · 물빛 파랑과 금색",
    "colors": [
      "#152940",
      "#e9f2ff",
      "#55bfea",
      "#d9b167",
      "#687fc1"
    ],
    "category": "캐릭터 팔레트",
    "series": "원신",
    "sourceName": "공식 캐릭터 이미지",
    "sourceURL": "https://genshin.hoyoverse.com/en/",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 4,
    "original": true,
    "dialogueSaturation": 0.97,
    "characterGroup": "집정관"
  },
  "mavuika": {
    "name": "마비카",
    "note": "검정 지면 · 불꽃 주황·주홍·금색",
    "colors": [
      "#1e1b1c",
      "#f5eee5",
      "#f07e3f",
      "#ed443b",
      "#c89b4e"
    ],
    "category": "캐릭터 팔레트",
    "series": "원신",
    "sourceName": "공식 캐릭터 이미지",
    "sourceURL": "https://www.hoyolab.com/article/40770919",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 4,
    "original": true,
    "dialogueSaturation": 0.97,
    "characterGroup": "집정관"
  },
  "columbina": {
    "name": "콜롬비나",
    "note": "흰 달빛 지면 · 인디고와 장밋빛",
    "colors": [
      "#faf7f9",
      "#39303c",
      "#5b5e8a",
      "#925165",
      "#c8b7c3"
    ],
    "category": "캐릭터 팔레트",
    "series": "원신",
    "sourceName": "공식 캐릭터 이미지",
    "sourceURL": "https://genshin.hoyoverse.com/en/news/detail/162139",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 3,
    "original": true,
    "dialogueSaturation": 0.92,
    "characterGroup": "집정관"
  },
  "anastasya": {
    "name": "아나스타샤",
    "note": "얼음빛 흰 지면 · 왕실 파랑과 은보라",
    "colors": [
      "#f2f7fd",
      "#203958",
      "#306ec9",
      "#6a60aa",
      "#8eafce"
    ],
    "category": "캐릭터 팔레트",
    "series": "원신",
    "sourceName": "공식 캐릭터 이미지",
    "sourceURL": "https://genshin.hoyoverse.com/ko/news/detail/165002",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 4,
    "original": true,
    "dialogueSaturation": 0.97,
    "characterGroup": "집정관"
  },
  "noelle": {
    "name": "노엘",
    "note": "실버 지면 · 장미색과 갑옷의 금빛",
    "colors": [
      "#f2f1f0",
      "#41393d",
      "#9b4e5a",
      "#7e6946",
      "#b9b4b0"
    ],
    "category": "캐릭터 팔레트",
    "series": "원신",
    "sourceName": "공식 캐릭터 이미지",
    "sourceURL": "https://genshin.hoyoverse.com/en/",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 3,
    "original": true,
    "dialogueSaturation": 0.92,
    "characterGroup": "일반 캐릭터",
    "releaseDate": "2020-09-28"
  },
  "tartaglia": {
    "name": "타르탈리아",
    "note": "은회색 지면 · 붉은 스카프와 물빛 파랑",
    "colors": [
      "#edf1f5",
      "#283e50",
      "#c84a43",
      "#c48247",
      "#5f88b7"
    ],
    "category": "캐릭터 팔레트",
    "series": "원신",
    "sourceName": "공식 캐릭터 이미지",
    "sourceURL": "https://genshin.hoyoverse.com/en/",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 4,
    "original": true,
    "dialogueSaturation": 0.97,
    "characterGroup": "일반 캐릭터",
    "releaseDate": "2020-11-11"
  },
  "hutao": {
    "name": "호두",
    "note": "짙은 적갈색 지면 · 불꽃 빨강과 호박빛",
    "colors": [
      "#241c1e",
      "#f4e6d8",
      "#ed554f",
      "#dfaf60",
      "#876850"
    ],
    "category": "캐릭터 팔레트",
    "series": "원신",
    "sourceName": "공식 캐릭터 이미지",
    "sourceURL": "https://genshin.hoyoverse.com/en/",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 4,
    "original": true,
    "dialogueSaturation": 0.97,
    "characterGroup": "일반 캐릭터",
    "releaseDate": "2021-03-02"
  },
  "rosaria": {
    "name": "로자리아",
    "note": "짙은 와인 지면 · 장미와 냉빛 실버",
    "colors": [
      "#241d27",
      "#eee5ee",
      "#c08ba4",
      "#b5aecb",
      "#775769"
    ],
    "category": "캐릭터 팔레트",
    "series": "원신",
    "sourceName": "공식 캐릭터 이미지",
    "sourceURL": "https://genshin.hoyoverse.com/en/",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 3,
    "original": true,
    "dialogueSaturation": 0.92,
    "characterGroup": "일반 캐릭터",
    "releaseDate": "2021-04-06"
  },
  "ayaka": {
    "name": "카미사토 아야카",
    "note": "옅은 얼음빛 지면 · 청색과 벚꽃 분홍",
    "colors": [
      "#eef5fc",
      "#213452",
      "#3566bb",
      "#bf668b",
      "#ba9151"
    ],
    "category": "캐릭터 팔레트",
    "series": "원신",
    "sourceName": "공식 캐릭터 이미지",
    "sourceURL": "https://genshin.hoyoverse.com/en/",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 4,
    "original": true,
    "dialogueSaturation": 0.97,
    "characterGroup": "일반 캐릭터",
    "releaseDate": "2021-07-21"
  },
  "yaemiko": {
    "name": "야에 미코",
    "note": "벚꽃빛 흰 지면 · 진분홍과 번개 보라",
    "colors": [
      "#fff4f6",
      "#583449",
      "#b83e64",
      "#8b54b5",
      "#b69255"
    ],
    "category": "캐릭터 팔레트",
    "series": "원신",
    "sourceName": "공식 캐릭터 이미지",
    "sourceURL": "https://genshin.hoyoverse.com/en/",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 4,
    "original": true,
    "dialogueSaturation": 0.97,
    "characterGroup": "일반 캐릭터",
    "releaseDate": "2022-02-16"
  },
  "neuvillette": {
    "name": "느비예트",
    "note": "차콜 지면 · 금빛 장식과 차가운 청색",
    "colors": [
      "#20232c",
      "#eef2f7",
      "#c9ac6c",
      "#74a3d5",
      "#81789a"
    ],
    "category": "캐릭터 팔레트",
    "series": "원신",
    "sourceName": "공식 캐릭터 이미지",
    "sourceURL": "https://genshin.hoyoverse.com/en/",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 4,
    "original": true,
    "dialogueSaturation": 0.97,
    "characterGroup": "일반 캐릭터",
    "releaseDate": "2023-09-27"
  },
  "arlecchino": {
    "name": "아를레키노",
    "note": "잿빛 흰 지면 · 검정과 선홍색",
    "colors": [
      "#f0eef0",
      "#2b2a30",
      "#c63847",
      "#665a84",
      "#9d9fa8"
    ],
    "category": "캐릭터 팔레트",
    "series": "원신",
    "sourceName": "공식 캐릭터 이미지",
    "sourceURL": "https://genshin.hoyoverse.com/en/",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 4,
    "original": true,
    "dialogueSaturation": 0.97,
    "characterGroup": "일반 캐릭터",
    "releaseDate": "2024-04-24"
  },
  "sigewinne": {
    "name": "시그윈",
    "note": "밝은 민트 지면 · 파랑과 리본 분홍",
    "colors": [
      "#f0faf8",
      "#235259",
      "#377fc2",
      "#c35783",
      "#84c9bc"
    ],
    "category": "캐릭터 팔레트",
    "series": "원신",
    "sourceName": "공식 캐릭터 이미지",
    "sourceURL": "https://genshin.hoyoverse.com/en/",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 4,
    "original": true,
    "dialogueSaturation": 0.97,
    "characterGroup": "일반 캐릭터",
    "releaseDate": "2024-06-25"
  },
  "citlali": {
    "name": "시틀라리",
    "note": "옅은 분홍 지면 · 보라와 청록 장식",
    "colors": [
      "#f8f0f8",
      "#45376a",
      "#875bc7",
      "#298fa8",
      "#bb78af"
    ],
    "category": "캐릭터 팔레트",
    "series": "원신",
    "sourceName": "공식 캐릭터 이미지",
    "sourceURL": "https://genshin.hoyoverse.com/en/",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 4,
    "original": true,
    "dialogueSaturation": 0.97,
    "characterGroup": "일반 캐릭터",
    "releaseDate": "2025-01-01"
  },
  "varesa": {
    "name": "바레사",
    "note": "짙은 자주 지면 · 선명한 분홍과 민트",
    "colors": [
      "#2d2138",
      "#f5eef8",
      "#ec61a9",
      "#70c8bd",
      "#c6924f"
    ],
    "category": "캐릭터 팔레트",
    "series": "원신",
    "sourceName": "공식 캐릭터 이미지",
    "sourceURL": "https://genshin.hoyoverse.com/en/",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 4,
    "original": true,
    "dialogueSaturation": 0.97,
    "characterGroup": "일반 캐릭터",
    "releaseDate": "2025-03-26"
  },
  "nefer": {
    "name": "네페르",
    "note": "짙은 비취 의상 지면 · 연두색 보석과 금빛 장식",
    "colors": [
      "#19483c",
      "#f0ecd9",
      "#a7c66c",
      "#d7b566",
      "#809066"
    ],
    "category": "캐릭터 팔레트",
    "series": "원신",
    "sourceName": "공식 캐릭터 이미지",
    "sourceURL": "https://www.hoyolab.com/article/41057828",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 4,
    "original": true,
    "dialogueSaturation": 0.97,
    "characterGroup": "일반 캐릭터",
    "releaseDate": "2025-10-22"
  },
  "odette": {
    "name": "오데트",
    "note": "깊은 청보라 지면 · 얼음 파랑과 라벤더",
    "colors": [
      "#25263f",
      "#eef3ff",
      "#88b9ed",
      "#bd93ce",
      "#a1a3c1"
    ],
    "category": "캐릭터 팔레트",
    "series": "원신",
    "sourceName": "공식 캐릭터 이미지",
    "sourceURL": "https://genshin.hoyoverse.com/ko/news/detail/165002",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 4,
    "original": true,
    "dialogueSaturation": 0.97,
    "characterGroup": "일반 캐릭터",
    "releaseDate": "2026-08-12"
  },
  "vodyanitsa": {
    "name": "보댜니차",
    "note": "옅은 물빛 지면 · 청록과 회보라",
    "colors": [
      "#eef7f8",
      "#25414c",
      "#3d7484",
      "#685a86",
      "#b1cbd0"
    ],
    "category": "캐릭터 팔레트",
    "series": "원신",
    "sourceName": "공식 캐릭터 이미지",
    "sourceURL": "https://genshin.hoyoverse.com/en/news/detail/166384",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 3,
    "original": true,
    "dialogueSaturation": 0.92,
    "characterGroup": "일반 캐릭터",
    "releaseDate": "2026-09-23"
  },
  "valeriy": {
    "name": "발레리",
    "note": "먹보라 갑옷 · 번개 보라와 금색 · 출시 전",
    "colors": [
      "#23212e",
      "#eeeaf5",
      "#ae85e5",
      "#d2b365",
      "#777b93"
    ],
    "category": "캐릭터 팔레트",
    "series": "원신",
    "sourceName": "공식 캐릭터 이미지",
    "sourceURL": "https://x.com/genshinimpactkr/status/2070357659878924381",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 4,
    "original": true,
    "dialogueSaturation": 0.97,
    "characterGroup": "일반 캐릭터",
    "releaseStatus": "upcoming"
  }
});
  Object.assign(PALETTES,{
  "alhaitham": {
    "name": "알하이탐",
    "note": "은회색 머리 지면 · 청록색 망토와 검은 의상, 금빛 장식",
    "colors": [
      "#dfe4df",
      "#273333",
      "#237b72",
      "#7a632e",
      "#91a59c"
    ],
    "category": "캐릭터 팔레트",
    "series": "원신",
    "sourceName": "공식 캐릭터 소개",
    "sourceURL": "https://genshin.hoyoverse.com/en/",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 4,
    "original": true,
    "dialogueSaturation": 0.97,
    "characterGroup": "일반 캐릭터",
    "releaseDate": "2023-01-18"
  },
  "faruzan": {
    "name": "파루잔",
    "note": "밝은 민트 · 청록과 은은한 금빛",
    "colors": [
      "#edf5f0",
      "#284449",
      "#397e86",
      "#876e43",
      "#9dbab2"
    ],
    "category": "캐릭터 팔레트",
    "series": "원신",
    "sourceName": "공식 캐릭터 소개",
    "sourceURL": "https://genshin.hoyoverse.com/en/",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 4,
    "original": true,
    "dialogueSaturation": 0.97,
    "characterGroup": "일반 캐릭터",
    "releaseDate": "2022-12-07"
  },
  "tighnari": {
    "name": "타이나리",
    "note": "숲의 남색 · 연두와 자주색",
    "colors": [
      "#1c2930",
      "#e9f0df",
      "#aac864",
      "#d1a4ce",
      "#668277"
    ],
    "category": "캐릭터 팔레트",
    "series": "원신",
    "sourceName": "공식 캐릭터 소개",
    "sourceURL": "https://genshin.hoyoverse.com/en/",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 4,
    "original": true,
    "dialogueSaturation": 0.97,
    "characterGroup": "일반 캐릭터",
    "releaseDate": "2022-08-24"
  },
  "kinich": {
    "name": "키니치",
    "note": "먹빛 청록 · 라임과 주황빛",
    "colors": [
      "#172b2e",
      "#edf1d9",
      "#b5d958",
      "#f0ad63",
      "#5b8580"
    ],
    "category": "캐릭터 팔레트",
    "series": "원신",
    "sourceName": "공식 캐릭터 소개",
    "sourceURL": "https://genshin.hoyoverse.com/en/",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 4,
    "original": true,
    "dialogueSaturation": 0.97,
    "characterGroup": "일반 캐릭터",
    "releaseDate": "2024-09-17"
  },
  "hsrTrailblazer": {
    "name": "개척자",
    "note": "차콜 · 별빛 금색과 회색",
    "colors": [
      "#24242a",
      "#f0ece2",
      "#e4be68",
      "#b3afc6",
      "#79767d"
    ],
    "category": "캐릭터 팔레트",
    "series": "붕괴 스타레일",
    "sourceName": "공식 캐릭터 소개",
    "sourceURL": "https://hsr.hoyoverse.com/en-us/character",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 4,
    "original": true,
    "dialogueSaturation": 0.97
  },
  "hsrMarch7th": {
    "name": "March 7th",
    "note": "눈빛 흰색 · 분홍과 하늘색",
    "colors": [
      "#f5f1f7",
      "#414257",
      "#a95683",
      "#467a9b",
      "#bcbdd5"
    ],
    "category": "캐릭터 팔레트",
    "series": "붕괴 스타레일",
    "sourceName": "공식 캐릭터 소개",
    "sourceURL": "https://hsr.hoyoverse.com/en-us/character",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 4,
    "original": true,
    "dialogueSaturation": 0.97
  },
  "hsrDanHeng": {
    "name": "단항",
    "note": "흰 비취 · 청록과 먹색",
    "colors": [
      "#edf2ed",
      "#233638",
      "#347f72",
      "#846f42",
      "#a2b7aa"
    ],
    "category": "캐릭터 팔레트",
    "series": "붕괴 스타레일",
    "sourceName": "공식 캐릭터 소개",
    "sourceURL": "https://hsr.hoyoverse.com/en-us/character",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 4,
    "original": true,
    "dialogueSaturation": 0.97
  },
  "hsrHimeko": {
    "name": "히메코",
    "note": "아이보리 · 적갈색과 구리빛",
    "colors": [
      "#f3ece2",
      "#422e31",
      "#a44b49",
      "#86613f",
      "#c1a898"
    ],
    "category": "캐릭터 팔레트",
    "series": "붕괴 스타레일",
    "sourceName": "공식 캐릭터 소개",
    "sourceURL": "https://hsr.hoyoverse.com/en-us/character",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 4,
    "original": true,
    "dialogueSaturation": 0.97
  },
  "hsrWelt": {
    "name": "웰트",
    "note": "따뜻한 회색 · 갈색과 호박빛",
    "colors": [
      "#eae5df",
      "#383135",
      "#7c5343",
      "#856936",
      "#ada396"
    ],
    "category": "캐릭터 팔레트",
    "series": "붕괴 스타레일",
    "sourceName": "공식 캐릭터 소개",
    "sourceURL": "https://hsr.hoyoverse.com/en-us/character",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 4,
    "original": true,
    "dialogueSaturation": 0.97
  },
  "hsrSunday": {
    "name": "선데이",
    "note": "은빛 지면 · 푸른색과 금빛",
    "colors": [
      "#edf0f7",
      "#30394d",
      "#526991",
      "#927343",
      "#adb7ce"
    ],
    "category": "캐릭터 팔레트",
    "series": "붕괴 스타레일",
    "sourceName": "공식 캐릭터 소개",
    "sourceURL": "https://hsr.hoyoverse.com/en-us/character",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 4,
    "original": true,
    "dialogueSaturation": 0.97
  },
  "hsrSeele": {
    "name": "제레",
    "note": "짙은 남보라 지면 · 청보라 의상과 붉은 리본, 푸른 나비빛",
    "colors": [
      "#30264f",
      "#ece9f4",
      "#b197df",
      "#df688a",
      "#6097b6"
    ],
    "category": "캐릭터 팔레트",
    "series": "붕괴 스타레일",
    "sourceName": "공식 캐릭터 소개",
    "sourceURL": "https://hsr.hoyoverse.com/en-us/character",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 4,
    "original": true,
    "dialogueSaturation": 0.97
  },
  "hsrAcheron": {
    "name": "아케론",
    "note": "흰 코트 지면 · 붉은 우산과 짙은 보라색 머리",
    "colors": [
      "#f0edf1",
      "#28263d",
      "#a03949",
      "#605096",
      "#8e82a2"
    ],
    "category": "캐릭터 팔레트",
    "series": "붕괴 스타레일",
    "sourceName": "공식 캐릭터 소개",
    "sourceURL": "https://hsr.hoyoverse.com/en-us/character",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 4,
    "original": true,
    "dialogueSaturation": 0.97
  },
  "hsrSilverWolf": {
    "name": "은랑",
    "note": "차가운 먹빛 · 보라와 네온 청록",
    "colors": [
      "#232833",
      "#edf2f6",
      "#afa2e3",
      "#85c6d1",
      "#737f99"
    ],
    "category": "캐릭터 팔레트",
    "series": "붕괴 스타레일",
    "sourceName": "공식 캐릭터 소개",
    "sourceURL": "https://hsr.hoyoverse.com/en-us/character",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 4,
    "original": true,
    "dialogueSaturation": 0.97
  },
  "hsrKafka": {
    "name": "카프카",
    "note": "와인빛 · 자홍과 연보라",
    "colors": [
      "#30212b",
      "#f3e9ee",
      "#e691b6",
      "#c0acd9",
      "#946775"
    ],
    "category": "캐릭터 팔레트",
    "series": "붕괴 스타레일",
    "sourceName": "공식 캐릭터 소개",
    "sourceURL": "https://hsr.hoyoverse.com/en-us/character",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 4,
    "original": true,
    "dialogueSaturation": 0.97
  },
  "hsrBlade": {
    "name": "블레이드",
    "note": "짙은 청록 · 붉은색과 금빛",
    "colors": [
      "#1d2b30",
      "#f0eade",
      "#e08b88",
      "#cbb078",
      "#658385"
    ],
    "category": "캐릭터 팔레트",
    "series": "붕괴 스타레일",
    "sourceName": "공식 캐릭터 소개",
    "sourceURL": "https://hsr.hoyoverse.com/en-us/character",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 4,
    "original": true,
    "dialogueSaturation": 0.97
  },
  "hsrFirefly": {
    "name": "반디",
    "note": "밝은 은빛 · 비취와 청록",
    "colors": [
      "#eff3ea",
      "#32454a",
      "#397f76",
      "#527c96",
      "#a3beb4"
    ],
    "category": "캐릭터 팔레트",
    "series": "붕괴 스타레일",
    "sourceName": "공식 캐릭터 소개",
    "sourceURL": "https://hsr.hoyoverse.com/en-us/character",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 4,
    "original": true,
    "dialogueSaturation": 0.97
  },
  "hsrHerta": {
    "name": "헤르타",
    "note": "연한 라벤더 · 보라와 금빛",
    "colors": [
      "#f0edf6",
      "#42344f",
      "#8060a4",
      "#8f724a",
      "#b9abcd"
    ],
    "category": "캐릭터 팔레트",
    "series": "붕괴 스타레일",
    "sourceName": "공식 캐릭터 소개",
    "sourceURL": "https://hsr.hoyoverse.com/en-us/character",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 4,
    "original": true,
    "dialogueSaturation": 0.97,
    "releaseDate": "2023-04-26"
  },
  "hsrJade": {
    "name": "제이드",
    "note": "짙은 보라 · 라벤더와 옥빛 장식",
    "colors": [
      "#242039",
      "#f3edf7",
      "#c2a0df",
      "#78bea8",
      "#83749b"
    ],
    "category": "캐릭터 팔레트",
    "series": "붕괴 스타레일",
    "sourceName": "공식 캐릭터 PV",
    "sourceURL": "https://www.hoyolab.com/article/30815675",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 4,
    "original": true,
    "dialogueSaturation": 0.97,
    "releaseDate": "2024-07-10"
  },
  "hsrTopaz": {
    "name": "토파즈",
    "note": "밝은 회색 · 붉은색과 짙은 파랑",
    "colors": [
      "#f1eee8",
      "#303b4e",
      "#b74d55",
      "#4c6786",
      "#b7aba0"
    ],
    "category": "캐릭터 팔레트",
    "series": "붕괴 스타레일",
    "sourceName": "공식 캐릭터 소개",
    "sourceURL": "https://hsr.hoyoverse.com/en-us/character",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 4,
    "original": true,
    "dialogueSaturation": 0.97,
    "releaseDate": "2023-10-27"
  },
  "hsrAventurine": {
    "name": "어벤츄린",
    "note": "짙은 청록 · 금색과 비취",
    "colors": [
      "#192f32",
      "#f0ecde",
      "#ddbd6b",
      "#90c5b8",
      "#758880"
    ],
    "category": "캐릭터 팔레트",
    "series": "붕괴 스타레일",
    "sourceName": "공식 캐릭터 소개",
    "sourceURL": "https://hsr.hoyoverse.com/en-us/character",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 4,
    "original": true,
    "dialogueSaturation": 0.97,
    "releaseDate": "2024-04-17"
  },
  "hsrPearl": {
    "name": "펄",
    "note": "진주빛 흰색 · 푸른색과 금빛",
    "colors": [
      "#f3f3f0",
      "#334353",
      "#4b779b",
      "#8e7247",
      "#acbcc9"
    ],
    "category": "캐릭터 팔레트",
    "series": "붕괴 스타레일",
    "sourceName": "공식 캐릭터 소개",
    "sourceURL": "https://hsr.hoyoverse.com/en-us/character",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 4,
    "original": true,
    "dialogueSaturation": 0.97,
    "releaseDate": "2026-09-28"
  },
  "hsrSparkle": {
    "name": "스파클",
    "note": "따뜻한 흰색 · 선홍색과 먹색",
    "colors": [
      "#f4eeea",
      "#36282e",
      "#b64750",
      "#906146",
      "#bda6a4"
    ],
    "category": "캐릭터 팔레트",
    "series": "붕괴 스타레일",
    "sourceName": "공식 캐릭터 소개",
    "sourceURL": "https://hsr.hoyoverse.com/en-us/character",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 4,
    "original": true,
    "dialogueSaturation": 0.97,
    "releaseDate": "2024-02-29"
  },
  "hsrSparxie": {
    "name": "스파키",
    "note": "검은 의상 지면 · 빨간 장식과 흰 머리, 작은 금빛 방울",
    "colors": [
      "#1c1b21",
      "#f3efeb",
      "#df6c70",
      "#c6c4ce",
      "#a18c73"
    ],
    "category": "캐릭터 팔레트",
    "series": "붕괴 스타레일",
    "sourceName": "공식 캐릭터 소개",
    "sourceURL": "https://hsr.hoyoverse.com/en-us/character",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 4,
    "original": true,
    "dialogueSaturation": 0.97,
    "releaseDate": "2026-03-03"
  },
  "hsrHuohuo": {
    "name": "곽향",
    "note": "연한 비취 · 초록과 청록",
    "colors": [
      "#edf4e8",
      "#334c43",
      "#507d58",
      "#457e80",
      "#a8bda2"
    ],
    "category": "캐릭터 팔레트",
    "series": "붕괴 스타레일",
    "sourceName": "공식 캐릭터 소개",
    "sourceURL": "https://hsr.hoyoverse.com/en-us/character",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 4,
    "original": true,
    "dialogueSaturation": 0.97,
    "releaseDate": "2023-11-15"
  },
  "hsrCerydra": {
    "name": "케리드라",
    "note": "깊은 왕실 파랑 · 은빛과 금색",
    "colors": [
      "#1b2940",
      "#f0f1f4",
      "#9cb9e0",
      "#e0c083",
      "#7189a9"
    ],
    "category": "캐릭터 팔레트",
    "series": "붕괴 스타레일",
    "sourceName": "공식 캐릭터 소개",
    "sourceURL": "https://hsr.hoyoverse.com/en-us/character",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 4,
    "original": true,
    "dialogueSaturation": 0.97,
    "releaseDate": "2025-09-02"
  },
  "hsrEvernight": {
    "name": "에버나이트",
    "note": "밤빛 자주색 · 분홍과 붉은색",
    "colors": [
      "#271c30",
      "#f1e8f4",
      "#cf9cc5",
      "#ec909a",
      "#87688d"
    ],
    "category": "캐릭터 팔레트",
    "series": "붕괴 스타레일",
    "sourceName": "공식 캐릭터 소개",
    "sourceURL": "https://hsr.hoyoverse.com/en-us/character",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 4,
    "original": true,
    "dialogueSaturation": 0.97,
    "releaseDate": "2025-09-24"
  },
  "hsrPhainon": {
    "name": "파이논",
    "note": "새벽빛 흰색 · 파랑과 은빛",
    "colors": [
      "#eef4f6",
      "#314958",
      "#4e7f9e",
      "#687aa4",
      "#a4bec8"
    ],
    "category": "캐릭터 팔레트",
    "series": "붕괴 스타레일",
    "sourceName": "공식 캐릭터 소개",
    "sourceURL": "https://hsr.hoyoverse.com/en-us/character",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 4,
    "original": true,
    "dialogueSaturation": 0.97,
    "releaseDate": "2025-07-02"
  },
  "hsrRobin": {
    "name": "로빈",
    "note": "연한 푸른색 · 라벤더와 장밋빛",
    "colors": [
      "#f0eff8",
      "#41415d",
      "#756aad",
      "#a0577e",
      "#bbb9d4"
    ],
    "category": "캐릭터 팔레트",
    "series": "붕괴 스타레일",
    "sourceName": "공식 캐릭터 소개",
    "sourceURL": "https://hsr.hoyoverse.com/en-us/character",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 4,
    "original": true,
    "dialogueSaturation": 0.97,
    "releaseDate": "2024-05-08"
  },
  "hsrBoothill": {
    "name": "부트힐",
    "note": "강철빛 회색 · 붉은색과 먹색",
    "colors": [
      "#e8e9e7",
      "#303437",
      "#995258",
      "#666f7d",
      "#a9adb0"
    ],
    "category": "캐릭터 팔레트",
    "series": "붕괴 스타레일",
    "sourceName": "공식 캐릭터 소개",
    "sourceURL": "https://hsr.hoyoverse.com/en-us/character",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 4,
    "original": true,
    "dialogueSaturation": 0.97,
    "releaseDate": "2024-05-29"
  },
  jojoJonathan:{name:'죠나단 죠스타',note:'푸른 상의 · 밝은 푸른 대사와 갈색 가죽',colors:["#242e67","#f7ead1","#7191e8","#d48549","#b47a40"],category:'캐릭터 팔레트',series:'죠죠의 기묘한 모험',sourceName:'죠죠 공식 애니메이션 기본 의상',sourceURL:'https://jojo-portal.com/anime/pb-bt/character/pb/01/',bg:0,ink:1,accent:2,thought:3,tint:4,line:4,muted:4,original:true,dialogueSaturation:.99,dialogueColor:'#88a6f2'},
  jojoJoseph:{name:'죠셉 죠스타',note:'올리브 상의 · 초록·노랑 머플러와 청바지',colors:["#283127","#f3e6c5","#83b75a","#ddc859","#4e7086"],category:'캐릭터 팔레트',series:'죠죠의 기묘한 모험',sourceName:'죠죠 공식 애니메이션 기본 의상',sourceURL:'https://jojo-portal.com/anime/pb-bt/character/bt/01/',bg:0,ink:1,accent:2,thought:3,tint:4,line:4,muted:4,original:true,dialogueSaturation:.99},
  jojoJotaro:{name:'쿠죠 죠타로',note:'검은 교복 · 금빛 체인과 자주색 셔츠',colors:["#191918","#f0ecd7","#dfba42","#cc4169","#477579"],category:'캐릭터 팔레트',series:'죠죠의 기묘한 모험',sourceName:'죠죠 공식 애니메이션 기본 의상',sourceURL:'https://jojo-portal.com/anime/sc/character/01/',bg:0,ink:1,accent:2,thought:3,tint:4,line:4,muted:4,original:true,dialogueSaturation:.99},
  jojoJosuke:{name:'히가시카타 죠스케',note:'남색 교복 · 금빛 하트와 보라색 구두',colors:["#171b36","#f3eac9","#e0bf47","#9e76cf","#52639c"],category:'캐릭터 팔레트',series:'죠죠의 기묘한 모험',sourceName:'죠죠 공식 애니메이션 기본 의상',sourceURL:'https://jojo-portal.com/anime/du/character/01/',bg:0,ink:1,accent:2,thought:3,tint:4,line:4,muted:4,original:true,dialogueSaturation:.99},
  jojoGiorno:{name:'죠르노 죠바나',note:'금빛 머리의 노란 지면 · 자주색 수트와 파란 장식',colors:["#fff3bb","#39263f","#ae3faf","#385390","#cba347"],category:'캐릭터 팔레트',series:'죠죠의 기묘한 모험',sourceName:'죠죠 공식 애니메이션 기본 의상',sourceURL:'https://jojo-portal.com/anime/gw/character/01/',bg:0,ink:1,accent:2,thought:3,tint:4,line:4,muted:4,original:true,dialogueSaturation:.99},
  jojoJolyne:{name:'쿠죠 죠린',note:'짙은 초록 의상 · 연두·노랑 머리와 파란 나비',colors:["#173e35","#f1e7c9","#bccb3e","#69b6d6","#897da8"],category:'캐릭터 팔레트',series:'죠죠의 기묘한 모험',sourceName:'죠죠 공식 애니메이션 기본 의상',sourceURL:'https://jojo-portal.com/anime/so/character/01/',bg:0,ink:1,accent:2,thought:3,tint:4,line:4,muted:4,original:true,dialogueSaturation:.99},
  jojoJohnny:{name:'죠니 죠스타',note:'흰 상의 · 파란 바지와 분홍색 소매 띠',colors:["#f8f9fc","#292c50","#4347a0","#b92d61","#508cb9"],category:'캐릭터 팔레트',series:'죠죠의 기묘한 모험',sourceName:'죠죠 공식 애니메이션 기본 의상',sourceURL:'https://jojo-portal.com/anime/sbr/character/01/',bg:0,ink:1,accent:2,thought:3,tint:4,line:4,muted:4,original:true,dialogueSaturation:.99},
  jojoJosuke8:{name:'히가시카타 죠스케 · 8부',note:'흰 세일러복 · 파란 줄무늬와 보라·초록 장식',colors:["#fcfcfc","#1e2450","#334ba5","#7957ae","#69a64c"],category:'캐릭터 팔레트',series:'죠죠의 기묘한 모험',sourceName:'메디코스 작가 지정 컬러',sourceURL:'https://www.medicos-e.net/newsdetail/20130311_1/',bg:0,ink:1,accent:2,thought:3,tint:4,line:4,muted:4,original:true,dialogueSaturation:.99},
  jojoDio:{name:'DIO',note:'검은 이너 · 황금빛 의상과 초록 하트',colors:["#191d19","#f2e3b9","#e0b64a","#8ac960","#997537"],category:'캐릭터 팔레트',series:'죠죠의 기묘한 모험',sourceName:'죠죠 공식 애니메이션 기본 의상',sourceURL:'https://jojo-portal.com/anime/sc/character/07/',bg:0,ink:1,accent:2,thought:3,tint:4,line:4,muted:4,original:true,dialogueSaturation:.99},
  jojoKakyoin:{name:'카쿄인 노리아키',note:'초록 교복 · 붉은 머리와 금빛 단추',colors:["#243c27","#f1ecd5","#d86b50","#8bbf60","#9f913c"],category:'캐릭터 팔레트',series:'죠죠의 기묘한 모험',sourceName:'죠죠 공식 애니메이션 기본 의상',sourceURL:'https://jojo-portal.com/anime/sc/character/02/',bg:0,ink:1,accent:2,thought:3,tint:4,line:4,muted:4,original:true,dialogueSaturation:.99},
  jojoPolnareff:{name:'장 피에르 폴나레프',note:'흰색·은빛 · 검은 상의와 붉은 귀걸이',colors:["#eef0f2","#171f2b","#3e4c61","#954847","#8a9298"],category:'캐릭터 팔레트',series:'죠죠의 기묘한 모험',sourceName:'죠죠 공식 애니메이션 기본 의상',sourceURL:'https://jojo-portal.com/anime/sc/character/03/',bg:0,ink:1,accent:2,thought:3,tint:4,line:4,muted:4,original:true,dialogueSaturation:.99},
  jojoRohan:{name:'키시베 로한',note:'흰 바지 · 보라색 셔츠와 연두색 조끼',colors:["#f7f8f2","#203e32","#8260b5","#4e842a","#95bb66"],category:'캐릭터 팔레트',series:'죠죠의 기묘한 모험',sourceName:'죠죠 공식 애니메이션 기본 의상',sourceURL:'https://jojo-portal.com/anime/du/character/04/',bg:0,ink:1,accent:2,thought:3,tint:4,line:4,muted:4,original:true,dialogueSaturation:.99},
  jojoBucciarati:{name:'브루노 부차라티',note:'흰 수트 · 검은 무늬와 금빛 지퍼',colors:["#fcfcfa","#1f2634","#a47e20","#283d6b","#929ca2"],category:'캐릭터 팔레트',series:'죠죠의 기묘한 모험',sourceName:'죠죠 공식 애니메이션 기본 의상',sourceURL:'https://jojo-portal.com/anime/gw/character/02/',bg:0,ink:1,accent:2,thought:3,tint:4,line:4,muted:4,original:true,dialogueSaturation:.99},
  jojoDiavolo:{name:'디아볼로',note:'보라색 바지 · 분홍 머리와 초록 손목 장식',colors:["#282038","#f7e8e6","#ef78b1","#5cac67","#9165c6"],category:'캐릭터 팔레트',series:'죠죠의 기묘한 모험',sourceName:'죠죠 공식 애니메이션 기본 의상',sourceURL:'https://jojo-portal.com/anime/gw/character/08/',bg:0,ink:1,accent:2,thought:3,tint:4,line:4,muted:4,original:true,dialogueSaturation:.99},
  jojoPucci:{name:'엔리코 푸치',note:'검은 성직복 · 금빛 십자가와 흰 머리',colors:["#1e262d","#f4f1ec","#d9a45f","#9e9bd0","#646e7b"],category:'캐릭터 팔레트',series:'죠죠의 기묘한 모험',sourceName:'죠죠 공식 애니메이션 기본 의상',sourceURL:'https://jojo-portal.com/anime/so/character/08/',bg:0,ink:1,accent:2,thought:3,tint:4,line:4,muted:4,original:true,dialogueSaturation:.99},
  jojoGyro:{name:'자이로 체펠리',note:'보라색 상의 · 연두 망토와 황갈색 바지',colors:["#30253f","#f4e1b4","#b1c65f","#d69540","#97744b"],category:'캐릭터 팔레트',series:'죠죠의 기묘한 모험',sourceName:'죠죠 공식 애니메이션 기본 의상',sourceURL:'https://jojo-portal.com/anime/sbr/character/02/',bg:0,ink:1,accent:2,thought:3,tint:4,line:4,muted:4,original:true,dialogueSaturation:.99},
  chiikawa:{name:'치이카와',note:'포근한 크림색 · 복숭아 분홍과 하늘색',colors:['#fff8ee','#4b4142','#d36f7f','#4f7f99','#e6c7ba'],category:'캐릭터 팔레트',series:'치이카와',sourceName:'치이카와 공식 상품 이미지',sourceURL:'https://chiikawa-info.jp/info/cho-magical/',bg:0,ink:1,accent:2,thought:3,tint:4,line:4,muted:4,original:true,dialogueSaturation:.97},
  chiikawaHachiware:{name:'하치와레',note:'눈처럼 흰색 · 하늘색과 짙은 파랑',colors:['#f8fbfc','#344753','#4f85a3','#53618b','#b8d2dd'],category:'캐릭터 팔레트',series:'치이카와',sourceName:'치이카와 공식 상품 이미지',sourceURL:'https://chiikawa-info.jp/info/cho-magical/',bg:0,ink:1,accent:2,thought:3,tint:4,line:4,muted:4,original:true,dialogueSaturation:.97},
  chiikawaUsagi:{name:'우사기',note:'버터빛 노랑 · 오렌지와 갈색',colors:['#fff6d9','#51412f','#c9782f','#8d5c39','#e1c78b'],category:'캐릭터 팔레트',series:'치이카와',sourceName:'치이카와 공식 상품 이미지',sourceURL:'https://chiikawa-info.jp/info/cho-magical/',bg:0,ink:1,accent:2,thought:3,tint:4,line:4,muted:4,original:true,dialogueSaturation:.97},
  chiikawaMomonga:{name:'모몽가',note:'흰 털 · 푸른 회색 꼬리와 회색 윤곽',colors:["#fbfcff","#3d454c","#527c9a","#6d7282","#c2d2e1"],category:'캐릭터 팔레트',series:'치이카와',sourceName:'치이카와 공식 캐릭터 상품',sourceURL:'https://chiikawamarket.jp/collections/momonga',bg:0,ink:1,accent:2,thought:3,tint:4,line:4,muted:4,original:true,dialogueSaturation:.99},
  chiikawaKurimanju:{name:'쿠리만쥬',note:'구운 밤빛 베이지 · 밤색과 따뜻한 주황',colors:['#f3e5d0','#4d382d','#8a5940','#b26f36','#c7aa84'],category:'캐릭터 팔레트',series:'치이카와',sourceName:'치이카와 공식 상품 이미지',sourceURL:'https://chiikawa-info.jp/info/cho-magical/',bg:0,ink:1,accent:2,thought:3,tint:4,line:4,muted:4,original:true,dialogueSaturation:.97},
  chiikawaRakko:{name:'랏코',note:'흰 털 · 짙은 회색 망토와 갈색 윤곽',colors:["#faf8f3","#463c35","#53555a","#8c694c","#b9b7af"],category:'캐릭터 팔레트',series:'치이카와',sourceName:'치이카와 공식 캐릭터 상품',sourceURL:'https://chiikawamarket.jp/collections/rakko',bg:0,ink:1,accent:2,thought:3,tint:4,line:4,muted:4,original:true,dialogueSaturation:.99},
  chiikawaShisa:{name:'시사',note:'크림빛 털 · 주황색 갈기와 갈색 윤곽',colors:["#fff2d9","#5a3929","#d97937","#a85e29","#eeb379"],category:'캐릭터 팔레트',series:'치이카와',sourceName:'치이카와 공식 캐릭터 상품',sourceURL:'https://chiikawamarket.jp/collections/shisa',bg:0,ink:1,accent:2,thought:3,tint:4,line:4,muted:4,original:true,dialogueSaturation:.99},
  chiikawaFuruhonya:{name:'헌책방',note:'연분홍 털 · 진분홍 게 집게와 갈색 윤곽',colors:["#fff0f2","#49332f","#d95478","#ad684c","#ed9eb0"],category:'캐릭터 팔레트',series:'치이카와',sourceName:'치이카와 공식 캐릭터 상품',sourceURL:'https://chiikawamarket.jp/collections/furuhonya',bg:0,ink:1,accent:2,thought:3,tint:4,line:4,muted:4,original:true,dialogueSaturation:.99},
  "sandrone": {
    "name": "산드로네",
    "note": "흰색 의상 · 먹색과 붉은 리본",
    "colors": [
      "#f2eee8",
      "#28252d",
      "#93414c",
      "#496f86",
      "#b5a58b"
    ],
    "category": "캐릭터 팔레트",
    "series": "원신",
    "sourceName": "공식 캐릭터 이미지",
    "sourceURL": "https://genshin.hoyoverse.com/es/news/detail/164943",
    "bg": 0,
    "ink": 1,
    "accent": 2,
    "thought": 3,
    "tint": 4,
    "line": 4,
    "muted": 4,
    "original": true,
    "dialogueSaturation": 0.97,
    "characterGroup": "일반 캐릭터",
    "releaseDate": "2026-07-01"
  }
});
  // New reading palettes retain their source hues; contrast is tuned below.
  const newPalette=(name,note,colors,category,sourceURL,extra={})=>({name,note,colors,category,sourceURL,sourceName:category==='캐릭터 팔레트'?'Blizzard 공식 기본 외형 참고':'Media.io 색 조합 참고 · 읽기용 조정',bg:0,ink:1,accent:2,thought:3,tint:4,line:4,muted:3,original:true,dialogueSaturation:.97,...extra});
  const starPalette=(name,note,colors)=>newPalette(name,note,colors,'캐릭터 팔레트','https://starcraft2.blizzard.com/',{series:'스타크래프트'});
  Object.assign(PALETTES,{
    scTerran:starPalette('테란','푸른 해병 장갑 · 강철과 주황빛 신호',['#152b40','#e5ebef','#61a6d9','#d9a057','#536c7b']),
    scProtoss:starPalette('프로토스','아이보리 장갑 · 황금빛과 푸른 사이오닉',['#f3ead3','#3b3542','#287fbc','#937129','#bbaa6c']),
    scZerg:starPalette('저그','보라색 갑각 · 점막과 황갈색 키틴',['#301535','#f0e4e8','#bd77d7','#d3a869','#82547b']),
    scRaynor:starPalette('레이너','짙은 푸른 전투복 · 황동과 강철',['#18212e','#e7e5dd','#d4a249','#78a9cc','#5f6c7b']),
    scKerrigan:starPalette('케리건','칼날 여왕의 자주색 · 주황빛 날개와 초록 눈',['#281320','#f1e3e0','#df9054','#a5c681','#80596a']),
    scArtanis:starPalette('아르타니스','하얀 장갑 · 금빛 장식과 푸른 검',['#f4f3eb','#263f58','#2776b6','#9b7224','#9eb0b7']),
    scZeratul:starPalette('제라툴','어두운 보라색 망토 · 녹색 차원 검',['#17151f','#e6e8df','#79c36e','#b1a0d5','#526453']),
    scAbathur:starPalette('아바투르','키틴 갈색 · 생체 녹색과 보라색 조직',['#292418','#ece8d6','#acc46b','#b591bc','#73714b']),
    scAlarak:starPalette('알라라크','검은 장갑 · 탈다림의 붉은 사이오닉',['#201315','#f0e5e1','#e26564','#c7b2ce','#825052']),
    scTalandar:starPalette('탈란다르','정화자의 흰 장갑 · 주황빛 에너지와 청록',['#ecebe4','#364650','#b86a20','#247f87','#b7a777']),
    scNova:starPalette('노바','밝은 유령 전투복 · 푸른 조명과 금발',['#edf2f5','#25364c','#267fbb','#947333','#9fbbc9']),
    scTosh:starPalette('토시','검은 악령 전투복 · 붉은 바이저와 보라색 에너지',['#1b1d21','#e5e5df','#dd7464','#aa89cd','#616078']),
    cacaoGlacier:newPalette('카카오 빙하','짙은 코코아 지면 · 구리와 빙하색',['#24150f','#f0e2d6','#d89a6b','#8dc5d1','#795a47'],'다크 모드','https://www.media.io/ko/color-palette/brown-color-palette.html'),
    walnutLilac:newPalette('월넛 라일락','짙은 호두색 지면 · 라일락과 올리브 금빛',['#30241b','#eee6d8','#c5a5df','#c4be7c','#847158'],'다크 모드','https://www.media.io/ko/color-palette/brown-color-palette.html'),
    mahoganyMint:newPalette('마호가니 민트','붉은 갈색 지면 · 민트와 장밋빛',['#2b1512','#efe1db','#9bcdb5','#d698ad','#855f59'],'다크 모드','https://www.media.io/ko/color-palette/brown-color-palette.html'),
    umberCitrus:newPalette('엄버 시트러스','검갈색 지면 · 레몬빛과 회청색',['#19120d','#e8e2d6','#d4c875','#9eafd1','#726449'],'다크 모드','https://www.media.io/ko/color-palette/brown-color-palette.html'),
    mediaSeafoam:newPalette('씨폼 블러시','옅은 아쿠아 지면 · 장밋빛 대사와 청록',['#d9fffb','#111827','#af397b','#18787a','#8dbdb8'],'라이트 모드','https://www.media.io/color-palette/pink-turquoise-color-palette.html'),
    mediaSnack:newPalette('스낵 팩 파스텔','레몬 크림 지면 · 보라색과 민트',['#fff1a8','#3e344c','#7653a3','#247e73','#c5b3a0'],'라이트 모드','https://www.media.io/color-palette/retro-90s-color-palette.html'),
    mediaAmethyst:newPalette('아메시스트 타이드','연보라 지면 · 깊은 청록과 자주색',['#e6def3','#36284a','#0f7c7f','#7e386b','#ae9bc2'],'라이트 모드','https://www.media.io/color-palette/purple-turquoise-color-palette.html'),
    mediaPoolside:newPalette('풀사이드 나이트','차콜 지면 · 분홍빛과 시원한 아쿠아',['#1f2937','#eef0f3','#ed83b4','#69cfc7','#657c89'],'다크 모드','https://www.media.io/color-palette/pink-turquoise-color-palette.html'),
    mediaGalaxy:newPalette('갤럭시 풀','깊은 보라 지면 · 풀 블루와 라벤더',['#1b103a','#eee8f6','#69c7e1','#b295dc','#74628c'],'다크 모드','https://www.media.io/color-palette/purple-turquoise-color-palette.html'),
    mediaArcade:newPalette('애프터 아케이드','먹색 지면 · 시안과 마젠타, 작은 금빛',['#0b0b0f','#e8e9ed','#67c6d1','#d882bc','#a48d4e'],'다크 모드','https://www.media.io/color-palette/retro-90s-color-palette.html')
  });
  // Default outfits and sprite colors; readable surfaces keep the source hues.
  // Shared survivors appear once, followed by 2-only survivors and both bosses.
  const rainPalette=(name,note,colors,game,sourceURL='https://store.steampowered.com/app/632360/Risk_of_Rain_2/')=>newPalette(name,note,colors,'캐릭터 팔레트',sourceURL,{series:'리스크 오브 레인 1 & 2',sourceName:'공식 기본 외형·게임 스프라이트 참고 · 읽기용 조정',game,dialogueSaturation:.97});
  Object.assign(PALETTES,{
    rorCommando:rainPalette('코만도 · Commando','노란 전투복 지면 · 짙은 바이저와 차가운 강철',['#e9c55d','#302719','#6b4c22','#335d76','#a18b53'],'1·2'),
    rorEnforcer:rainPalette('인포서 · Enforcer','푸른 장갑과 방패 · 노란 바이저와 강철',['#223a64','#edf1cf','#d6c354','#b6c3d8','#667ba7'],'1·2','https://store.steampowered.com/app/3055670/Risk_of_Rain_2_Hallowed_Concepts/'),
    rorBandit:rainPalette('밴디트 · Bandit','청록색 모자 · 갈색 코트와 밝은 셔츠',['#dce9e4','#3a2b22','#267e7c','#925e30','#8ba79f'],'1·2'),
    rorHuntress:rainPalette('헌트리스 · Huntress','붉은 장갑 지면 · 푸른 활과 따뜻한 금빛',['#7d3843','#f6e9e1','#9ecae3','#e8bf94','#bd8491'],'1·2'),
    rorHanD:rainPalette('HAN-D','세이지색 기계 장갑 · 주황색 연결부',['#dbe3d3','#28372e','#b76724','#3e7174','#79927e'],'1','https://store.steampowered.com/app/248820/Risk_of_Rain/'),
    rorEngineer:rainPalette('엔지니어 · Engineer','초록색 지면 · 보라색 장갑과 연두색 조명',['#315c47','#f0f1df','#c7a4e9','#ccda8b','#82a797'],'1·2'),
    rorMiner:rainPalette('마이너 · Miner','올리브 금빛 작업복 · 석회색 바이저',['#e6e2c5','#34382b','#7c681e','#5c6648','#979574'],'1','https://store.steampowered.com/app/248820/Risk_of_Rain/'),
    rorSniper:rainPalette('스나이퍼 · Sniper','연보라색 헬멧 · 올리브 장비와 보라색 장갑',['#e8dde9','#2d3024','#69752b','#785391','#9c9d6e'],'1','https://store.steampowered.com/app/248820/Risk_of_Rain/'),
    rorAcrid:rainPalette('아크리드 · Acrid','보라색 갑각 · 연두색 독과 밝은 송곳니',['#352b46','#edebd3','#bad273','#be97d3','#79745c'],'1·2'),
    rorMercenary:rainPalette('머서너리 · Mercenary','어두운 전투복 · 시안색 검과 흰 헬멧',['#182234','#e2edf5','#68c5d6','#c4cba6','#4d7d91'],'1·2'),
    rorLoader:rainPalette('로더 · Loader','노란 지면 · 코발트색 장갑과 금빛 장비',['#efe3a2','#283b58','#3058a2','#766322','#9c975e'],'1·2'),
    rorChef:rainPalette('셰프 · CHEF','흰 조리모 · 회청색 로봇과 주황빛 화염',['#f0f2ee','#34403f','#b75540','#4f7881','#a2afa8'],'1·2','https://store.steampowered.com/app/2306620/Risk_of_Rain_2_Seekers_of_the_Storm/'),
    rorMulT:rainPalette('MUL-T','회색 철판 지면 · 머스터드색 기계와 푸른 관절',['#d6d8d4','#313940','#8a681c','#365b88','#89928b'],'2'),
    rorArtificer:rainPalette('아티피서 · Artificer','흰 의복 · 검은 장갑과 불꽃·얼음',['#f6f3ee','#444b50','#b66c28','#427c8d','#a49b90'],'2'),
    rorRex:rainPalette('REX','올리브색 기계 · 분홍 꽃과 연두색 줄기',['#34362a','#eae8cf','#dd9bb6','#b6ce72','#878462'],'2'),
    rorCaptain:rainPalette('캡틴 · Captain','짙은 남색 제복 지면 · 밝은 장갑과 금빛 장식',['#1e344c','#edf0e8','#d6b465','#95c4d7','#60768d'],'2'),
    rorHeretic:rainPalette('이단자 · Heretic','짙은 붉은 날개 지면 · 회백색 가면과 차가운 보라',['#4a2027','#f3e6df','#bfc2e2','#e7a193','#97616b'],'2'),
    rorRailgunner:rainPalette('레일거너 · Railgunner','올리브색 후드 · 붉은 바이저와 보라색 총',['#e0e4d0','#313645','#9e3944','#5b5b8e','#84916a'],'2','https://store.steampowered.com/app/1607890/Risk_of_Rain_2__Survivors_of_the_Void/'),
    rorVoidFiend:rainPalette('공허 악마 · Void Fiend','보라색 공허 지면 · 밝은 균열과 청록빛',['#44305f','#eee8f5','#c2a2ec','#7bd2cf','#8f70ad'],'2','https://store.steampowered.com/app/1607890/Risk_of_Rain_2__Survivors_of_the_Void/'),
    rorSeeker:rainPalette('시커 · Seeker','살구빛 연노랑 의복 지면 · 청록색 영혼과 붉은 천',['#f4dfa9','#47352e','#26726f','#934641','#b49260'],'2','https://store.steampowered.com/app/2306620/Risk_of_Rain_2_Seekers_of_the_Storm/'),
    rorFalseSon:rainPalette('거짓된 자손 · False Son','청회색 석체 · 금빛 장갑과 푸른 달빛',['#313943','#ece7d2','#d1b661','#97bcd4','#8c8872'],'2','https://store.steampowered.com/app/2306620/Risk_of_Rain_2_Seekers_of_the_Storm/'),
    rorOperator:rainPalette('오퍼레이터 · Operator','밝은 금속 머리 · 청록색 기계와 녹색 눈',['#dbe8ec','#253846','#236f88','#516f2b','#667789'],'2','https://store.steampowered.com/app/2781620/Risk_of_Rain_2_Alloyed_Collective/'),
    rorDrifter:rainPalette('드리프터 · Drifter','주황빛 노란 후드 지면 · 푸른 배낭과 갈색 끈',['#edba61','#263849','#245eac','#704419','#9c7850'],'2','https://store.steampowered.com/app/2781620/Risk_of_Rain_2_Alloyed_Collective/'),
    rorAcolyte:rainPalette('애콜라이트 · Acolyte','흰 가면 · 붉은 옷과 연두색 눈, 보라색 장식',['#f0ede8','#453b42','#b04752','#54742c','#947e9f'],'2','https://store.steampowered.com/app/3055670/Risk_of_Rain_2_Hallowed_Concepts/'),
    rorProvidence:rainPalette('프로비던스 · Providence','붉은 망토 · 밝은 갑옷과 청록색 검',['#eeeae3','#292931','#b24550','#337f94','#a18b65'],'보스 · 1','https://store.steampowered.com/app/248820/Risk_of_Rain/'),
    rorMithrix:rainPalette('미스락스 · Mithrix','차가운 청회색 · 푸른 망치와 달빛 보라',['#28394b','#e0e8ef','#88bddd','#b3acc8','#71929a'],'보스 · 2')
  });
  const THEMES={};
  THEMES.white={bg:'#ffffff',ink:'#333333',muted:'#727272',line:'#b5b5b5',quote:'#ededed',quoteLine:'#c4c4c4',accent:'#555555',thoughtAccent:'#222222'};
  const THOUGHT_ACCENTS={ivory:'#476675',antique:'#4d6260',hollywood:'#5f617d',rose:'#536b6a',blue:'#835a3d',lavender:'#536872',travel:'#4f6c79',deco:'#2f6f6d',dark:'#cba88f',navy:'#b9cad9'};
  const DIVIDERS={single:'---',double:'===',diamond:'--- ◆ ---',stars:'* * *',dots:'· · ·',ornate:'— ✧ —',dashed:'- - - - -',cross:'— × —',diamonds:'◇ ◆ ◇',custom:'[HR:CUSTOM]'};
  const DIVIDER_MARKER='[HR]';
  const PRETENDARD_STYLESHEET='https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css';
  const BODY_FONTS={serif:{label:'명조 · 기본 serif',family:'serif'},sans:{label:'고딕 · 기본 sans-serif',family:'sans-serif'},mono:{label:'고정폭 · 기본 monospace',family:'monospace'},pretendard:{label:'프리텐다드',family:'Pretendard,sans-serif'}};
  const bodyFont=key=>BODY_FONTS[key]?.family||BODY_FONTS.serif.family;
  const escapeHTML=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function mastheadSettings(draft={}){
    const bounded=(value,min,max,fallback,scale)=>value==null||!Number.isFinite(Number(value))?fallback:Math.round(Math.max(min,Math.min(max,Number(value)))*scale)/scale;
    return {mastheadSize:bounded(draft.mastheadSize,32,100,60,1),mastheadLineHeight:bounded(draft.mastheadLineHeight,1,1.8,1.25,20)};
  }
  function paperHeaderStyles(t,draft={}){
    if(draft.layoutType==='journey')return journeyHeaderStyles(t,draft);
    if(draft.layoutType==='cinema')return cinemaHeaderStyles(t,draft);
    if(draft.layoutType==='music'||draft.layoutType==='diary'){
      const styles=draft.layoutType==='music'?musicHeaderStyles(t,draft):diaryHeaderStyles(t,draft);
      if(!hasFolioContent(draft)){
        styles.folio='display:none;margin:0;padding:0;border:0;';
        if(draft.layoutType==='music')styles.masthead+='margin-bottom:26px;';
      }
      return styles;
    }
    const {mastheadSize,mastheadLineHeight}=mastheadSettings(draft);
    const english="'Times New Roman',Georgia,serif";
    const folioItem=(width,align)=>`display:inline-block;width:${width}%;border:0;padding:0;text-align:${align};vertical-align:top;min-width:0;overflow-wrap:anywhere;`;
    return {
      kicker:`display:block;width:100%;border:0;border-top:1px solid ${t.line};padding:12px 0 0;margin:0;font-family:${english};font-size:8px;font-weight:400;font-style:normal;letter-spacing:1.5px;line-height:1.6;color:${t.muted};`,
      kickerLeft:'display:inline-block;width:50%;text-align:left;vertical-align:top;',
      kickerRight:'display:inline-block;width:50%;text-align:right;vertical-align:top;',
      masthead:`font-family:${english};font-size:${mastheadSize}px;font-weight:700;font-style:normal;letter-spacing:-4px;text-align:center;line-height:${mastheadLineHeight};margin:12px 0 0;color:${t.ink};overflow-wrap:anywhere;`,
      motto:`font-family:${english};font-size:11px;font-weight:400;font-style:italic;letter-spacing:.8px;text-align:center;line-height:1.6;margin:7px 0 20px;color:${t.muted};`,
      folio:`display:block;border:0;border-top:3px double ${t.line};border-bottom:1px solid ${t.line};padding:9px 0;margin:0;font-family:${english};font-size:10px;font-weight:400;font-style:normal;letter-spacing:normal;line-height:1.8;color:${t.ink};`,
      folioLeft:folioItem(33.333,'left'),folioCenter:folioItem(33.334,'center'),folioRight:folioItem(33.333,'right')
    };
  }
  function hasFolioContent(draft){return ['issue','location','date'].some(key=>String(draft[key]||'').trim());}
  function paperHeaderHTML(draft,t){
    const s=paperHeaderStyles(t,draft),copy=layoutCopy(draft),folioText=value=>String(value||'').trim()?escapeHTML(value):'&nbsp;';
    const folio=(draft.layoutType==='music'||draft.layoutType==='diary')&&!hasFolioContent(draft)?'':`<div style="${s.folio}"><span style="${s.folioLeft}">${folioText(copy.issue)}</span><span style="${s.folioCenter}">${folioText(draft.location)}</span><span style="${s.folioRight}">${folioText(draft.date)}</span></div>`;
    return `<div style="${s.kicker}"><span style="${s.kickerLeft}">${escapeHTML(copy.left)}</span><span style="${s.kickerRight}">${escapeHTML(copy.right)}</span></div><p style="${s.masthead}">${escapeHTML(draft.paperName||'FOG & INK')}</p>${copy.motto?`<p style="${s.motto}">${escapeHTML(copy.motto)}</p>`:''}${folio}`;
  }
  function layoutCopy(draft){if(draft.layoutType==='journey')return {left:'',right:'NOTES FROM THE ROAD',motto:'',issue:String(draft.issue||'').trim()?'LOG '+draft.issue:'',footer:'WRITTEN ALONG THE WAY.'};if(draft.layoutType==='cinema')return {left:'THE PRIVATE SCREENING',right:'A FOG & INK PICTURE',motto:'',issue:String(draft.issue||'').trim()?'PROGRAMME — '+draft.issue:'',footer:'THE END · THE STORY STAYS.'};if(draft.layoutType==='diary')return {left:'PERSONAL JOURNAL',right:'MOMENTS & MEMORIES',motto:'',issue:String(draft.issue||'').trim()?'No. '+draft.issue:'',footer:'PAGES OF TODAY, MEMORIES FOR TOMORROW.'};return draft.layoutType==='music'?{left:'PERSONAL PLAYLIST',right:'LISTENING ROOM',motto:'',issue:String(draft.issue||'').trim()?'SESSION — '+draft.issue:'',footer:'KEEP THIS ONE ON REPEAT.'}:{left:'AN INDEPENDENT JOURNAL',right:'STORIES WORTH KEEPING',motto:'A CHRONICLE OF MOMENTS, REAL & IMAGINED.',issue:String(draft.issue||'').trim()?'VOL. I — NO. '+draft.issue:'',footer:'PRINTED WITH CARE, KEPT WITH LOVE.'};}
  function footerCredit(draft){const name=String(draft.authorName||'').replace(/\s+/g,' ').trim().slice(0,60);return 'FOG & INK'+(name?' | AUTHOR · '+name:'');}
  function footerCreditHTML(draft,t={},editable=false){const name=String(draft.authorName||'').replace(/\s+/g,' ').trim().slice(0,60),author=name?' | AUTHOR · '+escapeHTML(name):'',link='<a class="paper-home-link" href="https://fogandink.github.io/fog-and-ink/" target="_blank" rel="noopener noreferrer" style="font-family:Georgia,serif;font-size:10px;line-height:1.8;letter-spacing:.5px;color:'+escapeHTML(t.muted||'#737373')+';text-decoration:none;">FOG &amp; INK</a>';return link+(editable?'<span id="paper-author-name">'+author+'</span>':author);}
  function paperFooterHTML(draft,t){return '<div class="paper-footer" style="display:block;margin:22px 0 0;padding:0;border:0;text-align:center;color:'+t.muted+';"><div style="font-family:Georgia,serif;font-size:8px;line-height:1.8;letter-spacing:1.2px;">'+escapeHTML(layoutCopy(draft).footer)+'</div><div class="paper-byline" style="font-family:Georgia,serif;font-size:10px;line-height:1.8;letter-spacing:.5px;margin:6px 0 0;overflow-wrap:anywhere;">'+footerCreditHTML(draft,t)+'</div></div>';}
  function musicHeaderStyles(t,draft){
    const {mastheadSize,mastheadLineHeight}=mastheadSettings(draft),font='Arial,sans-serif';
    const item=(width,align)=>`display:inline-block;width:${width}%;border:0;padding:0;text-align:${align};vertical-align:top;overflow-wrap:anywhere;`;
    return {kicker:`display:block;width:100%;border:0;padding:0;margin:0;font-family:${font};font-size:9px;font-weight:600;letter-spacing:1.8px;line-height:1.6;color:${t.accent};`,kickerLeft:item(50,'left'),kickerRight:item(50,'right'),masthead:`font-family:${font};font-size:${mastheadSize}px;font-weight:700;font-style:normal;letter-spacing:-3.5px;text-align:center;line-height:${mastheadLineHeight};margin:15px 0 0;color:${t.ink};overflow-wrap:anywhere;`,motto:`font-family:${font};font-size:12px;font-weight:400;font-style:normal;letter-spacing:normal;text-align:left;line-height:1.8;margin:6px 0 18px;color:${t.muted};`,folio:`display:block;border:0;padding:0;margin:18px 0 26px;font-family:${font};font-size:9px;font-weight:400;letter-spacing:.5px;line-height:1.8;color:${t.muted};`,folioLeft:item(33.333,'left'),folioCenter:item(33.334,'center'),folioRight:item(33.333,'right')};
  }
  function characterFontSettings(draft){
    const custom=Object.hasOwn(BODY_FONTS,draft.characterFont),music=draft.layoutType==='music',key=custom?draft.characterFont:music?'sans':draft.bodyFont;
    return {key,nameFamily:custom||music?bodyFont(key):'Georgia,serif',music,gridMargin:characterContentSpacing(draft).gridMargin};
  }
  function musicPanelBackgroundColor(t,draft={}){
    const role=draft.musicPanelColorMode;
    if(role==='custom')return colorHex(draft.musicPanelColor,t.quote);
    const colors={bg:t.bg,ink:t.ink,accent:t.dialogueAccent||t.accent,thought:t.thoughtAccent,line:t.line};
    if(Object.hasOwn(colors,role))return colors[role];
    const rgb=colorHex(t.ink,'#333333').slice(1).match(/../g).map(value=>parseInt(value,16));
    return 'rgba('+rgb.join(',')+','+(characterImageValue(draft.musicPanelOpacity,0,100,10)/100)+')';
  }
  function musicPanelTheme(t,draft={}){
    const paper=t.bg==='transparent'?(isDarkColor(t.ink)?'#ffffff':'#181818'):t.bg,original=!draft.musicPanelColorMode||draft.musicPanelColorMode==='original',background=draft.musicPanelBackground===false?paper:original?mixColor(paper,t.ink,characterImageValue(draft.musicPanelOpacity,0,100,10)/100):musicPanelBackgroundColor(t,draft),bg=background==='transparent'?paper:background;
    const readableOn=(color,surface,minimum=4.5)=>{const black=contrastRatio('#000000',surface),white=contrastRatio('#ffffff',surface);return readableColor(color,[surface],black>=white?'#000000':'#ffffff',Math.min(minimum,Math.max(black,white)));};
    const roles={bg:t.ink,ink:t.ink,accent:t.dialogueAccent||t.accent,thought:t.thoughtAccent,line:t.line};
    if(Object.hasOwn(roles,draft.musicPanelColorMode)){
      const readableHue=(color,surface,minimum=4.5)=>{const black=contrastRatio('#000000',surface),white=contrastRatio('#ffffff',surface);return readablePaletteColor(color,[surface],black>=white?'#000000':'#ffffff',1,Math.min(minimum,Math.max(black,white)));};
      const inkSeed=contrastRatio(t.ink,bg)>=contrastRatio(paper,bg)?t.ink:paper;
      const accentSeed=draft.musicPanelColorMode==='accent'?t.thoughtAccent:(t.dialogueAccent||t.accent);
      const primary=readableHue(inkSeed,bg),accent=readableHue(colorHex(accentSeed,t.ink),bg),muted=readableHue(colorHex(t.muted,t.ink),bg),line=readableHue(colorHex(t.line,t.ink),bg,3),tagBg=colorHex(t.quote,paper);
      const tagSeed=draft.musicPanelColorMode==='thought'?(t.dialogueAccent||t.accent):t.thoughtAccent;
      return {...t,bg,ink:primary,accent,muted,line,tagBg,tagInk:readableHue(colorHex(tagSeed,t.ink),tagBg),iconInk:readableOn(t.ink,accent)};
    }
    const ink=readableOn(colorHex(t.ink,'#333333'),bg,7),accent=readableOn(colorHex(t.accent,ink),bg),muted=readableOn(colorHex(t.muted,ink),bg),line=readableOn(colorHex(t.line,muted),bg,3),tagBg=mixColor(bg,ink,.08);
    return {...t,bg,ink,accent,muted,line,tagBg,tagInk:readableOn(muted,tagBg),iconInk:readableOn(ink,accent)};
  }
  function characterContentSpacing(draft={}){
    const hasCharacters=(Array.isArray(draft.characters)?draft.characters:[]).some(character=>character&&(String(character.name||'').trim()||String(character.description||'').trim()||safeImageURL(character.image||'')));
    const hasModels=[draft.mainModel,draft.secondaryModel,draft.prompt].some(value=>String(value||'').trim());
    return {hasCharacters,hasModels,gridMargin:'10px 0',modelMarginBottom:10,storyMarginTop:10,precedingMarginBottom:6};
  }
  function newsContentSpacing(draft={}){
    const spacing=characterContentSpacing(draft);
    return {...spacing,storyMarginTop:spacing.hasCharacters?spacing.storyMarginTop:30};
  }
  function musicContentSpacing(draft={}){
    const spacing=characterContentSpacing(draft);
    return {...spacing,storyMarginTop:spacing.hasCharacters?spacing.storyMarginTop:spacing.hasModels?30:24,groupMarginTop:spacing.hasModels?30:0};
  }
  function musicStyles(t,draft={}){
    const font='Arial,sans-serif',panel=draft.musicPanelBackground!==false,panelColor=musicPanelBackgroundColor(t,draft),p=musicPanelTheme(t,draft);
    return {hero:`display:inline-flex;flex-wrap:wrap;align-items:center;width:100%;margin:0;padding:${panel?12:0}px;background-color:${panel?panelColor:'transparent'};border:0;border-radius:${panel?22:0}px;box-sizing:border-box;`,art:`display:block;flex:1 1 230px;width:100%;max-width:${panel?364:388}px;min-width:0;border:0;margin:0;padding:12px;box-sizing:border-box;`,track:'display:block;flex:1 1 270px;min-width:0;max-width:100%;text-align:left;margin:0;padding:12px 12px 20px;box-sizing:border-box;',label:`display:block;font-family:${font};font-size:9px;font-weight:600;line-height:1.8;letter-spacing:1.7px;margin:0;color:${p.accent};word-break:normal;overflow-wrap:break-word;`,title:`font-family:${font};font-size:${characterImageValue(draft.titleSize,20,160,48)}px;font-weight:700;font-style:normal;letter-spacing:-1.4px;line-height:1.25;white-space:pre-line;text-align:left;margin:8px 0 0;color:${p.ink};word-break:normal;overflow-wrap:break-word;word-wrap:break-word;`,subtitle:`font-family:${font};font-size:13px;line-height:1.9;white-space:pre-line;text-align:left;margin:10px 0 0;color:${p.muted};word-break:normal;overflow-wrap:break-word;`,tags:'display:block;width:100%;margin:16px 0 0;',tag:`display:inline-block;font-family:${font};font-size:10px;line-height:1.7;letter-spacing:.4px;color:${p.tagInk};background-color:${p.tagBg};border-radius:20px;padding:5px 9px;margin:0 6px 6px 0;`,controls:'width:100%;margin:24px 0 0;',footer:`font-family:${font};font-size:9px;letter-spacing:2px;text-align:center;margin:30px 0 0;color:${t.muted};`};
  }
  function musicControlsHTML(draft,t){
    const p=musicPanelTheme(t,draft);
    const heights=[10,18,28,14,34,42,26,18,36,24,12,30,40,22,14,32,42,28,18,34,24,12,30,38,20,14,32,26,16,24,34,12];
    const waveform=`<div class="music-waveform" role="img" aria-label="사각 음파" style="display:block;width:100%;height:44px;margin:0 0 20px;padding:0;border:0;white-space:nowrap;text-align:left;font-size:0;letter-spacing:0;line-height:44px;">${heights.map((height,index)=>`<span aria-hidden="true" style="display:inline-block;vertical-align:middle;width:2.25%;height:${height}px;margin:0 .8% 0 0;padding:0;border:0;border-radius:0;background-color:${index<18?p.accent:p.line};font-size:0;line-height:0;">&nbsp;</span>`).join('')}</div>`;
    const video=youtube(draft.youtube);
    const iconStyle=`display:inline-block;width:46px;height:46px;line-height:46px;vertical-align:middle;text-align:center;border:0;border-radius:50%;background-color:${p.accent};color:${p.iconInk};font-family:Arial,sans-serif;font-size:22px;font-weight:400;text-decoration:none;`;
    const icon=`<span aria-hidden="true" style="${iconStyle}">♫</span>`;
    return waveform+`<div style="display:block;margin:0;padding:0;line-height:1.7;">${icon}<div style="display:inline-block;vertical-align:middle;margin-left:12px;font-family:Arial,sans-serif;font-size:11px;line-height:1.7;"><div style="font-size:9px;font-weight:600;letter-spacing:1.4px;color:${p.ink};">${video?'SOUNDTRACK':'STORY ON REPEAT'}</div><div style="font-size:11px;color:${p.muted};word-break:normal;overflow-wrap:break-word;">${escapeHTML(draft.chapter||'A story to keep close.')}</div></div></div>`;
  }

  function musicPageHTML(draft,t,image,parts){
    const s=musicStyles(t,draft),tags=String(draft.tags).split(/[,，]/).map(value=>value.trim().replace(/^#+/,'')).filter(Boolean).slice(0,30);
    const radius=draft.musicCoverRounded===false?'0':'12px',cover=draft.image?(image?coverPhotoHTML(image,draft):`<div style="width:100%;height:0;padding:100% 0 0;text-align:center;background-color:${t.bg};border:0;border-radius:${radius};color:${t.muted};">&nbsp;</div>`):'';
    const hero=`<div style="${s.hero}">${cover?`<div style="${s.art}">${cover}</div>`:''}<div style="${s.track}">${draft.storyLabel.trim()?`<div style="${s.label}">${escapeHTML(draft.storyLabel)}</div>`:''}<div style="${s.title}">${escapeHTML(draft.title||'제목 없는 이야기').replace(/\n/g,'<br>')}</div>${draft.subtitle.trim()?`<div style="${s.subtitle}">${escapeHTML(draft.subtitle).replace(/\n/g,'<br>')}</div>`:''}${tags.length?`<div style="${s.tags}">${tags.map(tag=>`<span style="${s.tag}">${escapeHTML(tag)}</span>`).join('')}</div>`:''}<div style="${s.controls}">${musicControlsHTML(draft,t)}</div></div></div>`;
    return `<div data-layout="music" style="display:block;width:100%;max-width:${draft.paperWidth}px;margin:0 auto;padding:${draft.paperPadding}px;background-color:${t.bg};color:${t.ink};font-family:Arial,sans-serif;border:0;border-radius:24px;box-shadow:none;box-sizing:border-box;">${paperHeaderHTML(draft,t)}${parts.video}${hero}<div style="margin:${musicContentSpacing(draft).groupMarginTop}px 0 0;">${parts.models}${parts.characters}${parts.story}${parts.additional}${parts.comment}</div>${paperFooterHTML(draft,t)}</div>`;
  }


  function diaryStyles(t,draft){
    const font=bodyFont(draft.bodyFont),gap=characterImageValue(draft.diaryPhotoGap,0,160,48),side=characterImageValue(draft.diaryPhotoSideGap,0,80,12),size=characterImageValue(draft.titleSize,20,160,48),hasSubtitle=String(draft.subtitle||'').trim(),hasTags=String(draft.tags||'').split(/[,，]/).some(tag=>tag.trim().replace(/^#+/,'')),frameColor=diaryPhotoFrameColor(t,draft),border=draft.diaryPhotoBorder===false?'0':'1px solid '+t.line;
    return {hero:'display:block;margin:24px 0 0;padding:0 0 '+(hasSubtitle||hasTags?0:20)+'px;border:0;',photoMount:'display:block;width:100%;margin:0 0 20px;padding:0;border:0;',art:'display:block;margin:0;padding:'+side+'px '+side+'px '+gap+'px;border:'+border+';border-radius:0;background-color:'+frameColor+';',track:'display:block;margin:0;padding:0;text-align:left;',label:'display:inline-block;font-family:'+font+';font-size:11px;font-weight:400;line-height:1.6;letter-spacing:.5px;color:'+t.accent+';background-color:'+t.quote+';border:0;border-top:3px solid '+t.line+';padding:3px 7px;margin:0 0 10px;text-align:left;',title:'font-family:'+font+';font-size:'+size+'px;font-weight:600;font-style:normal;line-height:1.3;letter-spacing:-.7px;margin:0;color:'+t.ink+';text-align:left;overflow-wrap:anywhere;',metaRow:'display:flex;flex-wrap:wrap;align-items:flex-start;row-gap:4px;width:100%;font-size:0;line-height:0;margin:10px 0 4px;padding:0;border:0;',subtitle:'display:inline-block;vertical-align:top;flex:1 1 400px;min-width:0;max-width:100%;width:'+(hasTags?65:100)+'%;font-family:'+font+';font-size:14px;font-weight:400;line-height:1.9;text-align:left;margin:0;padding:0;color:'+t.muted+';overflow-wrap:anywhere;',tags:'display:inline-block;vertical-align:top;flex:1 1 180px;min-width:0;max-width:100%;width:'+(hasSubtitle?35:100)+'%;text-align:right;font-family:'+font+';font-size:10px;line-height:2.66;margin:0;padding:0;color:'+t.muted+';overflow-wrap:anywhere;'};
  }
  function diaryPhotoFrameColor(t,draft){const role=draft.diaryPhotoColorRole||(draft.diaryPhotoCustomColor?'custom':'ink'),keys={bg:'bg',ink:'ink',accent:'accent',thought:'thoughtAccent',line:'line'};return role==='custom'?colorHex(draft.diaryPhotoColor,t.bg):(t[keys[role]||'ink']);}
  function diaryLabelHTML(value,t){return escapeHTML(value).replace(/\n/g,'<br>');}

  function diaryHeaderStyles(t,draft){
    const {mastheadSize,mastheadLineHeight}=mastheadSettings(draft),meta="'Times New Roman',Georgia,serif",item=(width,align)=>'display:inline-block;width:'+width+'%;vertical-align:top;text-align:'+align+';';
    return {kicker:'display:block;border:0;margin:0;padding:0;font-family:Arial,sans-serif;font-size:9px;font-weight:500;letter-spacing:1.5px;line-height:1.8;color:'+t.muted+';',kickerLeft:item(50,'left'),kickerRight:item(50,'right'),masthead:'font-family:'+meta+';font-size:'+mastheadSize+'px;font-weight:700;font-style:normal;line-height:'+mastheadLineHeight+';letter-spacing:-2px;text-align:center;margin:10px 0 0;color:'+t.ink+';overflow-wrap:anywhere;',motto:'display:none;',folio:'display:block;border:0;border-bottom:1px solid '+t.line+';margin:21px 0 0;padding:0 0 16px;font-family:Arial,sans-serif;font-size:9px;line-height:1.8;letter-spacing:.8px;color:'+t.muted+';',folioLeft:item(33.333,'left'),folioCenter:item(33.334,'center'),folioRight:item(33.333,'right')};
  }
  function diaryPageHTML(draft,t,image,parts){
    const s=diaryStyles(t,draft),line=value=>escapeHTML(value).replace(/\n/g,'<br>');
    const photo=image?'<div style="'+s.photoMount+'"><div style="'+s.art+'">'+coverPhotoHTML(image,draft)+'</div></div>':'';
    const tags=String(draft.tags).split(/[,，]/).map(value=>value.trim().replace(/^#+/,'')).filter(Boolean).slice(0,30);
    const models=parts.models.replace(/padding:0 8px;/g,'padding:0;').replace(/margin:22px 0 /g,'margin:8px 0 ');
    const heading='font-family:'+bodyFont(draft.bodyFont)+';font-size:18px;font-weight:400;font-style:normal;line-height:1.8;color:'+t.ink+';margin:0;',content=commentHTML(draft.comment,t,draft.commentAlign,draft.bodyFont,draft.dividerStyle,draft.customDivider);
    const comments=draft.commentEnabled!==false&&draft.comment.trim()?'<div style="border:0;border-top:3px double '+t.line+';margin:36px 0 0;padding:0;">'+(draft.commentFold?'<details style="border:0;display:block;margin:0;padding:0;"><summary style="'+heading+'padding:20px 0;">Notes</summary><div style="margin:18px 0 0;">'+content+'</div></details>':'<div style="padding:20px 0 0;"><p style="'+heading+'margin:0 0 18px;">Notes</p>'+content+'</div>')+'</div>':'';
    const meta=draft.subtitle.trim()||tags.length?'<div style="'+s.metaRow+'">'+(draft.subtitle.trim()?'<div style="'+s.subtitle+'">'+line(draft.subtitle)+'</div>':'')+(tags.length?'<div style="'+s.tags+'">'+tags.map(tag=>'#'+escapeHTML(tag)).join(' &nbsp; ')+'</div>':'')+'</div>':'';
    return '<div data-layout="diary" style="display:block;width:100%;max-width:'+draft.paperWidth+'px;margin:0 auto;background-color:'+t.bg+';color:'+t.ink+';font-family:'+bodyFont(draft.bodyFont)+';border-radius:0;"><div style="padding:'+draft.paperPadding+'px;">'+paperHeaderHTML(draft,t)+parts.video+'<div style="'+s.hero+'">'+photo+(draft.storyLabel.trim()?'<div style="'+s.label+'">'+diaryLabelHTML(draft.storyLabel,t)+'</div>':'')+'<div style="'+s.title+'">'+line(draft.title||'제목 없는 이야기')+'</div></div>'+meta+models+parts.characters+parts.story+parts.additional+comments+paperFooterHTML(draft,t)+'</div></div>';
  }

  function cinemaHeaderStyles(t,draft={}){
    const {mastheadSize,mastheadLineHeight}=mastheadSettings(draft),font="'Times New Roman',Georgia,serif";
    return {kicker:'display:block;width:100%;padding:12px 0 0;border:0;border-top:1px solid '+t.line+';margin:0;font-family:'+font+';font-size:8px;line-height:1.8;letter-spacing:1.8px;color:'+t.muted+';',kickerLeft:'display:inline-block;width:50%;vertical-align:top;text-align:left;',kickerRight:'display:inline-block;width:50%;vertical-align:top;text-align:right;',masthead:'font-family:'+font+';font-size:'+mastheadSize+'px;font-weight:600;font-style:normal;line-height:'+mastheadLineHeight+';letter-spacing:-.8px;text-align:left;margin:12px 0 12px;color:'+t.ink+';overflow-wrap:anywhere;',motto:'display:none;',folio:'display:block;border:0;border-bottom:1px solid '+t.line+';padding:0 0 16px;margin:0;font-family:'+font+';font-size:9px;line-height:1.8;letter-spacing:.5px;color:'+t.muted+';',folioLeft:'display:inline-block;width:33.333%;vertical-align:top;text-align:left;overflow-wrap:anywhere;',folioCenter:'display:inline-block;width:33.334%;vertical-align:top;text-align:center;overflow-wrap:anywhere;',folioRight:'display:inline-block;width:33.333%;vertical-align:top;text-align:right;overflow-wrap:anywhere;'};
  }
  function cinemaPosterSize(draft={}){
    const height=characterImageValue(draft.imageHeight,100,450,400);
    return {height,width:characterImageValue(draft.cinemaPosterWidth,100,450,height*2/3)};
  }
  function cinemaStyles(t,draft={}){
    const posterWidth=cinemaPosterSize(draft).width,serif=bodyFont(draft.bodyFont),english="'Times New Roman',Georgia,serif";
    return {hero:'display:flex;flex-wrap:wrap;align-items:center;gap:28px;width:100%;margin:30px 0 32px;padding:0;border:0;',art:'display:block;flex:0 1 '+posterWidth+'px;width:100%;max-width:'+posterWidth+'px;min-width:0;box-sizing:border-box;margin:0 auto;padding:0;border:0;background-color:transparent;',track:'display:block;flex:1 1 260px;min-width:0;max-width:100%;padding:12px 0;margin:0;text-align:left;',label:'display:block;font-family:'+english+';font-size:9px;font-weight:400;line-height:1.8;letter-spacing:2px;color:'+t.accent+';margin:0 0 14px;overflow-wrap:anywhere;',title:'font-family:'+serif+';font-size:'+characterImageValue(draft.titleSize,20,160,48)+'px;font-weight:600;line-height:1.2;letter-spacing:-1.2px;text-align:left;white-space:pre-line;margin:0;color:'+t.ink+';overflow-wrap:anywhere;',subtitle:'display:block;font-family:'+english+';font-size:15px;font-style:italic;line-height:1.8;text-align:left;white-space:pre-line;margin:14px 0 0;color:'+t.muted+';overflow-wrap:anywhere;',synopsis:'display:block;font-family:'+serif+';font-size:13px;font-weight:400;font-style:normal;line-height:2;text-align:left;white-space:pre-line;margin:22px 0 0;padding:0;border:0;color:'+t.ink+';overflow-wrap:anywhere;',tags:'display:block;width:100%;text-align:left;line-height:2;margin:20px 0 0;',tag:'display:inline-block;vertical-align:top;font-family:'+english+';font-size:9px;line-height:1.7;letter-spacing:.5px;margin:0 6px 6px 0;padding:3px 7px;border:0;border-radius:0;color:'+t.muted+';'};
  }
  function cinemaPageHTML(draft,t,image,parts){
    const s=cinemaStyles(t,draft),line=v=>escapeHTML(v).replace(/\n/g,'<br>'),tags=String(draft.tags||'').split(/[,，]/).map(v=>v.trim().replace(/^#+/,'')).filter(Boolean).slice(0,30);
    const track='<div style="'+s.track+'">'+(String(draft.storyLabel||'').trim()?'<div style="'+s.label+'">'+line(draft.storyLabel)+'</div>':'')+'<div style="'+s.title+'">'+line(draft.title||'제목 없는 이야기')+'</div>'+(String(draft.subtitle||'').trim()?'<div style="'+s.subtitle+'">'+line(draft.subtitle)+'</div>':'')+(String(draft.filmSynopsis||'').trim()?'<div style="'+s.synopsis+'">'+line(draft.filmSynopsis)+'</div>':'')+(tags.length?'<div style="'+s.tags+'">'+tags.map(tag=>'<span style="'+s.tag+'">#'+escapeHTML(tag)+'</span>').join('')+'</div>':'')+'</div>';
    const poster=image?'<div style="'+s.art+'">'+coverPhotoHTML(image,draft)+'</div>':'',heroContent=draft.cinemaPosterSide==='left'?poster+track:track+poster;
    return '<div data-layout="cinema" style="display:block;width:100%;max-width:'+draft.paperWidth+'px;margin:0 auto;padding:'+draft.paperPadding+'px;box-sizing:border-box;border:0;border-radius:0;background-color:'+t.bg+';color:'+t.ink+';font-family:'+bodyFont(draft.bodyFont)+';">'+paperHeaderHTML(draft,t)+parts.video+'<div style="'+s.hero+'">'+heroContent+'</div>'+parts.models+parts.characters+parts.story+parts.additional+parts.comment+paperFooterHTML(draft,t)+'</div>';
  }

  function journeyHeaderStyles(t,draft={}){
    const {mastheadLineHeight}=mastheadSettings(draft),mastheadSize=characterImageValue(draft.journeyMastheadSize,12,100,18),english="'Cormorant Garamond','Times New Roman',Georgia,serif";
    const item=(width,align)=>'display:inline-block;width:'+width+'%;vertical-align:top;text-align:'+align+';overflow-wrap:anywhere;';
    return {
      kicker:'display:block;flex:0 1 auto;min-width:0;border:0;padding:0;margin:0;font-family:Arial,sans-serif;font-size:9px;font-weight:400;letter-spacing:1.6px;line-height:1.8;text-align:right;color:'+t.muted+';overflow-wrap:anywhere;',
      kickerLeft:'display:none;',kickerRight:'display:inline;vertical-align:top;',
      masthead:'display:block;flex:1 1 160px;min-width:0;font-family:'+english+';font-size:'+mastheadSize+'px;font-weight:500;font-style:normal;line-height:'+mastheadLineHeight+';letter-spacing:1px;text-align:left;margin:0;padding:0;color:'+t.ink+';overflow-wrap:anywhere;',
      motto:'display:none;',
      folio:'display:block;width:100%;box-sizing:border-box;border:0;border-bottom:1px solid '+t.line+';padding:10px 0;margin:0;font-family:Arial,sans-serif;font-size:9px;font-weight:400;line-height:1.8;letter-spacing:.8px;color:'+t.muted+';',
      folioLeft:item(33.333,'left'),folioCenter:item(33.334,'center'),folioRight:item(33.333,'right')
    };
  }
  function journeyStyles(t,draft={}){
    const serif=bodyFont(draft.bodyFont),english="'Cormorant Garamond','Times New Roman',Georgia,serif",titleFont=!draft.bodyFont||draft.bodyFont==='serif'?"'Cormorant Garamond','Noto Serif KR',Batang,Georgia,serif":serif;
    return {
      header:'display:flex;flex-wrap:wrap;align-items:baseline;justify-content:space-between;gap:10px 20px;width:100%;margin:0;padding:0;border:0;',
      hero:'display:block;width:100%;min-width:0;margin:0;padding:0;border:0;',
      track:'display:block;width:100%;min-width:0;box-sizing:border-box;text-align:center;margin:0;padding:28px 0 24px;border:0;',
      label:'display:block;font-family:Arial,sans-serif;font-size:9px;font-weight:400;font-style:normal;line-height:1.8;letter-spacing:2px;text-align:center;margin:0 0 12px;color:'+t.accent+';overflow-wrap:anywhere;',
      title:'font-family:'+titleFont+';font-size:'+characterImageValue(draft.titleSize,20,160,48)+'px;font-weight:500;font-style:normal;line-height:1.15;letter-spacing:-1px;text-align:center;white-space:pre-line;margin:0;padding:0;color:'+t.ink+';overflow-wrap:anywhere;',
      subtitle:'display:block;font-family:'+serif+';font-size:13px;font-weight:400;font-style:normal;line-height:1.9;text-align:center;white-space:pre-line;margin:16px 0 0;padding:0;color:'+t.muted+';overflow-wrap:anywhere;',
      ornament:'display:block;width:100%;margin:21px auto 0;padding:0;border:0;text-align:center;line-height:1;font-size:9px;color:'+t.accent+';',
      art:'display:block;width:100%;min-width:0;max-width:100%;margin:0;padding:0;border:0;border-radius:0;background-color:transparent;',
      metadata:'display:block;width:100%;min-width:0;margin:0;padding:0;border:0;',
      synopsis:'display:block;max-width:520px;margin:22px auto 0;padding:0;border:0;font-family:'+serif+';font-size:13px;font-weight:400;font-style:normal;line-height:2;text-align:center;white-space:pre-line;color:'+t.ink+';overflow-wrap:anywhere;',
      tags:'display:block;width:100%;text-align:center;line-height:2;margin:16px 0 0;padding:0;border:0;',
      tag:'display:inline-block;vertical-align:top;font-family:'+english+';font-size:10px;font-weight:400;line-height:1.8;letter-spacing:.4px;margin:0 7px 4px 0;padding:0;border:0;border-radius:0;color:'+t.muted+';',
      sectionLabel:'display:flex;align-items:center;gap:12px;width:100%;min-width:0;padding:0;border:0;margin:0;font-family:Arial,sans-serif;font-size:9px;font-weight:400;font-style:normal;line-height:1.8;letter-spacing:1.8px;color:'+t.accent+';',
      sectionLabelText:'display:block;flex:0 1 auto;min-width:0;overflow-wrap:anywhere;',
      sectionLabelRule:'display:block;flex:1 1 30px;min-width:12px;height:0;line-height:0;font-size:0;margin:0;padding:0;border:0;border-top:1px solid '+t.line+';',
      characterGroup:'display:block;width:100%;min-width:0;margin:24px 0 0;padding:0;border:0;',
      modelGroup:'display:block;width:100%;min-width:0;margin:0;padding:0;border:0;',
      entriesGroup:'display:block;width:100%;min-width:0;margin:26px 0 0;padding:0;border:0;'
    };
  }
  function journeyOrnamentHTML(t,draft={}){
    const s=journeyStyles(t,draft),rule='display:inline-block;width:70px;max-width:30%;height:0;vertical-align:middle;border:0;border-top:1px solid '+t.line+';margin:0 12px;padding:0;line-height:0;font-size:0;';
    return '<div aria-hidden="true" style="'+s.ornament+'"><span style="'+rule+'">&nbsp;</span><span style="display:inline-block;vertical-align:middle;font-family:Georgia,serif;font-size:9px;line-height:1;color:'+t.accent+';">◆</span><span style="'+rule+'">&nbsp;</span></div>';
  }
  function journeySectionLabelHTML(value,t,draft={}){
    const s=journeyStyles(t,draft);
    return '<div style="'+s.sectionLabel+'"><span style="'+s.sectionLabelText+'">'+escapeHTML(value)+'</span><span aria-hidden="true" style="'+s.sectionLabelRule+'">&nbsp;</span></div>';
  }
  function journeyPageHTML(draft,t,image,parts){
    const s=journeyStyles(t,draft),h=journeyHeaderStyles(t,draft),copy=layoutCopy(draft),line=value=>escapeHTML(value).replace(/\n/g,'<br>');
    const tags=String(draft.tags||'').split(/[,，]/).map(value=>value.trim().replace(/^#+/,'')).filter(Boolean).slice(0,30);
    const header='<div style="'+s.header+'"><div style="'+h.masthead+'">'+line(draft.paperName||'FOG & INK')+'</div><div style="'+h.kicker+'">'+escapeHTML(copy.right)+'</div></div>';
    const title='<div style="'+s.track+'">'+(String(draft.storyLabel||'').trim()?'<div style="'+s.label+'">'+line(draft.storyLabel)+'</div>':'')+'<div style="'+s.title+'">'+line(draft.title||'제목 없는 이야기')+'</div>'+(String(draft.subtitle||'').trim()?'<div style="'+s.subtitle+'">'+line(draft.subtitle)+'</div>':'')+journeyOrnamentHTML(t,draft)+'</div>';
    const photo=image?'<div style="'+s.art+'">'+coverPhotoHTML(image,draft)+'</div>':'';
    const folio=hasFolioContent(draft)?'<div style="'+h.folio+'"><span style="'+h.folioLeft+'">'+line(draft.location||'')+'</span><span style="'+h.folioCenter+'">'+line(draft.date||'')+'</span><span style="'+h.folioRight+'">'+line(copy.issue)+'</span></div>':'';
    const synopsis=String(draft.filmSynopsis||'').trim()?'<div style="'+s.synopsis+'">'+line(draft.filmSynopsis)+'</div>':'';
    const tagList=tags.length?'<div style="'+s.tags+'">'+tags.map(tag=>'<span style="'+s.tag+'">#'+escapeHTML(tag)+'</span>').join('')+'</div>':'';
    const characters=parts.characters?'<div style="'+s.characterGroup+'">'+journeySectionLabelHTML('COMPANIONS',t,draft)+parts.characters+'</div>':'';
    const models=parts.models?'<div style="'+s.modelGroup+'">'+parts.models+'</div>':'';
    const entries='<div style="'+s.entriesGroup+'">'+journeySectionLabelHTML('JOURNAL ENTRIES',t,draft)+(parts.story||'')+(parts.additional||'')+'</div>';
    return '<div data-layout="journey" style="display:block;width:100%;max-width:'+draft.paperWidth+'px;margin:0 auto;padding:'+draft.paperPadding+'px;box-sizing:border-box;border:0;border-radius:0;background-color:'+t.bg+';color:'+t.ink+';font-family:'+bodyFont(draft.bodyFont)+';">'+header+'<div style="'+s.hero+'">'+title+(parts.video||'')+photo+'</div><div style="'+s.metadata+'">'+folio+synopsis+tagList+'</div>'+characters+models+entries+(parts.comment||'')+paperFooterHTML(draft,t)+'</div>';
  }

  function safeURL(value){try{let s=String(value).trim();if(s.startsWith('//'))s='https:'+s;const u=new URL(s);return ['https:','http:'].includes(u.protocol)?u.href:''}catch{return ''}}
  function safeImageURL(value){
    const image=String(value||'').trim();
    return /^data:image\/(?:jpeg|png|webp|gif);base64,[A-Za-z0-9+/=]+$/.test(image)?image:safeURL(image);
  }
  function youtube(value){const address=safeURL(value);if(!address)return null;const u=new URL(address);let id='';if(['youtu.be','www.youtu.be'].includes(u.hostname))id=u.pathname.split('/')[1];else if(['youtube.com','www.youtube.com','m.youtube.com','music.youtube.com','youtube-nocookie.com','www.youtube-nocookie.com'].includes(u.hostname)){if(u.pathname==='/watch')id=u.searchParams.get('v');else if(['embed','shorts','live'].includes(u.pathname.split('/')[1]))id=u.pathname.split('/')[2]}if(!/^[a-zA-Z0-9_-]{11}$/.test(id||''))return null;let raw=u.searchParams.get('t')||u.searchParams.get('start')||'';let start=/^[0-9]+$/.test(raw)?Number(raw):0;if(!start){for(const m of raw.matchAll(/([0-9]+)(h|m|s)/g))start+=Number(m[1])*({h:3600,m:60,s:1}[m[2]])}start=Math.min(86400,Math.max(0,start));return {id,href:`https://www.youtube.com/watch?v=${id}${start?'&t='+start+'s':''}`,embed:`https://www.youtube-nocookie.com/embed/${id}${start?'?start='+start:''}`}}
  const TRANSPARENT_THEMES={dark:{bg:'transparent',ink:'#333333',muted:'#737373',line:'#b5b5b5',quote:'#e7e7e7',quoteLine:'#c4c4c4',accent:'#555555',thoughtAccent:'#202020'},light:{bg:'transparent',ink:'#e7e7e7',muted:'#b2b2b2',line:'#626262',quote:'#363636',quoteLine:'#777777',accent:'#d0d0d0',thoughtAccent:'#f4f4f4'}};
  const colorHex=(value,fallback)=>/^#[a-f0-9]{6}$/i.test(String(value))?String(value).toLowerCase():fallback;
  function mixColor(a,b,amount){const rgb=value=>value.slice(1).match(/../g).map(x=>parseInt(x,16));const first=rgb(a),second=rgb(b);return '#'+first.map((value,index)=>Math.round(value+(second[index]-value)*amount).toString(16).padStart(2,'0')).join('');}
  function isDarkColor(value){const hex=colorHex(value,'#ffffff'),rgb=hex.slice(1).match(/../g).map(x=>parseInt(x,16)/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4);return rgb[0]*.2126+rgb[1]*.7152+rgb[2]*.0722<.18;}
  function contrastRatio(a,b){const luminance=hex=>{const c=hex.slice(1).match(/../g).map(x=>parseInt(x,16)/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4);return c[0]*.2126+c[1]*.7152+c[2]*.0722;};const first=luminance(a),second=luminance(b);return (Math.max(first,second)+.05)/(Math.min(first,second)+.05);}
  function readableColor(color,backgrounds,ink,minimum=4.5){for(let step=0;step<=100;step++){const candidate=mixColor(color,ink,step/100);if(backgrounds.every(bg=>contrastRatio(candidate,bg)>=minimum))return candidate;}return ink;}
  // Keep preset surfaces and reading accents calm; custom colors remain exact.
  function softenPresetColor(value,maxChroma){
    const rgb=value.slice(1).match(/../g).map(hex=>parseInt(hex,16)),min=Math.min(...rgb),max=Math.max(...rgb),chroma=max-min;
    if(chroma<=maxChroma)return value;
    const neutral=(min+max)/2,ratio=maxChroma/chroma;
    return '#'+rgb.map(channel=>Math.round(neutral+(channel-neutral)*ratio).toString(16).padStart(2,'0')).join('');
  }
  // Reduce brand saturation in HSL so green stays green and blue stays blue.
  function softenBrandColor(value,amount=.97){
    const rgb=value.slice(1).match(/../g).map(hex=>parseInt(hex,16)/255),min=Math.min(...rgb),max=Math.max(...rgb),light=(max+min)/2;
    if(max===min)return value;
    const saturation=(max-min)/(1-Math.abs(2*light-1)),next=saturation*amount,chroma=(1-Math.abs(2*light-1))*next,ratio=chroma/(max-min);
    return '#'+rgb.map(channel=>Math.round((light+(channel-light)*ratio)*255).toString(16).padStart(2,'0')).join('');
  }
  function paletteColorHSL(value){
    const [r,g,b]=value.slice(1).match(/../g).map(hex=>parseInt(hex,16)/255),max=Math.max(r,g,b),min=Math.min(r,g,b),delta=max-min,l=(max+min)/2;
    if(!delta)return [0,0,l];
    const h=(((max===r?(g-b)/delta:max===g?(b-r)/delta+2:(r-g)/delta+4)*60)%360+360)%360;
    return [h,delta/(1-Math.abs(2*l-1)),l];
  }
  function paletteColorFromHSL(h,s,l){
    const c=(1-Math.abs(2*l-1))*s,x=c*(1-Math.abs((h/60)%2-1)),m=l-c/2;
    const channels=h<60?[c,x,0]:h<120?[x,c,0]:h<180?[0,c,x]:h<240?[0,x,c]:h<300?[x,0,c]:[c,0,x];
    return '#'+channels.map(value=>Math.round(Math.max(0,Math.min(1,value+m))*255).toString(16).padStart(2,'0')).join('');
  }
  // Adjust lightness for readability without washing the original hue out with gray.
  function readablePaletteColor(value,backgrounds,ink,amount=.97,minimum=4.5){
    const [h,s,l]=paletteColorHSL(value),target=isDarkColor(ink)?0:1;
    for(let step=0;step<=200;step++){
      const candidate=paletteColorFromHSL(h,s*amount,l+(target-l)*step/200);
      if(backgrounds.every(bg=>contrastRatio(candidate,bg)>=minimum))return candidate;
    }
    return ink;
  }
  for(const [key,palette]of Object.entries(PALETTES)){
    if(palette.sourceURL){
      const c=palette.colors,bg=c[palette.bg],dark=isDarkColor(bg),inkTarget=dark?'#ffffff':'#111111',quoteTint=softenBrandColor(c[palette.tint]),quote=mixColor(bg,quoteTint,.045);
      const ink=readableColor(c[palette.ink],[bg,quote],inkTarget),textColor=color=>readablePaletteColor(color,[bg,quote],inkTarget);
      // Divider saturation can be tuned without changing text accents.
      let line=mixColor(bg,c[palette.line],.6);
      for(let step=0;step<=100&&contrastRatio(line,bg)<1.5;step++)line=mixColor(c[palette.line],inkTarget,step/100);
      line=softenBrandColor(line,palette.lineSaturation??1);
      THEMES[key]={bg,ink,quote,line,quoteLine:quoteTint,muted:readableColor(mixColor(bg,ink,.65),[bg],ink),accent:textColor(c[palette.accent]),thoughtAccent:textColor(c[palette.thought])};
      continue;
    }
    const c=palette.colors,bg=softenPresetColor(c[palette.bg],64),line=softenPresetColor(c[palette.line],120),quoteTint=softenPresetColor(c[palette.tint],120),quote=mixColor(bg,quoteTint,palette.sourceURL ? .08 : .24),ink=readableColor(c[palette.ink],[bg,quote],isDarkColor(bg)?'#ffffff':'#211e1c');
    const textColor=color=>readablePaletteColor(color,[bg,quote],isDarkColor(bg)?'#ffffff':'#211e1c');
    THEMES[key]={bg,ink,quote,line,quoteLine:quoteTint,muted:readableColor(softenPresetColor(c[palette.muted],96),[bg],ink),accent:textColor(c[palette.accent]),thoughtAccent:textColor(c[palette.thought]||THOUGHT_ACCENTS[key])};
  }
  // Dialogue saturation may be reduced per palette; other accents keep their colors.
  for(const [key,t]of Object.entries(THEMES)){
    const palette=PALETTES[key],source=palette?palette.colors[palette.accent]:t.accent;
    t.dialogueAccent=palette?.dialogueColor||readablePaletteColor(source,[t.bg,t.quote],isDarkColor(t.bg)?'#ffffff':'#111111',Math.max(.95,palette?.dialogueSaturation??.97));
  }
  // Keep the established lead groups; order the remaining cards by playable release.
  const STAR_RAIL_LEAD=['hsrTrailblazer','hsrMarch7th','hsrDanHeng','hsrHimeko','hsrWelt','hsrSunday','hsrSeele','hsrAcheron','hsrSilverWolf','hsrKafka','hsrBlade','hsrFirefly'];
  function paletteEntries(category){
    const entries=Object.entries(PALETTES).filter(([key])=>paletteCategory(key)===category);
    if(category!=='캐릭터 팔레트')return entries;
    const series=new Map();
    for(const entry of entries){const name=entry[1].series||'기타';if(!series.has(name))series.set(name,[]);series.get(name).push(entry);}
    for(const [name,items]of series){
      if(name==='원신')items.sort(([,a],[,b])=>Number(b.characterGroup==='집정관')-Number(a.characterGroup==='집정관')||(a.characterGroup==='집정관'?0:(a.releaseDate||'9999-12-31').localeCompare(b.releaseDate||'9999-12-31')));
      if(name==='붕괴 스타레일')items.sort(([aKey,a],[bKey,b])=>{
        const aLead=STAR_RAIL_LEAD.indexOf(aKey),bLead=STAR_RAIL_LEAD.indexOf(bKey);
        if(aLead>=0||bLead>=0)return(aLead<0?Infinity:aLead)-(bLead<0?Infinity:bLead);
        return(a.releaseDate||'9999-12-31').localeCompare(b.releaseDate||'9999-12-31');
      });
    }
    return Array.from(series.values()).flat();
  }
  function paletteCategory(key){return key==='transparent'||key==='custom'?'커스텀 팔레트':PALETTES[key]?.category|| (PALETTES[key]?.sourceURL?'브랜드 팔레트 1':isDarkColor(THEMES[key]?.bg||'#ffffff')?'다크 모드':'라이트 모드');}
  function theme(paper,transparentInk,custom={}){
    if(paper==='custom'){const bg=colorHex(custom.customBg,'#efe7db'),ink=colorHex(custom.customInk,'#2a2420'),accent=colorHex(custom.customAccent,'#6a4b3a'),quote=mixColor(bg,accent,.09),thoughtAccent=colorHex(custom.customThought,readableColor(mixColor(accent,ink,.65),[bg,quote],isDarkColor(bg)?'#ffffff':'#211e1c')),line=colorHex(custom.customLine,mixColor(bg,ink,.3));return {bg,ink,accent,thoughtAccent,muted:mixColor(bg,ink,.66),line,quote,quoteLine:mixColor(bg,accent,.32)};}
    if(paper==='transparent'){
      const base=TRANSPARENT_THEMES[transparentInk==='light'?'light':'dark'];
      if(!custom.transparentCustomColors)return {...base};
      const ink=colorHex(custom.transparentCustomInk,base.ink),accent=colorHex(custom.transparentCustomAccent,base.accent),thoughtAccent=colorHex(custom.transparentCustomThought,base.thoughtAccent),line=colorHex(custom.transparentCustomLine,base.line),quote=colorHex(custom.transparentCustomQuote,base.quote);
      return {bg:'transparent',ink,accent,thoughtAccent,line,quote,quoteLine:line,muted:mixColor(ink,line,.25)};
    }
    return THEMES[paper]||THEMES.ivory;
  }
  function arcaDarkModeHTML(html,background){
    // Transparent paper follows the destination board's native color handling.
    if(background==='transparent')return html;
    const guard='rgba(0,0,0,0.004)';
    // Arca checks each element against the page, including bright panels on dark paper.
    const surface=value=>{
      const color=value.trim().toLowerCase();
      if(/^(transparent|initial|unset|inherit)$/.test(color))return null;
      if(/^#[a-f0-9]{6}$/.test(color))return {hex:color,alpha:1};
      if(/^#[a-f0-9]{3}$/.test(color))return {hex:'#'+[...color.slice(1)].map(x=>x+x).join(''),alpha:1};
      if(color==='white'||color==='black')return {hex:color==='white'?'#ffffff':'#000000',alpha:1};
      const rgb=color.match(/^rgba?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)(?:\s*,\s*(\d*(?:\.\d+)?))?\s*\)$/);
      return rgb?{hex:'#'+rgb.slice(1,4).map(x=>Math.round(Math.min(255,Number(x))).toString(16).padStart(2,'0')).join(''),alpha:rgb[4]===undefined?1:Number(rgb[4])}:null;
    };
    return html.replace(/\sstyle="([^"]*)"/g,(attribute,original)=>{
      const hasColor=/(?:^|;)\s*color\s*:/i.test(original);
      let color='',image='none',style=original;
      for(const declaration of original.matchAll(/(?:^|;)\s*(background(?:-color|-image)?)\s*:\s*([^;]+)(?=;|$)/gi)){
        const property=declaration[1].toLowerCase(),value=declaration[2].trim();
        if(property==='background-color')color=value;
        else if(property==='background-image')image=value;
        else if(surface(value)||/^(transparent|initial|unset|inherit|none)$/.test(value)){color=value;image='none';}
        else {color='transparent';image=value;}
      }
      const parsed=surface(color),hasSurface=parsed&&parsed.alpha>0;
      const append=value=>{style+=(style.endsWith(';')?'':';')+value+';';};
      if(hasSurface&&['#222222','#000000'].some(page=>contrastRatio(parsed.hex,page)>6)){
        // Keep the visible color and any photo/gradient; only the computed color becomes the guard.
        append('background-image:'+(image==='none'?'':image+',')+'linear-gradient('+color+','+color+')');
        append('background-color:'+guard);
      }else if(hasColor&&!hasSurface)append('background-color:'+guard);
      return ' style="'+style+'"';
    });
  }
  function replaceLiteral(value,find,replacement=''){
    const text=String(value);if(!find)return {text,count:0};
    let from=0,count=0,result='',position;
    while((position=text.indexOf(find,from))!==-1){result+=text.slice(from,position)+replacement;from=position+find.length;count++;}
    return {text:result+text.slice(from),count};
  }
  function removeLiteralRanges(value,start,end){
    const text=String(value);if(!start||!end)return {text,count:0,unclosed:false};
    let from=0,count=0,result='',position;
    while((position=text.indexOf(start,from))!==-1){
      const close=text.indexOf(end,position+start.length);
      if(close===-1)return {text:result+text.slice(from),count,unclosed:true};
      result+=text.slice(from,position);from=close+end.length;count++;
    }
    return {text:result+text.slice(from),count,unclosed:false};
  }
  function normalizeCleanupRules(value){
    if(!Array.isArray(value))return [];
    return value.flatMap(rule=>{
      if(!rule||typeof rule!=='object'||!['replace','delete','tags'].includes(rule.action))return [];
      if(rule.action==='tags')return typeof rule.start==='string'&&rule.start!==''&&typeof rule.end==='string'&&rule.end!==''?[{action:'tags',start:rule.start,end:rule.end,enabled:rule.enabled!==false}]:[];
      return typeof rule.find==='string'&&rule.find!==''?[{action:rule.action,find:rule.find,replace:rule.action==='replace'&&typeof rule.replace==='string'?rule.replace:'',enabled:rule.enabled!==false}]:[];
    });
  }
  function applyCleanupRules(value,rules){
    let text=String(value);const stats=[];
    for(const [index,rule]of rules.entries()){
      const normalized=normalizeCleanupRules([rule])[0];
      if(!normalized||!normalized.enabled){stats.push({index,count:0,unclosed:false,changed:false});continue;}
      const before=text,result=normalized.action==='tags'?removeLiteralRanges(text,normalized.start,normalized.end):replaceLiteral(text,normalized.find,normalized.replace);
      text=result.text;stats.push({index,count:result.count,unclosed:!!result.unclosed,changed:before!==text});
    }
    return {text,stats,count:stats.reduce((sum,rule)=>sum+rule.count,0)};
  }
  function blocks(value){
    const result=[];let lines=[];
    const flush=()=>{if(lines.length){result.push({kind:'paragraph',text:lines.join('\n')});lines=[];}};
    for(const line of String(value).replace(/\r/g,'').split('\n')){
      const s=line.trim(),type=Object.entries(DIVIDERS).find(([,marker])=>marker===s)?.[0];
      if(type){flush();result.push({kind:'divider',style:type});}
      else if(/\[HR\]/i.test(line)){
        line.split(/\[HR\]/i).forEach((part,index)=>{
          if(index){flush();result.push({kind:'divider',style:'single'});}
          if(part.trim())lines.push(part);
        });
      }else if(!s)flush();else lines.push(line);
    }
    flush();return result;
  }
  function quotes(value){const text=String(value);const pattern=/"[^"\n]+?"|“[^”\n]+?”|‘[^’\n]+?’|(?<![\p{L}\p{N}])'[^'\n]+?'|「[^」\n]+?」|『[^』\n]+?』/gu;const parts=[];let end=0;for(const m of text.matchAll(pattern)){if(m.index>end)parts.push({quote:false,text:text.slice(end,m.index)});parts.push({quote:true,text:m[0]});end=m.index+m[0].length}if(end<text.length)parts.push({quote:false,text:text.slice(end)});return parts}
  function formatSelectedText(value,format){
    const source=String(value),pair={italic:['*','*'],bold:['**','**'],both:['***','***'],double:['“','”'],single:['‘','’']}[format];
    if(!pair||!source.trim())return source;
    const [open,close]=pair,parts=source.split(/(\r\n|\r|\n)/),rows=parts.map((line,index)=>{
      const core=line.trim(),skip=index%2===1||!core||Object.values(DIVIDERS).includes(core)||/^\[\/?FOLD(?:\s+[^\]]*)?\]$/.test(core)||/^\[HR\]$/i.test(core);
      const count=core.match(/^\*+/)?.[0].length||0,mask=!skip&&count<=3&&count>0&&core.length>count*2&&core.match(/\*+$/)?.[0].length===count?count:0;
      const marked=!skip&&(open.startsWith('*')?(mask&open.length)===open.length:core.length>open.length+close.length&&core.startsWith(open)&&core.endsWith(close));
      return {line,core,skip,marked,mask};
    });
    const active=rows.filter(row=>!row.skip),remove=active.length>0&&active.every(row=>row.marked);
    return rows.map(({line,core,skip,marked,mask})=>{
      if(skip)return line;let formatted;
      if(open.startsWith('*')){
        const marker='*'.repeat(remove?mask&~open.length:mask|open.length),text=mask?core.slice(mask,-mask):core;
        formatted=marker+text+marker;
      }else formatted=remove?core.slice(open.length,-close.length):marked?core:open+core+close;
      return line.match(/^\s*/)[0]+formatted+line.match(/\s*$/)[0];
    }).join('');
  }
  function dividerHTML(style,t,custom='· ✦ ·'){const base=`margin:32px 0;color:${t.muted};text-align:center;line-height:1.5;`;if(style==='single'||style==='double'||style==='dots'||style==='dashed')return `<hr style="display:block;width:100%;height:0;padding:0;${base}border:0;border-top:${style==='double'?'3px double':style==='dots'?'2px dotted':style==='dashed'?'1px dashed':'1px solid'} ${t.line};">`;const symbol=style==='custom'?escapeHTML(String(custom).slice(0,80).trim()||'· ✦ ·'):{diamond:'◆',stars:'✦ &nbsp; ✦ &nbsp; ✦',ornate:'— &nbsp; ✧ &nbsp; —',cross:'— &nbsp; × &nbsp; —',diamonds:'◇ &nbsp; ◆ &nbsp; ◇'}[style]||'◆';return `<div role="separator" style="${base}font-family:Georgia,serif;font-size:15px;letter-spacing:5px;">${symbol}</div>`}
  function dialogueBoxColor(t,options={}){
    const roles={line:t.line,ink:t.ink,accent:t.dialogueAccent||t.accent,thought:t.thoughtAccent||t.accent};
    return options.quoteBackgroundColorMode==='custom'?colorHex(options.quoteBackgroundColor,t.line):roles[options.quoteBackgroundColorMode]||t.line;
  }
  function dialogueBoxBackground(t,options={}){
    if(!options.quoteBackgroundColorMode)return t.quote;
    const color=dialogueBoxColor(t,options),opacity=characterImageValue(options.quoteBackgroundOpacity,0,100,15)/100;
    return 'rgba('+color.slice(1).match(/../g).map(hex=>parseInt(hex,16)).join(',')+','+opacity+')';
  }
  function inlineHTML(value,t,highlight,background=highlight,options={}){
    const thoughtColor=t.thoughtAccent||t.accent,dialogueColor=t.dialogueAccent||t.accent;
    const plain=text=>escapeHTML(text).replace(/\n/g,'<br>');
    function render(text,inQuote=false,depth=0,inheritedColor=t.ink){
      if(depth>32)return plain(text);
      const pattern=/"[^"\n]+?"|“[^”\n]+?”|‘[^’\n]+?’|(?<![\p{L}\p{N}])'[^'\n]+?'|「[^」\n]+?」|『[^』\n]+?』|\*\*\*([^\n]+?)\*\*\*|\*\*([^\n]+?)\*\*|\*([^*\n]+?)\*/gu;
      let result='',end=0;
      for(const match of text.matchAll(pattern)){
        result+=plain(text.slice(end,match.index));const token=match[0];
        if(token.startsWith('*')){
          const tag=match[3]?'em':'strong',both=!!match[1],color=inQuote?inheritedColor:t.accent,content=render(match[1]||match[2]||match[3],inQuote,depth+1,color);
          const ink=tag==='em'||both?`<span style="color:${color};">${content}</span>`:content;
          result+=`<${tag} style="color:${inQuote?'inherit':t.accent};${tag==='strong'?'font-weight:700;':'font-style:italic;'}">${both?'<em style="font-style:italic;">':''}${ink}${both?'</em>':''}</${tag}>`;
        }else{
          const double=/^["“『]/.test(token),color=highlight?(double?dialogueColor:thoughtColor):inheritedColor,content=plain(token[0])+render(token.slice(1,-1),true,depth+1,color)+plain(token.at(-1));
          if((!highlight&&!background)||(inQuote&&!highlight))result+=content;
          else result+=`<span class="dialogue-inline${highlight?(double?' dialogue-bold':' dialogue-thought'):''}${inQuote?' dialogue-nested':''}" style="${background&&!inQuote?'background-color:'+(double?dialogueBoxBackground(t,options):t.quote)+';padding:1px 4px;':'background-color:transparent;padding:0;'}${highlight?'color:'+(double?dialogueColor:thoughtColor)+';font-weight:'+(inQuote?'inherit':double?700:500)+';':'color:inherit;font-weight:inherit;'}border:0;border-radius:0;box-decoration-break:clone;-webkit-box-decoration-break:clone;">${content}</span>`;
        }
        end=match.index+token.length;
      }
      return result+plain(text.slice(end));
    }
    return render(String(value));
  }
  function dropCapHTML(html,fontSize){let applied=false;return html.replace(/(<[^>]+>)|([^<]+)/g,(part,tag,text)=>{if(tag||applied)return part;for(const token of text.matchAll(/&(?:#x[a-f0-9]+|#\d+|[a-z]+);|[\s\S]/giu)){if(token[0].startsWith('&')||!/[\p{L}\p{N}]/u.test(token[0]))continue;applied=true;return text.slice(0,token.index)+`<span class="drop-cap" style="float:left;font-size:${fontSize*3}px;font-weight:400;line-height:1;margin:3px 8px 0 0;text-indent:0;">${token[0]}</span>`+text.slice(token.index+token[0].length);}return part;});}
  function dialogueParagraphs(value){
    const original=String(value),paragraphs=[];let found=false;
    const emit=(text,dialogue,formats)=>{
      if(!text)return;
      const before=text.match(/^\s*/)[0],after=text.match(/\s*$/)[0],core=text.trim();
      let formatted=core;
      if(core)for(const marker of [...formats].reverse())formatted=marker+formatted+marker;
      const source=core?before+formatted+after:text;
      const previous=paragraphs.at(-1);
      if(!dialogue&&previous&&!previous.dialogue)previous.text+=source;
      else paragraphs.push({text:source,dialogue});
    };
    const scan=(text,formats=[],depth=0)=>{
      if(depth>32){emit(text,false,formats);return;}
      const pattern=/"[^"\n]+?"|“[^”\n]+?”|‘[^’\n]+?’|(?<![\p{L}\p{N}])'[^'\n]+?'|「[^」\n]+?」|『[^』\n]+?』|\*\*\*([^\n]+?)\*\*\*|\*\*([^\n]+?)\*\*|\*([^*\n]+?)\*/gu;
      let end=0;
      for(const match of text.matchAll(pattern)){
        emit(text.slice(end,match.index),false,formats);
        if(match[0].startsWith('*'))scan(match[1]||match[2]||match[3],[...formats,match[1]?'***':match[2]?'**':'*'],depth+1);
        else{const dialogue=/^["“『]/.test(match[0]);if(dialogue)found=true;emit(match[0],dialogue,formats);}
        end=match.index+match[0].length;
      }
      emit(text.slice(end),false,formats);
    };
    scan(original);
    return found?paragraphs.map(part=>part.text.trim()).filter(Boolean):[original];
  }
  function dialogueSourceSegments(value){
    const source=String(value),runs=[];
    const pattern=/"[^"\n]+?"|“[^”\n]+?”|‘[^’\n]+?’|(?<![\p{L}\p{N}])'[^'\n]+?'|「[^」\n]+?」|『[^』\n]+?』/gu;
    let end=0;
    for(const match of source.matchAll(pattern)){
      if(!/^["“『]/.test(match[0]))continue;
      const leading=source.slice(end,match.index).match(/\*{1,3}$/)?.[0]||'',trailing=source.slice(match.index+match[0].length).match(/^\*{1,3}/)?.[0]||'';
      const start=match.index-leading.length,stop=match.index+match[0].length+trailing.length;
      if(start>end)runs.push({text:source.slice(end,start),dialogue:false});
      runs.push({text:source.slice(start,stop),dialogue:true});end=stop;
    }
    if(end<source.length)runs.push({text:source.slice(end),dialogue:false});
    if(!runs.some(run=>run.dialogue))return [{text:source,prefix:'',suffix:'',dialogue:false}];
    const result=[];let gap='';
    for(const run of runs){
      const text=run.text.trim();
      if(!text){gap+=run.text;continue;}
      const prefix=gap+run.text.match(/^\s*/)[0],suffix=run.text.match(/\s*$/)[0];
      result.push({text,prefix,suffix:'',dialogue:run.dialogue});gap=suffix;
    }
    if(result.length)result.at(-1).suffix=gap;
    return result;
  }
  function plainBodyHTML(value,t,fontSize,highlight,font='serif',background=highlight,dividerStyle,options={}){
    const lineHeight=Number.isFinite(Number(options.lineHeight))?Math.max(1.6,Math.min(3.2,Number(options.lineHeight))):2.1;
    let firstParagraph=true;
    return blocks(value).map(block=>{
      if(block.kind==='divider')return dividerHTML(Object.hasOwn(DIVIDERS,dividerStyle)?dividerStyle:block.style,t,options.customDivider);
      const paragraphs=options.dialogueBreaks?dialogueParagraphs(block.text):[block.text];
      return paragraphs.map(text=>{
        const content=inlineHTML(text,t,highlight,background,options);
        const startsWithQuote=/^(?:["'“”‘’「」『』]|&quot;|&#39;)/u.test(content.replace(/<[^>]+>/g,'').trimStart());
        const dropCap=!!options.dropCap&&firstParagraph&&!startsWithQuote;firstParagraph=false;
        return `<div class="narrative-paragraph" style="margin:0 0 24px;font-family:${bodyFont(font)};font-size:${fontSize}px;font-weight:400;line-height:${lineHeight};color:${t.ink};text-align:left;${options.indentParagraphs&&!dropCap?'text-indent:1em;':''}${dropCap?'display:flow-root;':''}word-break:normal;overflow-wrap:anywhere;">${dropCap?dropCapHTML(content,fontSize):content}</div>`;
      }).join('');
    }).join('');
  }
  function foldBlocks(value){
    const lines=String(value).replace(/\r/g,'').split('\n'),pairs=new Map(),titles=new Map(),stack=[];
    lines.forEach((line,index)=>{const start=line.trim().match(/^\[FOLD(?:\s+([^\]]*))?\]$/);if(start){stack.push(index);titles.set(index,start[1]?.trim()||'접기');}else if(line.trim()==='[/FOLD]'&&stack.length)pairs.set(stack.pop(),index);});
    function parse(from,to,depth=0){
      if(depth>16)return [{kind:'text',text:lines.slice(from,to).join('\n')}];
      const result=[];let text=[];const flush=()=>{if(text.length){result.push({kind:'text',text:text.join('\n')});text=[];}};
      for(let index=from;index<to;index++){const end=pairs.get(index);if(end!=null&&end<to){flush();result.push({kind:'fold',title:titles.get(index),children:parse(index+1,end,depth+1)});index=end;}else text.push(lines[index]);}
      flush();return result;
    }
    return parse(0,lines.length);
  }
  function renderFoldBlocks(nodes,t,renderText,align='left'){
    return nodes.map(node=>node.kind==='text'?renderText(node.text):`<details class="inline-fold" style="display:block;border:0;margin:16px 0;padding:0;text-align:${align};"><summary style="display:list-item;list-style-type:revert;list-style-position:inside;cursor:pointer;margin:0;padding:10px 12px;font-family:Georgia,serif;font-size:14px;font-weight:400;line-height:1.7;text-align:${align};color:${t.accent};">${escapeHTML(node.title)}</summary><div style="padding:10px 12px 0;">${renderFoldBlocks(node.children,t,renderText,align)}</div></details>`).join('');
  }
  function bodyHTML(value,t,fontSize,highlight,font='serif',background=highlight,dividerStyle,options={}){
    let firstParagraph=true;
    return renderFoldBlocks(foldBlocks(value),t,text=>{const html=plainBodyHTML(text,t,fontSize,highlight,font,background,dividerStyle,{...options,dropCap:options.dropCap&&firstParagraph});if(blocks(text).some(block=>block.kind==='paragraph'))firstParagraph=false;return html;});
  }
  function commentHTML(value,t,alignment='left',font='serif',dividerStyle,customDivider){
    const align=['left','center','right'].includes(alignment)?alignment:'left';
    const paragraph=text=>text.trim()?`<div style="margin:0 0 14px;">${inlineHTML(text,t,false,false)}</div>`:'';
    const content=renderFoldBlocks(foldBlocks(value),t,text=>{
      const parts=blocks(text);if(!parts.some(block=>block.kind==='divider'))return paragraph(text);
      return parts.map(block=>block.kind==='divider'?dividerHTML(Object.hasOwn(DIVIDERS,dividerStyle)?dividerStyle:block.style,t,customDivider):paragraph(block.text)).join('');
    },align);
    return `<div style="font-family:${bodyFont(font)};font-size:14px;font-weight:400;line-height:2;margin:0;color:${t.ink};text-align:${align};white-space:normal;overflow-wrap:anywhere;">${content}</div>`;
  }

  function characterImageValue(value,min,max,fallback){const number=value==null?NaN:Number(value);return Number.isFinite(number)?Math.max(min,Math.min(max,number)):fallback;}
  function backgroundPhotoStyle(image,x=50,y=50,zoom=100,imageRatio=1,frameRatio=1){
    const size=zoom===100?'cover':imageRatio>frameRatio?'auto '+zoom+'%':zoom+'% auto';
    return 'background-image:url('+JSON.stringify(String(image))+');background-repeat:no-repeat;background-size:'+size+';background-position:'+x+'% '+y+'%;';
  }
  function imageRuleColor(t,role='ink'){
    const keys={line:'line',ink:'ink',accent:'accent',thought:'thoughtAccent'};
    return t[Object.hasOwn(keys,role)?keys[role]:'ink'];
  }
  function coverPhotoSettings(options={}){
    const square=options.layoutType==='music',diary=options.layoutType==='diary',cinema=options.layoutType==='cinema',journey=options.layoutType==='journey',news=!square&&!diary&&!cinema,imageRatio=characterImageValue(options.imageRatio,.05,20,1.5),scale=diary?characterImageValue(options.diaryPhotoScale??options.diaryPhotoWidth,30,100,80)/100:1,poster=cinema?cinemaPosterSize(options):null,ratio=square?1:cinema?poster.width/poster.height:imageRatio/scale;
    const heightCap=diary||cinema?450:400;
    return {square,padding:Math.round(10000/ratio)/100,maxHeight:!square?Math.round((journey?characterImageValue(options.journeyImageHeight,100,400,270):options.imageLimited?characterImageValue(options.imageHeight,100,heightCap,400):heightCap)*scale)+'px':'none',background:backgroundPhotoStyle(options.image,characterImageValue(news?options.newsImageX:options.musicCoverX,0,100,50),characterImageValue(options.imagePosition,0,100,50),characterImageValue(news?options.newsImageZoom:options.musicCoverZoom,100,300,100),imageRatio,ratio)};
  }
  function coverPhotoHTML(image,options={}){
    const s=coverPhotoSettings({...options,image});
    return '<div class="cover-photo" role="img" aria-label="로그 표지 그림" style="display:block;width:100%;height:auto;max-height:'+s.maxHeight+';overflow:hidden;'+(s.square?'border-radius:'+(options.musicCoverRounded===false?'0':'12px')+';':'')+'margin:0;padding:0;border:0;'+escapeHTML(s.background)+'"><div aria-hidden="true" style="display:block;width:100%;padding-top:'+s.padding+'%;margin:0;border:0;line-height:0;"></div></div>';
  }
  function characterHTML(character,t,font='serif',options={}){
    const image=safeImageURL(character.image),name=String(character.name||''),description=String(character.description||'');if(!image&&!name.trim()&&!description.trim()&&character.risuPortraitSource!=='none')return '';
    const x=characterImageValue(character.imageX,0,100,50),y=characterImageValue(character.imageY,0,100,50),zoom=characterImageValue(character.imageZoom,100,300,100);
    const vertical=character.imageShape==='portrait',frameRatio=vertical?2/3:1,ratio=characterImageValue(character.imageRatio,.05,20,1);
    const role={char:'CHAR',user:'USER'}[character.role]||'';
    const nativeImage=character.imageMode==='img'&&image;
    const portraitContent=nativeImage?`<img src="${escapeHTML(image)}" alt="${escapeHTML(name||role||'캐릭터')}" style="display:block;width:100%;max-width:100%;height:auto;margin:0;padding:0;border:0;">`:'';
    const portraitStyle=nativeImage?'padding:0;':`padding-top:${vertical?150:100}%;${image?escapeHTML(backgroundPhotoStyle(image,x,y,zoom,ratio,frameRatio)):'background-color:'+t.line+';'}`;
    const portrait=`<div class="character-photo-slot" style="display:block;flex:0 0 48%;width:48%;min-width:0;max-width:200px;margin:0;padding:0;border:0;align-self:flex-start;"><div class="character-portrait" ${image&&!nativeImage?`role="img" aria-label="${escapeHTML(name||role||'캐릭터')}"`:!image?'aria-hidden="true"':''} data-shape="${vertical?'portrait':'square'}" style="display:block;width:100%;height:auto;box-sizing:content-box;margin:0;border:0;${portraitStyle}">${portraitContent}</div></div>`;
    const copy=`${role?`<p class="character-role" style="font-family:Arial,sans-serif;font-size:9px;font-weight:bold;letter-spacing:1.5px;color:${t.ink};line-height:1.6;margin:0 0 3px;">${role}</p>`:''}${name.trim()?`<h3 class="character-name" style="font-family:${options.nameFamily||'Georgia,serif'};font-size:22px;font-weight:600;font-style:normal;line-height:1.5;color:${t.accent};margin:0 0 3px;">${escapeHTML(name)}</h3>`:''}${description.trim()?`<p class="character-description" style="font-family:${bodyFont(font)};font-size:12px;font-weight:400;line-height:1.9;color:${t.ink};margin:0;">${escapeHTML(description).replace(/\n/g,'<br>')}</p>`:''}`;
    const content=`<div class="character-layout" style="display:flex;align-items:flex-start;${options.music?'':'gap:14px;'}width:100%;min-width:0;margin:0;border:0;background-color:transparent;">${portrait}<div class="character-copy" style="flex:1 1 0;min-width:0;padding:${options.music?'0 0 0 14px':'0'};border:0;">${copy}</div></div>`;
    return `<div class="character-profile" style="display:block;flex:1 1 300px;min-width:0;max-width:100%;padding:${options.music?'8px 12px':'8px 0'};margin:0;color:${t.ink};overflow-wrap:anywhere;">${content}</div>`;
  }
  function charactersHTML(characters,t,font='serif',preview=false,options={}){
    const cards=characters.map((character,index)=>{let html=characterHTML(character,t,font,options);if(preview&&html)html=html.replace('class="character-profile"','class="character-profile" data-character-index="'+index+'"');return html;}).filter(Boolean);if(!cards.length)return '';
    return `<div class="character-grid" style="display:flex;flex-wrap:wrap;align-items:flex-start;${options.music?'':'gap:0 32px;'}width:100%;min-width:0;margin:${options.gridMargin||'10px 0'};background-color:transparent;">${cards.join('')}</div>`;
  }
  const api={journeyStyles,journeyHeaderStyles,journeyOrnamentHTML,journeySectionLabelHTML,journeyPageHTML,cinemaPosterSize,cinemaStyles,cinemaHeaderStyles,cinemaPageHTML,dialogueBoxColor,dialogueBoxBackground,footerCredit,footerCreditHTML,paperFooterHTML,diaryPhotoFrameColor,coverPhotoSettings,diaryLabelHTML,diaryStyles,diaryHeaderStyles,diaryPageHTML,THEMES,PALETTES,paletteCategory,paletteEntries,DIVIDERS,DIVIDER_MARKER,BODY_FONTS,PRETENDARD_STYLESHEET,bodyFont,characterFontSettings,escapeHTML,layoutCopy,musicPanelBackgroundColor,musicPanelTheme,characterContentSpacing,newsContentSpacing,musicContentSpacing,musicStyles,musicControlsHTML,musicPageHTML,mastheadSettings,paperHeaderStyles,paperHeaderHTML,safeURL,safeImageURL,youtube,theme,arcaDarkModeHTML,colorHex,isDarkColor,contrastRatio,replaceLiteral,removeLiteralRanges,normalizeCleanupRules,applyCleanupRules,blocks,quotes,formatSelectedText,dividerHTML,inlineHTML,dialogueSourceSegments,foldBlocks,bodyHTML,commentHTML,characterImageValue,backgroundPhotoStyle,imageRuleColor,coverPhotoHTML,characterHTML,charactersHTML};root.FogLogic=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof globalThis!=='undefined'?globalThis:this);
