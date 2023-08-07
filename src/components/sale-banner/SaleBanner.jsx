import "./SaleBanner.scss";
import Button from "../ui/Button";
import Boots from "../../assets/image 4.png";
import Joystick from "../../assets/image 3.png";
const SaleBanner = () => {
	return (
		<div className='sale-banner'>
			<div className='l-sale'>
				<p className='new-year'>NEW YEAR</p>
				<p className='sale'>SALE</p>
				<Button
					style={{
						marginLeft: 227,
						fontSize: 20,
					}}>
					See more
				</Button>

				<img className='boots' src={Boots} alt='' />
				<img className='joystick' src={Joystick} alt='' />
			</div>
			<div className='r-sale'>
				<p>
					save up to
					<span> 50% </span> off
				</p>
			</div>
		</div>
	);
};

export default SaleBanner;
