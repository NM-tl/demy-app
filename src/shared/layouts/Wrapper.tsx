import { PropsWithChildren } from 'react';

interface WrapperProps {
  background: string;
}

export default function Wrapper({ children, background }: PropsWithChildren<WrapperProps>) {
  return (
    <section className={`w-full ${background}`}>
      <div className='w-full max-w-[1300px] m-auto'>{children}</div>
    </section>    
  );
}
