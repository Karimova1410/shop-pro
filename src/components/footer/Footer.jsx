import Logo from "../../assets/LOGO 2.svg";
import "./Footer.scss";
import Instagram from "../../assets/instagram.svg";
import FaceBook from "../../assets/facebook.svg";
import Youtube from "../../assets/youtube.svg";
import { Tooltip } from "antd";

const links = [
	{
		link: "https://youtube.com",
		icon: Youtube,
		title: "YouTube",
	},
	{
		link: "https://FaceBook.com",
		icon: FaceBook,
		title: "FaceBook",
	},
	{
		link: "https://instagram.com",
		icon: Instagram,
		title: "Instagram",
	},
];

const Footer = () => {
	return (
		<footer>
			<div className='footer'>
				<div className='logo'>
					<img src={Logo} alt='Logo' />
				</div>

				<div className='footer-text'>
					<p>Developed by Okurmen</p>
				</div>
				<div className='footer-links'>
					{links.map(link => {
						return (
							<Tooltip title={link.title} key={link.title}>
								<a href={link.link}>
									<img src={link.icon} alt='' />
								</a>
							</Tooltip>
						);
					})}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
