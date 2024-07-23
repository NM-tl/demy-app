import React, { FC, useEffect, useRef } from 'react';

interface ModalProps {
  type: string;
  title: string;
  content: React.ReactNode;
  isVisible: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ type, title, content, isVisible, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      className={`flex fixed justify-center items-center w-full h-full bg-black bg-opacity-40 z-40 top-0 ${isVisible ? 'block' : 'hidden'}`}
      id='modal'
    >
      <div
        ref={modalRef}
        className={`${type} absolute z-20 flex flex-col gap-6 bg-white p-6 items-center rounded-md max-w-[500px]`}
      >
        <h1 className='text-4xl font-bold'>{title}</h1>
        {content}
      </div>
    </div>
  );
};

export default Modal;
