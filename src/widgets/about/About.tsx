import { FC } from 'react'
import Wrapper from '../../shared/layouts/Wrapper';
import Slider from '../slider/Slider';

interface AboutProps {
  title: string;
}

const About: FC<AboutProps> = ({ title }) => {
  return (
    <Wrapper background="bg-secondaryBg">
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
