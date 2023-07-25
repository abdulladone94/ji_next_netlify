import Image from 'next/legacy/image';
import Link from 'next/link';

interface ICardProps {
  image: string;
}

function CategoryCard({ image }: ICardProps) {
  return (
    <div>
      <div className="relative mb-6 h-[392px] w-[238px] transform rounded-[20px] border-2 border-gray-100/80 transition-all duration-300 ease-in-out hover:scale-105 hover:border-white md:h-[392px] md:w-[284px] lg:h-[427px] lg:max-w-[265px]">
        <Link href="">
          <Image
            src={image}
            alt="flag"
            layout="fill"
            objectFit="cover"
            className="rounded-[20px]"
          />
        </Link>
      </div>
      <p className="max-w-[265px] font-poppins text-lg lg:text-xl">
        Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      </p>
    </div>
  );
}

export default CategoryCard;
