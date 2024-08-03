import { useState } from 'react';
import MainLayout from '../../shared/layouts/MainLayout';
import SignUp from '../../features/auth/SignUp';
import Illustration from '../../shared/ui/signup/illustration.webp';

export default function SignUpPage() { 
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleCloseModal = () => setIsModalVisible(false);

  return (
    <MainLayout>
      <div className='flex py-3 items-center gap-8 w-full justify-center'>
        <img src={Illustration} alt="signup" />
        <SignUp onClose={handleCloseModal}/>
      </div>
    </MainLayout>
  );
};
