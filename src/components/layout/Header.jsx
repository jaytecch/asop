import Logo from '../../assets/Logo.svg';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const location = useLocation();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className='bg-orange-300 border-b-2 border-black'>
      <div className=' container mx-auto flex items-center gap-x-[12rem] relative   '>
        <Link to='/'>
          <img src={Logo} alt='logo' className='h-56' />
        </Link>

        <nav className='flex text-lg uppercase font-semibold absolute bottom-0 right-[10%] '>
          <Link
            to='/mint'
            className={`transition-all hover:bg-gray-200 hover:opacity-100 border-2 rounded-lg p-4 ${
              location.pathname === '/mint'
                ? ' bg-gray-200 opacity-100'
                : 'opacity-80 '
            }`}
          >
            Mint
          </Link>
          <Link
            to='/sell-nft'
            className={`transition-all  hover:bg-gray-200 hover:opacity-100 border rounded-lg p-4 ${
              location.pathname === '/sell-nft'
                ? ' bg-gray-200 opacity-100'
                : 'opacity-80 '
            }`}
          >
            Sell NFT
          </Link>
          <Link
            to='/audit'
            className={`transition-all hover:bg-gray-200 hover:opacity-100 border rounded-lg p-4 ${
              location.pathname === '/audit'
                ? ' bg-gray-200 opacity-100'
                : 'opacity-80 '
            }`}
          >
            Audit
          </Link>
          <Link
            to='/about'
            className={`transition-all  hover:bg-gray-200 hover:opacity-100 border rounded-lg p-4 ${
              location.pathname === '/about'
                ? ' bg-gray-200 opacity-100'
                : 'opacity-80 '
            }`}
          >
            About
          </Link>
          <Link
            to='/faq'
            className={`transition-all hover:bg-gray-200 hover:opacity-100 border rounded-lg p-4 ${
              location.pathname === '/faq'
                ? ' bg-gray-200 opacity-100'
                : 'opacity-80 '
            }`}
          >
            FAQ
          </Link>
          <div
            className=' cursor-pointer border-1 border-white'
            onClick={handleClick}
          >
            <div
              className={`relative z-20 w-10 h-[33px] transform rotate-0 transition duration-50 ease-in-out cursor-pointer `}
            >
              <span
                className={`bg-white block absolute w-full h-[5px] rounded-[7px] opacity-100 left-0 transform rotate-0 transition duration-250 ease-in-out origin-[3px_1px] top-0 ${
                  isClicked && '-top-0  rotate-45'
                }`}
              ></span>
              <span
                className={`bg-white block absolute w-full h-[5px] rounded-[7px] opacity-100 left-0 transform rotate-0 transition duration-250 ease-in-out origin-left-center top-[14px] ${
                  isClicked && 'w-0 opacity-0'
                }`}
              ></span>
              <span
                className={`bg-white block absolute w-full h-[5px] rounded-[7px] opacity-100 left-0 transform rotate-0 transition duration-250 ease-in-out origin-[-3px_1px] top-7 ${
                  isClicked && '-rotate-45'
                }`}
              ></span>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
