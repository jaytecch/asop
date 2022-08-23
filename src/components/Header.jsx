import Logo from '../assets/Logo.svg';

function Header() {
  return (
    <div className='bg-orange-300'>
      <div className=' container mx-auto flex items-center gap-x-56 '>
        <img src={Logo} alt='logo' className='h-56' />
        <nav className='flex gap-x-4 text-lg uppercase font-semibold  '>
          <a href='#' className='transition-all opacity-80 hover:opacity-100'>
            Mint
          </a>
          <a href='#' className='transition-all opacity-80 hover:opacity-100'>
            Sell NFTs
          </a>
          <a href='#' className='transition-all opacity-80 hover:opacity-100'>
            Audit
          </a>
          <a href='#' className='transition-all opacity-80 hover:opacity-100'>
            About
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Header;
