import React, { FC } from 'react';

interface ModalProps {
  type: string;
  title: string;
  content: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ type, title, content }) => {
  return (
    <div className='flex fixed justify-center items-center w-full h-full bg-black bg-opacity-40 z-40 top-0 hidden' id='modal'>
      <div className={`${type} absolute z-20 flex flex-col gap-6 bg-white p-6 items-center rounded-md max-w-[500px]`}>
        <h1 className='text-4xl font-bold'>{title}</h1>
        {content}
      </div>
    </div>    
  );
};

export default Modal;
