import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-family: "myfont";
  }
  @font-face {
    font-family: "myfont";
    src: url("/fonts/NotoSansKR-VariableFont_wght.ttf");
    /* 되도록이면 압축률이 높은 woff확장자 폰트를 쓰는게 좋다 */
    /* 경량화 폰트 : 안쓰는 얅 같은 글씨에 대한 폰트가 없는 폰트  */
    /* Fallback font : 다운로드 받기 실패하면, 2번째, 3번째껄 쓴다. font-family: font1, font2, font3 */
  }
`;
