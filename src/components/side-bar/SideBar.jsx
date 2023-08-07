import { useState, useEffect } from "react";
import axios from "../../axios";
import "./SideBar.scss";
import { Menu } from "antd";

const SideBar = () => {
	const [category, setCategory] = useState([]);
	useEffect(() => {
		const getCategories = async () => {
			const res = await axios.get("/categories?limit=8");
			console.log(res.data);
			setCategory(res.data);
		};
		getCategories();
	}, []);
	return (
		<div className='side-bar'>
			<Menu
				mode='inline'
				style={{
					width: "100%",
					background: "#191919",
					color: "#fff",
				}}
				items={category.map(item => ({
					key: "menu" + item.id,
					label: item.name,
				}))}
			/>
			<div className='help-links'>
				<a href=''>Help</a>
				<a href=''>Terms & Conditions</a>
			</div>
		</div>
	);
};

export default SideBar;
