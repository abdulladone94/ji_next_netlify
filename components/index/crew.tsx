import Image from 'next/legacy/image';
import Link from 'next/link';

function Crew() {
  return (
    <section>
      <div className="mx-auto mb-16 max-w-7xl px-6 md:mb-48 md:px-8">
        <div className="mb-8 flex justify-between md:mb-16">
          {/* titles */}
          <div>
            <p className="font-jost text-2xl md:text-6xl">
              Its us who make <br /> things running
            </p>
          </div>
          {/* button */}
          <div className="hidden items-end lg:flex">
            <Link href="">
              <button className="font cursor-pointer rounded-xl border-2 border-gray-100/80 bg-white/20 bg-opacity-80 bg-clip-padding px-16 py-3 font-jost font-semibold backdrop-blur-sm backdrop-filter transition-all duration-300 ease-in-out hover:border-white">
                See More
              </button>
            </Link>
          </div>
        </div>

        <div className="relative h-[163px] w-full rounded-[20px] border-2  border-gray-100/80 transition-all duration-300 ease-in-out hover:border-white md:h-[400px] lg:h-[518px]">
          <Link href="">
            <Image
              src="/crew.png"
              alt="Jewel Iconic crew"
              layout="fill"
              objectFit="cover"
              className="rounded-[20px]"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Crew;
