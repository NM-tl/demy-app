import { useState } from 'react';
import Control from '../../entities/control/Control';
import Search from '../../entities/search/Search';
import Logo from '../../shared/ui/logo.svg';
import Button from '../../shared/button/Button';
import Modal from '../modal/Modal';
import SignUp from '../../features/auth/SignUp';

export default function Header() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => setIsModalVisible(true);
  const handleCloseModal = () => setIsModalVisible(false);

  return (
    <>
      <header className='flex w-full items-center px-6 justify-center py-2 shadow-lg relative z-10'>
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
        <Control onOpenModal={handleOpenModal} />
      </header>
      <Modal
        type='signup'
        title='Sign up and start learning'
        content={<SignUp onClose={handleCloseModal} />}
        isVisible={isModalVisible}
        onClose={handleCloseModal}
      />
    </>
  );
}
