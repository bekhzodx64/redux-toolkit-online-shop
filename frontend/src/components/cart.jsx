import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
	removeFromCart,
	decreaseCart,
	addToCart,
	clearCart,
} from '../features/cartSlice';

const Cart = () => {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);

	const handleRemoveFromCart = (cartItem) => {
		dispatch(removeFromCart(cartItem));
	};

	const handleDecreaseCart = (cartItem) => {
		dispatch(decreaseCart(cartItem));
	};

	const handleIncreaseCart = (cartItem) => {
		dispatch(addToCart(cartItem));
	};

	const handleClearCart = () => {
		dispatch(clearCart());
	};

	return (
		<div className='cart-container'>
			<h2>Shopping Cart</h2>
			{cart.cartItems.length === 0 ? (
				<div className='cart-empty'>
					<p>Your cart is currently empty.</p>
					<div className='start-shopping'>
						<Link to='/'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-5 w-5'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								strokeWidth={2}>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M10 19l-7-7m0 0l7-7m-7 7h18'
								/>
							</svg>
							<span>Start shopping</span>
						</Link>
					</div>
				</div>
			) : (
				<div>
					<div className='titles'>
						<h3 className='product-title'>Product</h3>
						<h3 className='price'>Price</h3>
						<h3 className='quantity'>Quantity</h3>
						<h3 className='total'>Total</h3>
					</div>
					<div className='cart-items'>
						{cart.cartItems?.map((cartItem) => {
							const { id, image, name, desc, price, cartQuantity } = cartItem;
							return (
								<div key={id} className='cart-item'>
									<div className='cart-product'>
										<img src={image} alt={name} />
										<div>
											<h3>{name}</h3>
											<p>{desc}</p>
											<button onClick={() => handleRemoveFromCart(cartItem)}>
												Remove
											</button>
										</div>
									</div>
									<div className='cart-product-price'>${price}</div>
									<div className='cart-product-quantity'>
										<button onClick={() => handleDecreaseCart(cartItem)}>
											-
										</button>
										<div className='count'>{cartQuantity}</div>
										<button onClick={() => handleIncreaseCart(cartItem)}>
											+
										</button>
									</div>
									<div className='cart-product-total-price'>
										${price * cartQuantity}
									</div>
								</div>
							);
						})}
					</div>
					<div className='cart-summary'>
						<button className='clear-cart' onClick={() => handleClearCart()}>
							Clear cart
						</button>
						<div className='cart-checkout'>
							<div className='subtotal'>
								<span>Subtotal </span>
								<span className='amount'>${cart.cartTotalAmount}</span>
							</div>
							<p>Taxes and shipping calculated at checkout</p>
							<button>Check out</button>
							<div className='continue-shopping'>
								<Link to='/'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-5 w-5'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
										strokeWidth={2}>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M10 19l-7-7m0 0l7-7m-7 7h18'
										/>
									</svg>
									<span>Continue shopping</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Cart;
