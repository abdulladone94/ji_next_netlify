import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react';
import ProductCard from './productCard';

function Products() {
  return (
    <section>
      <div className="mx-auto mb-48 max-w-7xl px-6 md:px-8">
        <div className="flex flex-col justify-between md:flex-row">
          {/* left */}
          <div className="flex flex-col md:w-1/2 md:pr-20">
            {/* titles */}
            <div>
              <p className="mb-11 font-jost text-2xl md:text-5xl lg:text-6xl">
                Checkout <br /> Jewel Iconic products
              </p>
              <p className="mb-6 hidden font-poppins text-lg md:block lg:text-xl">
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod Lorem Ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod Lorem Ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod Lorem Ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod
              </p>
              <p className="mb-11 hidden font-poppins md:text-lg lg:block lg:text-xl">
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod Lorem Ipsum dolor sit amet, consectetur adipiscing elit,
              </p>
            </div>
            {/* button */}
            <div className="">
              <Link href="">
                <button className="hidden cursor-pointer rounded-xl border-2 border-gray-100/80 bg-white/20 bg-opacity-80 bg-clip-padding px-16 py-3 font-jost font-semibold backdrop-blur-sm backdrop-filter transition-all duration-300 ease-in-out hover:border-white lg:block">
                  See More
                </button>
              </Link>
            </div>
          </div>

          {/* right */}
          <div className="-mt-4 flex max-h-[820px] flex-col justify-between overflow-auto p-4 scrollbar-hide">
            <ProductCard image="/3.jpg" />
            <ProductCard image="/6.jpg" />
            <ProductCard image="/7.jpg" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
