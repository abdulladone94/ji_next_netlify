import Image from 'next/legacy/image';
import Link from 'next/link';

interface ICardProps {
  image: string;
}

function NewsCard({ image }: ICardProps) {
  return (
    <div>
      <div className="relative mb-6 h-[265px] min-w-[265px] transform rounded-[20px] border-2 border-gray-100/80 transition-all duration-300  ease-in-out hover:scale-105 hover:border-white">
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

export default NewsCard;
