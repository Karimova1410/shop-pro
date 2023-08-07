import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// router settings
import { BrowserRouter } from "react-router-dom";




import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<div className='container'>
			<App />
		</div>
	</BrowserRouter>
);

// REDUX

