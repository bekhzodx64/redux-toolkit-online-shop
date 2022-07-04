import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import Cart from './components/cart';
import Home from './components/home';
import NotFound from './components/not-found';

const App = () => {
	return (
		<div>
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	);
};

export default App;
