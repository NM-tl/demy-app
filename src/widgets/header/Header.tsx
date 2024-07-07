import Control from '../../entities/control/Control';
import Search from '../../entities/search/Search';
import Logo from '../../shared/ui/logo.svg';
import Button from '../../shared/button/Button';

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
