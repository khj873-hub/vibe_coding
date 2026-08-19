# 바이브 코딩 랜딩페이지

## 폴더 구조
```
index.html              메인 페이지
favicon.svg              파비콘
assets/
  img/                    이미지 (WebP, 압축본)
  fonts/                  웹폰트 (woff2)
  js/
    dc-runtime.js         페이지 렌더링 런타임 (JSX 변환 + 컴포넌트 하이드레이션)
    design-system.js      UI 컴포넌트 라이브러리 (Button, Card 등)
```

## 배포 방법
GitHub Pages, Netlify, Vercel, 카페24 등 정적 호스팅에 이 폴더를 그대로 올리면 됩니다.
별도 빌드 과정 없이 index.html이 진입점입니다.

## 참고
- React / ReactDOM / Babel은 로컬에 포함하지 않고 실행 시 CDN(unpkg.com)에서 자동으로 불러옵니다.
  따라서 실제 서비스 도메인은 인터넷이 연결된 환경(GitHub Pages 등)이어야 정상 동작합니다.
- <meta property="og:image">는 상대경로(assets/img/gallery-1.webp)로 되어 있습니다.
  카카오톡/페이스북 공유 미리보기가 뜨려면 실제 배포 도메인을 붙인 절대경로로 바꿔주세요.
  예: https://yourdomain.com/assets/img/gallery-1.webp
