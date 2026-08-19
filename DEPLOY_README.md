# 바이브 코딩 랜딩페이지 — 웹 배포용 패키지

`web-landing-page-optimizer` 기준으로 Claude 아티팩트(bundler 형식) HTML을 실제 웹 배포용 정적 사이트로 변환한 결과물입니다.

## 무엇이 바뀌었나

- **원본**: 단일 HTML 파일 28MB (이미지·폰트·JS가 모두 base64로 파일 안에 인코딩됨)
- **변환 후**: 총 1.3MB (index.html + assets/)
  - 이미지 9장을 WebP로 변환 + 실제 표시 크기에 맞게 리사이즈 → 약 20MB → 524KB (96% 감소)
  - 폰트(woff2) 18개, JS 런타임 4개를 `assets/` 하위로 분리
  - `<title>`, `meta description`, Open Graph/Twitter 카드, favicon, canonical URL 추가
  - Playwright 헤드리스 브라우저로 실제 렌더링 검증 완료 (콘솔 에러 0건, 전 섹션 정상 표시, 상단 마감 카운트다운 정상 동작)

## 폴더 구조

```
index.html
favicon-16.png / favicon-32.png / apple-touch-icon.png
assets/
  img/   (9개 사진 .webp + og-image.jpg)
  fonts/ (18개 .woff2)
  js/    (react.production.min.js, react-dom.production.min.js, dc-runtime.js, design-system-runtime.js)
```

## 배포 전 반드시 확인/수정할 것

1. **canonical / OG URL이 임시값**입니다. `index.html` 상단 `<head>`에서
   `https://vibecoding.jinusoft.co.kr/` 로 넣어둔 4곳(canonical, og:image, og:url, twitter:image)을
   실제 배포 도메인으로 바꿔주세요.
2. **favicon이 임시 플레이스홀더**입니다 (브랜드 코랄 컬러 배경에 "V" 모노그램). 실제 로고가 정해지면 교체 권장.
3. React/ReactDOM은 로컬 파일(assets/js)로 이미 포함해뒀지만, 원본은 CDN(unpkg) 참조였습니다.
   트래픽이 많다면 CDN 버전 사용을 고려할 수 있습니다(캐시 이점).

## 배포 방법 (택 1)

- **GitHub Pages**: 이 폴더 전체를 리포지토리에 커밋 → Settings → Pages → 브랜치 지정
- **Vercel/Netlify**: 이 폴더를 그대로 드래그 앤 드롭 배포 (별도 빌드 과정 불필요, 정적 파일만 있음)
