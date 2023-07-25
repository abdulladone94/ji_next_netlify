import Image from 'next/legacy/image';

import { Navigation, Pagination, EffectFade, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Statistics() {
  return (
    <div className="mx-auto mt-4 mb-12 flex max-w-7xl px-6 pr-0 md:px-8 md:pr-0">
      <div className="mr-9 hidden items-center lg:flex">
        <div className="">
          <div className="mb-14 flex gap-14 ">
            <div>
              <p className="font-jost text-6xl">30+</p>
              <p className="font-poppins text-2xl">Established regions</p>
            </div>
            <div>
              <p className="font-jost text-6xl">30+</p>
              <p className="font-poppins text-2xl">Satisfied clients</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="relative h-[64px] w-[78px]">
              <Image
                src="/Glass1.png"
                alt="flag"
                layout="fill"
                objectFit="contain"
                className="bg-transparent"
              />
            </div>
            <div className="relative h-[64px] w-[78px]">
              <Image
                src="/Glass2.png"
                alt="flag"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="relative h-[64px] w-[78px]">
              <Image
                src="/Glass3.png"
                alt="flag"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* card */}
      <div
        className="h-[205px] w-[401px] rounded-tl-[20px] rounded-bl-[20px] border-2  border-r-0 border-gray-100/80 bg-white/20  bg-opacity-80 bg-clip-padding px-4 pt-4 font-jost backdrop-blur-sm backdrop-filter md:h-[284px] md:w-[794px]
 md:p-[50px]"
      >
        <div className="h-full text-lg md:-mt-2 md:text-2xl">
          <p className="mb-6">
            Completed 60+ Successful projects all over <br />
            the world since 2020
          </p>
          <p className="mb-6">Trusted by</p>
          <div className="relative h-7 md:h-10">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              slidesPerGroup={3}
              loop={true}
              loopFillGroupWithBlank={true}
            >
              <SwiperSlide className="relative">
                <Image
                  src="/logo_informatics.png"
                  alt="ex"
                  layout="fill"
                  objectFit="contain"
                  className=" !bg-white/20 !bg-opacity-80 !bg-clip-padding !backdrop-blur-sm !backdrop-filter"
                />
              </SwiperSlide>
              <SwiperSlide className="relative">
                <Image
                  src="/logo_informatics.png"
                  alt="ex"
                  layout="fill"
                  objectFit="contain"
                  className=" !bg-white/20 !bg-opacity-80 !bg-clip-padding !backdrop-blur-sm !backdrop-filter"
                />
              </SwiperSlide>
              <SwiperSlide className="relative">
                <Image
                  src="/logo_informatics.png"
                  alt="ex"
                  layout="fill"
                  objectFit="contain"
                  className=" !bg-white/20 !bg-opacity-80 !bg-clip-padding !backdrop-blur-sm !backdrop-filter"
                />
              </SwiperSlide>
              <SwiperSlide className="relative">
                <Image
                  src="/logo_informatics.png"
                  alt="ex"
                  layout="fill"
                  objectFit="contain"
                  className=" !bg-white/20 !bg-opacity-80 !bg-clip-padding !backdrop-blur-sm !backdrop-filter"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
