import FooterLogo from '../../assets/FooterLogo.png';
function Footer() {
	return (
		<div className='bg-black '>
			<div className='container mx-auto flex gap-x-8 items-center relative'>
				<img src={FooterLogo} alt='' className='h-48' />
				<span className=' bg-slate-50 h-28 w-1 top-2relative ' />
				<div className=' text-yellow-300 ml-16 '>
					<p>Email:akldjalsd@hotmail.com</p>
					<p>Whatsapp: 050505050505</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;
