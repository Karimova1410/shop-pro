import MainBg from "../../assets/image 1.png"
import Button from '../ui/Button';
import "./MainBanner.scss"
const MainBanner = () => {
  return (
		<div className='main-banner'>
			<h1 className='main-banner-title'>BIG SALE 20%</h1>
      <div className='main-banner-text'>
			<h5>the bestseller of 2022 </h5>
			<p>
				LENNON r2d2 <br />
         with NVIDIA 5090 TI</p>
			<Button >Shop Now</Button>

      </div>
      <div className='main-banner-bg'>
        <img src={MainBg} alt="" />
      </div>
		</div>
	);
}

export default MainBanner