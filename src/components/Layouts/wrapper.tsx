import React, { PropsWithChildren } from 'react';

export default function Wrapper({ children }: PropsWithChildren<{}>) {
  return (
    <section className='w-full bg-secondaryBg'>
      <div className='w-full max-w-[1300px] m-auto'>{children}</div>
    </section>    
  );
}
