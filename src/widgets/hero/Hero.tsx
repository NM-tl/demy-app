import React from 'react';
import sectionBg from './ui/hero-bg.png';

interface HeroProps {
  title: string;
  description: string;
}

const Hero: React.FC<HeroProps> = ({ title, description }) => {
  return (
    <section 
      className={`w-full max-w-[1340px] m-auto relative bg-cover bg-no-repeat md:p-16 md:min-h-[400px] mb-10`}
      style={{ backgroundImage: `url("${sectionBg}")` }}
    >
      <div className='flex w-full flex-col p-6 shadow-lg max-w-[435px] bg-white gap-3'>
        <h1 className='md:text-5xl font-bold'>{title}</h1>
        <p className='text-xl'>{description}</p>
      </div>
    </section>
  );
}

export default Hero;