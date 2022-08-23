import CoinImg from '../assets/10A_Front.png';

function Mint() {
	return (
		<div className='flex justify-center'>
			<div>
				<img src={CoinImg} alt='' className='h-80' />
				<div></div>
			</div>
			<div>
				<img src={CoinImg} alt='' className='h-80' />
			</div>
			<div>
				<img src={CoinImg} alt='' className='h-80' />
			</div>
		</div>
	);
}

export default Mint;
