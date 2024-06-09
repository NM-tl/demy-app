import React from 'react'
import Button from '../../Button/button';
/* icons */
import cart from '../../../assets/icons/cart.svg';
import lang from '../../../assets/icons/lang.svg'

export default function Control() {
  return (
    <div className='flex gap-3'>
        <Button
            iconName="cart"
            type="button"
            border={false}
            bold={false}
            icon={cart}
            background="primary"
        />
        <Button
            name='Log in'
            type="button"
            border={true}
            bold={true}
            background="primary"
        />
        <Button
            name='Sign up'
            type="button"
            border={true}
            bold={true}
            background="secondary"
        />
        <Button
            iconName="lang"
            type="button"
            border={true}
            bold={false}
            icon={lang}
            background="primary"
        />
    </div>
  )
}
