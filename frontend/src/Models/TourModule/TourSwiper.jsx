import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";

export const TourSwiper = ({ image }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className='lg:max-w-[60%] max-w-full'>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="max-h-[400px] mb-3 rounded-xl"
            >
                {image.map((el, i) => (
                    <SwiperSlide key={i}>
                        <img src={el.image} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {image.length <= 1
                    ? ""
                    : image.map((el, i) => (
                          <SwiperSlide key={i}>
                              <img
                                  className="rounded-xl cursor-pointer"
                                  src={el.image}
                                  key={i}
                              />
                          </SwiperSlide>
                      ))}
            </Swiper>
        </div>
    );
};
