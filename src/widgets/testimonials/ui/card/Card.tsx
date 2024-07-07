import { FC } from 'react';
import CircleShort from '../circleShort/CircleShort';
import quoteIcon from '../quote.svg';

interface CardProps {
    author: string;
    review: string;
    course: string;
}

const Card: FC<CardProps> = ({ author, review, course }) => {

    return (
        <div className='flex flex-col p-6 border border-border h-full max-w-[389px]'>
            <div className='flex flex-col'>
                <div className='flex flex-col gap-4'>
                    <img src={quoteIcon} alt="quote" className='w-8 h-8' />
                    <div className='flex flex-col justify-between h-40'>
                        <p dangerouslySetInnerHTML={{ __html: review }} className='text-base'></p>
                        <CircleShort name={author} />
                    </div>
                </div>
                <div className='mt-6 pt-6 border-t border-border'>
                    <button type="button" className='flex items-center gap-1 text-courseName'>
                        <div className='min-w-8 h-12 flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <span className='text-base font-bold text-left'>{course}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
