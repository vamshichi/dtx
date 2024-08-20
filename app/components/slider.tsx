// components/HeroSlider.tsx

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderImages = [
  "/images/hero.jfif",
  "/images/hero.jfif",
];

export default function HeroSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section className="hero-slider">
      <Slider {...settings}>
        {sliderImages.map((src, index) => (
          <div key={index} className="relative h-96">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-white text-4xl font-bold">Slide {index + 1}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
