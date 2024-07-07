import { FC, useEffect, useState } from 'react';
interface BannerProps {
  title: string;
  description: string;
  price: string;
  expired: string;
}

const Banner: FC<BannerProps> = ({ title, description, price, expired }) => {
  const [showBanner, setShowBanner] = useState(true);

  const bannerHandler = () => {
    const newShowBannerState = !showBanner;
    setShowBanner(newShowBannerState);
    localStorage.setItem('showBanner', JSON.stringify(newShowBannerState));
  }

  useEffect(() => {
    const savedShowBanner = localStorage.getItem('showBanner');
    if (savedShowBanner !== null) {
      setShowBanner(JSON.parse(savedShowBanner));
    }
  }, []);

  return (
    <div className={`${!showBanner ? 'hidden' : 'block'} w-full bg-bannerBg relative`}>
      <div className='w-full max-w-5xl m-auto py-4 flex flex-col gap-2'>
        <div className='flex text-base gap-2 justify-center'>
            <strong>{title}</strong>
            <span>|</span>
            <p>{description}</p>
            <span>Courses from: €{price}</span>
        </div>
        <div className='flex text-lg justify-center gap-1'>
            <strong>Ends:</strong>
            <strong className='text-accent'>{expired}</strong>
        </div>
      </div>
      <button 
        type='button' 
        className='absolute top-4 right-6 hover:scale-105'
        onClick={bannerHandler}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}

export default Banner;