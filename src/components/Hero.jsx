import Coin1 from '../assets/10A_Back.png';
import Coin2 from '../assets/10A_Front.png';

function Hero() {
  return (
    <div className=' flex items-center gap-x-56 '>
      <h1 className='text-5xl font-bold text-gray-400 w-80 tracking-wide leading-[4rem]'>
        Invest In Physical Gold Using NFTs
      </h1>
      <div className='flex'>
        <img
          src={Coin2}
          alt=''
          className=' h-[30rem] w-[30rem] relative left-60'
        />
        <img src={Coin1} alt='' className=' h-[30rem] w-[30rem] ' />
      </div>
    </div>
  );
}

export default Hero;
