import React from 'react';
import Control from './Control/control';
import Search from './Search/search';
import Logo from '../../assets/logo.svg';
import Button from '../Button/button';

export default function Header() {
  return (
    <header className='flex w-full items-center px-6 justify-center py-2'>
        <a href="/">
          <img src={Logo} alt="Demy" className='min-w-[200px]' width={200} height={60} />
        </a>
        <Button
          name='Category'
          type="button"
          border={false}
          bold={false}
          background="primary"
        />
        <Search />
        <div className='hidden lg:flex items-center min-w-64'>
          <Button
            name='Udemy Business'
            type="button"
            border={false}
            bold={false}
            background="primary"
          />
          <Button
            name='Teach on Udemy'
            type="button"
            border={false}
            bold={false}
            background="primary"
          />
          </div>
        <Control />
    </header>
  )
}
