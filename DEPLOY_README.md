# 바이브 코딩 랜딩페이지 — 웹 배포용 패키지

`web-landing-page-optimizer` 기준으로 Claude 아티팩트(bundler 형식) HTML을 실제 웹 배포용 정적 사이트로 변환한 결과물입니다.

## 무엇이 바뀌었나

- **원본**: 단일 HTML 파일 28MB (이미지·폰트·JS가 모두 base64로 파일 안에 인코딩됨)
- **변환 후**: 총 1.3MB (index.html + assets/)
  - 이미지 9장을 WebP로 변환 + 실제 표시 크기에 맞게 리사이즈 → 약 20MB → 524KB (96% 감소)
  - 폰트(woff2) 18개, JS 런타임 4개를 `assets/` 하위로 분리
  - `<title>`, `meta description`, Open Graph/Twitter 카드, favicon, canonical URL 추가
  - **반응형 대응 추가**: 원본은 인라인 px 고정값만 있어 모바일에서 최적화가 안 되어 있었음.
    `<style id="responsive-overrides">` 블록을 head에 추가해 태블릿(~900px)·모바일(~640px) 대응:
    - 히어로 제목(h1)·섹션 제목(h2) 폰트 축소, 섹션 좌우 여백(48px→20px) 축소
    - 3~4열 그리드(파트 카드, 사진 갤러리)를 태블릿 2열 → 모바일 1~2열로 스택
    - Before/After 비교표(1fr auto 1fr)를 모바일에서 1열로 스택
    - 강사 소개 사진+텍스트 좌우 배치를 모바일에서 세로 배치로 전환
    - 상단 고정 배너가 2줄로 늘어나도 네비게이션과 겹치지 않도록 처리
    - 히어로 배경 장식 글자(`</>`, `{ }` 등)는 좁은 화면에서 숨김
    - PART 1/2/3 비율 바(3:7:2 flex 비율 고정 바)는 좁은 화면에서 세로로 쌓이도록 전환
      (원래 비율대로 폭을 나누면 한글 텍스트가 눌려 잘리는 문제가 있었음)
  - Playwright 헤드리스 브라우저로 데스크탑(1440px)·태블릿(768px)·모바일(375px) 3개 뷰포트 전부
    렌더링 검증 완료 (콘솔 에러 0건, 가로 스크롤 발생 0건, 전 섹션 정상 표시)

> **기술 참고**: 이 페이지는 dc-runtime(React 기반)이 부팅 시 전체 본문의 inline style을
> "prop: value;" 형태(콜론/콤마 뒤 공백 포함)로 재직렬화합니다. 반응형 CSS의 `[style*="..."]`
> 선택자는 전부 이 정규화된 형식 기준으로 작성되어 있으니, 콘텐츠를 수정할 때 CSS 선택자와
> 실제 인라인 style 표기가 어긋나지 않는지 라이브 DOM에서 재확인하는 게 안전합니다.

## 폴더 구조

```
index.html
favicon-16.png / favicon-32.png / apple-touch-icon.png
assets/
  img/   (9개 사진 .webp + og-image.jpg)
  fonts/ (18개 .woff2)
  js/    (react.production.min.js, react-dom.production.min.js, dc-runtime.js, design-system-runtime.js)
```

## 버그 수정 내역

- **"커리큘럼 자세히 보기" 버튼이 동작 안 하던 문제**: 원본에는 이 버튼에 링크/클릭 동작이
  전혀 연결돼 있지 않았습니다("무료 상담 신청" 버튼만 카카오채널 링크로 감싸져 있었음).
  `3파트 커리큘럼` 섹션에 `id="curriculum"`을 추가하고, 버튼을 `<a href="#curriculum">`으로
  감싸 클릭 시 해당 섹션으로 스크롤 이동하도록 수정했습니다. `scroll-behavior: smooth`도
  추가해 부드럽게 이동합니다. Playwright로 실제 클릭 테스트 완료(스크롤 정상 이동, 콘솔 에러 0건).
- **"코딩 전혀 몰라도 괜찮습니다" 섹션 텍스트가 위로 쏠려 보이던 문제**: 이 섹션이
  `padding: 0 48px 96px`(상단 여백 0)였던 탓에 텍스트가 바로 위 섹션에 붙어 시작하고
  아래쪽에만 큰 여백이 남아 위로 쏠려 보였습니다. 상단 여백을 72px로 추가해 위아래 균형을
  맞췄고, 모바일(~640px)에서도 대응하는 여백(40px/56px)을 추가했습니다.

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
