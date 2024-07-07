import Wrapper from '../../shared/layouts/Wrapper';
import Card from './ui/card/Card';
import { data } from './model/data';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Testimonials = () => {
  const testimonials = data.courses.flatMap(course => course.testimonials);

  return (
    <Wrapper background='bg-white'>
      <div className='flex flex-col py-16 gap-16'>
        <h2 className='font-bold text-[38px] text-secBtnBg'>How learners like you are achieving their goals</h2>
        <div className='w-full overflow-hidden'>
          <Swiper
            spaceBetween={24}
            slidesPerView={3.4}
            speed={500}
            navigation={true} 
            modules={[Navigation]}
            className="mySwiper2"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} style={{ height: '100%' }}>
                <Card
                  author={testimonial.author}
                  review={testimonial.review}
                  course={data.courses[index].name}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Wrapper>
  );
};

export default Testimonials;