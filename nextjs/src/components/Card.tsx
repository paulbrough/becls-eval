import React from "react";
import Image from "next/image";
import Link from "next/link";
import Loading from "./Loading";

interface CardProps {
  title: string;
  ctaUrl: string;
  description: string;
  imageAlt?: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({
  title,
  ctaUrl,
  description,
  imageUrl,
}) => {
  return (
    <Link href={ctaUrl} className="group">
      <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg">
        <Image
          className="z-10 relative w-full h-full object-cover transform-gpu saturate-0 transition duration-500 ease-out group-hover:scale-[1.02] group-hover:saturate-100"
          src={imageUrl}
          loading="lazy"
          fill={true}
        />
        <div
          role="status"
          className="z-0 absolute aspect-[3/2] w-full inset-0 animate-pulse space-y-8 md:flex md:items-center md:space-x-8 md:space-y-0"
        >
          <div className="flex aspect-[3/2] w-full items-center justify-center rounded bg-brand-gray-100">
            <Loading />
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      <p className="pt-1.5 text-14 text-brand-primary">{title}</p>
      <p className="relative pt-1 group-hover:text-brand-primary">
        <span className="inline bg-gradient-to-r from-current to-current bg-[size:0%_1px] bg-[position:0_100%] bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[size:100%_1px]">
          {description}
        </span>
      </p>
    </Link>
  );
};

export default Card;
