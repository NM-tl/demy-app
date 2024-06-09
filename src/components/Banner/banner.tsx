import React from 'react';

interface BannerProps {
    title: string;
    description: string;
    price: string;
    expired: string;
}

const Banner: React.FC<BannerProps> = ({ title, description, price, expired }) => {
  return (
    <div className='w-full bg-bannerBg'>
        <div className='w-full max-w-5xl m-auto py-4 flex flex-col gap-2'>
            <div className='flex text-base gap-2 justify-center'>
                <strong className=''>{title}</strong>
                |
                <p>{description}</p>
                <span>Courses from: €{price}</span>
            </div>
            <div className='flex text-lg justify-center gap-1'>
                <strong>Ends:</strong>
                <strong className='text-accent'>{expired}</strong>
            </div>
        </div>
    </div>
  );
}

export default Banner;
