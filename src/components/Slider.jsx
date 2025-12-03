import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Slider = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper"
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="w-full flex justify-center bg-white">
          <img
            src="https://i.ibb.co.com/9m5P4Ls0/images-10.jpg"
            alt="Toy Car"
            className="w-full h-auto max-h-[500px] object-contain rounded-lg"
          />
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div className="w-full flex justify-center bg-white">
          <img
            src="https://i.ibb.co.com/SDz3wRs9/FBR37-C-23-comp-F23-crop.jpg"
            alt="Doll House"
            className="w-full h-auto max-h-[500px] object-contain rounded-lg"
          />
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <div className="w-full flex justify-center bg-white">
          <img
            src="https://i.ibb.co.com/whq1sg19/new-drum-set.webp"
            alt="Action Figure"
            className="w-full h-auto max-h-[500px] object-contain rounded-lg"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;

