import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import Cart from './components/cart';
import Home from './components/home';
import NotFound from './components/not-found';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
	return (
		<div>
			<ToastContainer />
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
