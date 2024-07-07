import React, { PropsWithChildren } from 'react';

export default function MainLayout({ children }: PropsWithChildren<{}>) {
  return (
    <main className='w-full'>{children}</main>
  );
}
