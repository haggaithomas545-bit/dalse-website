import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFlip } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import "./Hero.css";
import hero1 from "../assets/img/header-1.jpg";
import hero2 from "../assets/img/header-5.jpg";
import hero3 from "../assets/img/header-6.jpg";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  const slides = [
    {
      image: hero1,
      title: "Expert Analysis",
      description: "Akannni, the greatest of all tim",
    },
    {
      image: hero2,
      title: "Growth Partner",
      description: "Akannni, the greatest of all tim",
    },
    {
      image: hero3,
      title: "Trusted Advisor",
      description: "Akannni, the greatest of all tim",
    },
  ];

  return (
    <>
      <section className="hero-container">
        <Swiper
          modules={[Navigation, Autoplay, EffectFlip]}
          effect="flip"
          navigation
          autoplay={{ delay: 2000 }}
          loop={true}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="hero-slide"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="hero-overlay">
                  <div className="hero-content">
                    <h1>{slide.title}</h1>
                    <p>{slide.description}</p>
                    <div className="hero-button">
                      <button className="btn-1">
                        Read more
                        <ChevronRight size={18} />
                      </button>
                      <button className="btn-2">
                        Contact us <ChevronRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* <SwiperSlide>
            <div
              className="hero-slide"
              style={{ backgroundImage: `url(${hero2})` }}
            >
              <div className="hero-overlay">
                <div className="hero-content">
                  <h1>Growth Partner</h1>
                  <p>Akannni, the greatest of all time (GOAT)</p>
                  <div className="hero-button">
                    <button className="btn-1">
                      Read more
                      <ChevronRight size={18} />
                    </button>
                    <button className="btn-2">
                      Contact us <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero-slide"
              style={{ backgroundImage: `url(${hero3})` }}
            >
              <div className="hero-overlay">
                <div className="hero-content">
                  <h1>Trusted Advisor</h1>
                  <p>Akannni, the greatest of all time (GOAT)</p>
                  <div className="hero-button">
                    <button className="btn-1">
                      Read more
                      <ChevronRight size={18} />
                    </button>
                    <button className="btn-2">
                      Contact us <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </section>
    </>
  );
};

export default Hero;
