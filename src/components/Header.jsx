import Logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='bg-orange-300'>
      <div className=' container mx-auto flex items-center gap-x-56 '>
        <Link to='/'>
          <img src={Logo} alt='logo' className='h-56' />
        </Link>

        <nav className='flex gap-x-4 text-lg uppercase font-semibold  '>
          <Link
            to='/mint'
            className='transition-all opacity-80 hover:opacity-100'
          >
            Mint
          </Link>
          <Link
            to='/sellNFT'
            className='transition-all opacity-80 hover:opacity-100'
          >
            Sell NFT
          </Link>
          <Link
            to='/audit'
            className='transition-all opacity-80 hover:opacity-100'
          >
            Audit
          </Link>
          <Link
            to='/about'
            className='transition-all opacity-80 hover:opacity-100'
          >
            About
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
