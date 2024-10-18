import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import ElectronicsBanner from "@/assets/electronics-banner.avif";
import JewelryBanner from "@/assets/jewelry-banner.avif";
import MensClothingBanner from "@/assets/mens-clothing-banner.avif";
import WomensClothingBanner from "@/assets/womens-clothing-banner.avif";

const BANNERS = [
  { title: "Electronics", src: ElectronicsBanner },
  { title: "Jewelry", src: JewelryBanner },
  { title: "Men's Clothing", src: MensClothingBanner },
  { title: "Women's Clothing", src: WomensClothingBanner },
];

// eslint-disable-next-line
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        transform: "translate(-200%, -50%)",
      }}
      onClick={onClick}
    />
  );
}

// eslint-disable-next-line
function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        transform: "translate(200%, -50%)",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
}

export const Banner = () => {
  const settings: Settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {BANNERS.map((item) => (
          <div
            key={item.title}
            className="w-full max-w-[100dvw] h-[20dvh] sm:h-[40dvh] md:h-[60dvh] lg:h-[80dvh] rounded-lg overflow-hidden"
          >
            <img
              src={item.src}
              alt={item.title}
              className="object-cover w-full h-full object-center rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
