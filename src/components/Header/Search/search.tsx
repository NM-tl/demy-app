import React from 'react';
import searchIcon from '../../../assets/icons/search.svg';

export default function Search() {
  return (
    <div className='border rounded-full pr-6 pl-3 py-3 flex items-center w-full max-w-[1027px] gap-3'>
        <img src={searchIcon} alt="search" className='w-5' />
        <input type="text" name="search" id="search" placeholder='Search for anything' className='border-0 w-full h-full focus:outline-none' />
    </div>
  );
}
