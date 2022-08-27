import CoinImg from '../assets/10A_Front.png';
import ProcessInput from '../components/ProcessInput';
import PriceInput from '../components/PriceInput';

function SellNFT() {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col justify-center items-center cursor-pointer '>
        <img src={CoinImg} alt='' className='h-80' />
        <div className=''>
          <ProcessInput tier={1} process={'sell'} />
          <PriceInput price={85} unit={'$'} />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center cursor-pointer '>
        <img src={CoinImg} alt='' className='h-80' />
        <div>
          <ProcessInput tier={5} process={'sell'} />
          <PriceInput price={425} unit={'$'} />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center cursor-pointer '>
        <img src={CoinImg} alt='' className='h-80' />
        <div className=''>
          <ProcessInput tier={10} process={'sell'} />
          <PriceInput price={850} unit={'$'} />
        </div>
      </div>
    </div>
  );
}

export default SellNFT;
