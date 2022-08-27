import Logo from '../../assets/Logo.svg';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <div className='bg-orange-300'>
      <div className=' container mx-auto flex items-center gap-x-[12rem] '>
        <Link to='/'>
          <img src={Logo} alt='logo' className='h-56' />
        </Link>

        <nav className='flex text-lg uppercase font-semibold  '>
          <Link
            to='/mint'
            className={`transition-all opacity-80 hover:bg-gray-200 hover:opacity-100 border rounded-lg p-4 ${
              location.pathname === '/mint' && ' bg-gray-200 opacity-100'
            }`}
          >
            Mint
          </Link>
          <Link
            to='/sell-nft'
            className={`transition-all opacity-80 hover:bg-gray-200 hover:opacity-100 border rounded-lg p-4 ${
              location.pathname === '/sell-nft' && ' bg-gray-200 opacity-100'
            }`}
          >
            Sell NFT
          </Link>
          <Link
            to='/audit'
            className={`transition-all opacity-80 hover:bg-gray-200 hover:opacity-100 border rounded-lg p-4 ${
              location.pathname === '/audit' && ' bg-gray-200 opacity-100'
            }`}
          >
            Audit
          </Link>
          <Link
            to='/about'
            className={`transition-all opacity-80 hover:bg-gray-200 hover:opacity-100 border rounded-lg p-4 ${
              location.pathname === '/about' && ' bg-gray-200 opacity-100'
            }`}
          >
            About
          </Link>
          <Link
            to='/faq'
            className={`transition-all opacity-80 hover:bg-gray-200 hover:opacity-100 border rounded-lg p-4 ${
              location.pathname === '/faq' && ' bg-gray-200 opacity-100'
            }`}
          >
            FAQ
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
