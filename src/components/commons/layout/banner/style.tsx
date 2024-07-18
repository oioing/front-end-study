import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 400px;
  position: relative;

  .slick-prev,
  .slick-next {
    z-index: 1;
  }
  .slick-prev {
    left: calc(50% - 600px);
  }
  .slick-next {
    right: calc(50% - 600px);
  }
  .slick-dots {
    z-index: 1;
    bottom: 32px;
  }
  .slick-dots li button:before {
    color: white;
  }
`;

export const Banner = styled.div``;
export const SlideImage = styled.img``;
