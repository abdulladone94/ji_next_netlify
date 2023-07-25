import Image from 'next/legacy/image';
import Link from 'next/link';

interface ICardProps {
  image: string;
}

function ProductCard({ image }: ICardProps) {
  return (
    <div className="relative mb-6 min-h-[139px] max-w-[327px] transform rounded-[20px] border-2 border-gray-100/80 transition-all duration-300 ease-in-out hover:scale-105 hover:border-white md:min-h-[150px] md:min-w-[350px] lg:min-h-[250px] lg:min-w-[552px] ">
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
  );
}

export default ProductCard;
