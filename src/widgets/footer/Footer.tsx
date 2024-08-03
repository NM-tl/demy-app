import Logo from '../../shared/ui/logo.svg';

export default function Footer() {
  return (
    <footer className='bg-secBtnBg max-w-[120rem] m-auto shadow-lg py-10'>
        <a href="/">
          <img src={Logo} alt="Demy" className='min-w-[200px]' width={200} height={60} />
        </a>
    </footer>
  );
}
