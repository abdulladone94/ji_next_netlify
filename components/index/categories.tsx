import Link from 'next/link';
import React from 'react';
import CategoryCard from './categoryCard';

function Categories() {
  return (
    <section>
      <div className="mx-auto mb-48 max-w-7xl px-6 md:px-8">
        {/* top row */}
        <div className="mb-14 flex justify-between lg:mb-20">
          {/* titles */}
          <div>
            <p className="mb-3 font-jost text-2xl md:text-5xl lg:text-6xl">
              Explore by categories
            </p>
            <p className="font-poppins text-lg lg:text-xl">
              Lorem Ipsum dolor sit amet, consectetur adipiscing elit, <br />
              sed do eiusmod
            </p>
          </div>
          {/* button */}
          <div className="hidden items-end lg:flex">
            <Link href="">
              <button className="cursor-pointer rounded-xl border-2 border-gray-100/80 bg-white/20 bg-opacity-80 bg-clip-padding px-16 py-3 font-jost font-semibold backdrop-blur-sm backdrop-filter transition-all duration-300 ease-in-out hover:border-white">
                See More
              </button>
            </Link>
          </div>
        </div>

        {/* bottom row */}
        <div className="flex justify-center">
          <div className="-ml-4 flex gap-[48px] overflow-scroll p-4 scrollbar-hide">
            <CategoryCard image="/4.jpg" />
            <CategoryCard image="/4.jpg" />
            <CategoryCard image="/4.jpg" />
            <CategoryCard image="/4.jpg" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
