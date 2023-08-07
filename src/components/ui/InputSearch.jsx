import { SearchOutlined } from "@ant-design/icons";
import "./InputSearch.scss"
const InputSearch = () => {
	return (
		<span className="search-input">
			<span className="search-input-icon">
				<SearchOutlined />
			</span>
			<input type='text' placeholder='Search for anything...' />
		</span>
	);
};

export default InputSearch;
