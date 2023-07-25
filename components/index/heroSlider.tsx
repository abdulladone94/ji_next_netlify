import Image from 'next/legacy/image';

import { Navigation, Pagination, EffectFade, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface ISliderProps {
  images: string[];
}

export default function HeroSlider({ images }: ISliderProps) {
  return (
    <Swiper
      className="relative h-[600px] w-full sm:h-[400px] lg:h-[500px] xl:h-[600px]"
      modules={[Pagination, Navigation, EffectFade]}
      pagination={{
        // type: 'fraction',
        clickable: true,
      }}
      // navigation={true}
      effect="fade"
      speed={800}
      slidesPerView={1}
      loop={true}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {images.map((img, id) => (
        <SwiperSlide key={id} className="relative">
          {id === 0 ? (
            <div className="flex justify-center">
              <div className="absolute top-1/4 z-[50] px-8 text-center font-jost text-white sm:top-1/3 sm:text-left md:top-1/3 md:left-2/4">
                <h1 className="mb-[24px] text-[40px] uppercase leading-none lg:text-7xl">
                  Beyond <br /> Borders
                </h1>
                <p className="min-w-[270px] max-w-[240px] font-poppins text-[18px] sm:max-w-none lg:text-xl lg:leading-7">
                  Meet the new standard for modern luxury jewelry.
                  <br />
                </p>
              </div>
            </div>
          ) : id === 1 ? (
            <div className="flex justify-center">
              <div className="absolute top-1/4 z-[50] px-8 text-center text-white sm:top-1/3 sm:text-left md:top-1/3 md:left-2/4">
                <h1 className="mb-[24px] text-[40px] uppercase leading-none lg:text-7xl">
                  Beyond <br /> Borders
                </h1>
                <p className="min-w-[270px] max-w-[240px] text-[18px] sm:max-w-none lg:text-xl lg:leading-7">
                  Meet the new standard for modern luxury jewelry.
                  <br />
                </p>
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="absolute top-1/4 z-[50] px-8 text-center text-white sm:top-1/3 sm:text-left md:top-1/3 md:left-2/4">
                <h1 className="mb-[24px] text-[40px] uppercase leading-none lg:text-7xl">
                  Beyond <br /> Borders
                </h1>
                <p className="min-w-[270px] max-w-[240px] text-[18px] sm:max-w-none lg:text-xl lg:leading-7">
                  Meet the new standard for modern luxury jewelry.
                  <br />
                </p>
              </div>
            </div>
          )}
          <Image src={img} alt="ex" layout="fill" objectFit="cover" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
