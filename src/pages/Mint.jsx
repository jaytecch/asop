import CoinImg from '../assets/10A_Front.png';
import ProcessInput from '../components/ProcessInput';
import PriceInput from '../components/PriceInput';

function Mint() {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col justify-center items-center cursor-pointer '>
        <img src={CoinImg} alt='' className='h-80' />
        <div className=''>
          <ProcessInput tier={1} process={'mint'} />
          <PriceInput price={2.85} unit={'sol'} />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center cursor-pointer '>
        <img src={CoinImg} alt='' className='h-80' />
        <div>
          <ProcessInput tier={5} process={'mint'} />
          <PriceInput price={14.25} unit={'sol'} />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center cursor-pointer '>
        <img src={CoinImg} alt='' className='h-80' />
        <div className=''>
          <ProcessInput tier={10} process={'mint'} />
          <PriceInput price={28.5} unit={'sol'} />
        </div>
      </div>
    </div>
  );
}

export default Mint;
