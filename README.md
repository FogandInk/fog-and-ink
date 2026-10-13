# FOG & INK · 안개와 잉크

대화와 이야기를 지면으로 편집하는 브라우저 도구입니다. 타입 A·B·C, 팔레트, 본문·코멘트 편집, 정리 규칙, HTML·서식 복사를 제공합니다.

## GitHub Pages 배포

이 저장소를 GitHub에 올리고 **Settings → Pages → Build and deployment → Source → Deploy from a branch**를 선택하세요. Branch는 main, 폴더는 / (root)를 선택하고 Save를 누르세요. main 브랜치를 업데이트하면 자동으로 배포됩니다. 홈페이지는 https://fogandink.github.io/fog-and-ink/ 입니다.

## 수정

- index.html: 편집 화면
- style.css: 편집기 디자인
- logic.js: 지면 서식과 팔레트
- app.js: 편집 동작, 미리보기, 저장
- export-images.js, clipboard.js: 사진·복사 처리

HTML·CSS·JavaScript만 사용하므로 별도 빌드가 필요하지 않습니다. 기능을 수정한 뒤 main 브랜치에 반영하면 GitHub Pages가 갱신됩니다.

## 초안과 이미지

초안·즐겨찾기·정리 규칙은 사용자 브라우저에 저장됩니다. 사용자가 입력한 내용은 GitHub 저장소로 보내지지 않습니다. 기존 주소에서 작업한 초안은 **초안 저장**으로 내려받아 새 주소의 **초안 불러오기**에서 복원하세요. 사용자가 제공한 초안과 사진 세 장이 기본 예시로 포함됩니다. 저장된 개인 초안이 있으면 그대로 유지되며, 기본값으로 되돌리기를 누르면 새 기본 예시로 돌아갑니다.

## 원본

이전 홈페이지: https://fog-and-ink-gazette.chatbung.chatgpt.site/

배포 설정 안내: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
