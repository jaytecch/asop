import Coin1 from '../assets/10A_Back.png';
import Coin2 from '../assets/10A_Front.png';

function Home() {
  return (
    <div className=' container mx-auto flex items-center justify-center '>
      <h1 className='text-4xl 2xl:text-5xl font-bold text-gray-400 w-80 tracking-wide leading-[4rem] drop-shadow-2xl '>
        Invest In Physical <span className='text-[#d79b61]'>Gold</span> Using
        NFTs
      </h1>
      <div className='flex drop-shadow-2xl '>
        <img
          src={Coin2}
          alt=''
          className='h-[24rem] w-[24rem] 2xl:h-[30rem] 2xl:w-[30rem] relative left-48 2xl:left-60 '
        />
        <img
          src={Coin1}
          alt=''
          className=' h-[24rem] w-[24rem] 2xl:h-[30rem] 2xl:w-[30rem] '
        />
      </div>
    </div>
  );
}

export default Home;
