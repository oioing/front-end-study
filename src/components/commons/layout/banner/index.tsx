import { Banner, SlideImage, Wrapper } from "./style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBanner(): JSX.Element {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <Banner>
          <SlideImage src="/image.png" />
        </Banner>

        <Banner>
          <SlideImage src="/image 02.png" />
        </Banner>
        <Banner>
          <SlideImage src="/image 03.png" />
        </Banner>
      </Slider>
    </Wrapper>
  );
}
