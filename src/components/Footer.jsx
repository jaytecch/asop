import FooterLogo from '../assets/FooterLogo.png';
function Footer() {
  return (
    <div className='bg-black h-[calc(100vh-46rem)] flex'>
      <div className='container mx-auto'>
        <img src={FooterLogo} alt='' className='w-[12rem] h-full' />

        <span className='h- w-1 bg-slate-50 absolute bottom-0' />
      </div>
    </div>
  );
}

export default Footer;
