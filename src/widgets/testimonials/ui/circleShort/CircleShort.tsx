import { FC } from 'react';

interface CircleShortProps {
    name: string;
}

const CircleShort: FC<CircleShortProps> = ({ name }) => {
    const initials = name
        .split(' ')
        .map(word => word.charAt(0))
        .join('')
        .toUpperCase();

    return (
        <div className='rounded-full w-8 h-8 flex justify-center items-center p-1 bg-secBtnBg text-white text-lg font-bold'>
            {initials}
        </div>
    );
};

export default CircleShort;
