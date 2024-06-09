import React from 'react'
import Wrapper from '../Layouts/wrapper';
import Slider from '../Slider/slider';

interface AboutProps {
  title: string;
}

const About: React.FC<AboutProps> = ({ title }) => {
  return (
    <Wrapper>
      <div className='w-full flex flex-col gap-6 p-16'>
        <h2 className='text-descText text-xl text-center'>{title}</h2>
        <div className='w-full max-w-[1164px] overflow-hidden'>
          <Slider />
        </div>
      </div>
    </Wrapper>
  )
}

export default About;
