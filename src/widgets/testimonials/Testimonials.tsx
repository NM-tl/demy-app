import { useEffect, useState } from 'react';
import Wrapper from '../../shared/layouts/Wrapper';
import Card from './ui/card/Card';
import { fetchComments } from './api';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Testimonials = () => {
  const [comments, setComments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getComments = async () => {
      try {
        const data = await fetchComments();
        setComments(data);
      } catch (err: any) {
        setError('Failed to load comments');
      } finally {
        setLoading(false);
      }
    };

    getComments();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

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
            {comments.map((comment, index) => (
              <SwiperSlide key={comment.id} style={{ height: '100%' }}>
                <Card
                  author={comment.email}
                  review={comment.body}
                  course={`Course ${index + 1}`}
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