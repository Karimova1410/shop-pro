//routes settings
import {Routes, Route} from'react-router-dom'
import Home from './pages/Home';

const App = () => {
  return (
		<div>
			<Routes>
        <Route path="/" element={<Home/>}>
          <Route path='/products' element={<h1>Products</h1>}></Route>
       </Route>
      </Routes>
		</div>
	);
}

export default App