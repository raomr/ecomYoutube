import React from 'react'
import "./Cart.css"
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { incrementQuantity, decrementQuantity, removeFromCart, cleanCart } from '../redux/CartSlice';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();
  const total = cart.map((item) => item.price * item.quantity).reduce((curr, prev) => curr + prev, 0)
  console.log(total);
  const orders = [...cart];
  const charges = 30;
  const totalPrice = total + charges
  const dispatch = useDispatch();
  const incrementItemQuantity = (item) => {
    dispatch(incrementQuantity(item))
  }
  const decrementItemQuantity = (item) => {
    dispatch(decrementQuantity(item))
  }
  const removeItemFromCart = (item) => {
    dispatch(removeFromCart(item))
  }
  const placeOrder = (item) => {
    toast('Order Placed!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });

      setTimeout(()=>{
        navigate("/orders",{
          state:{
            orders:orders,
            totalPrice: totalPrice
          }
        })
      },3500)
    
      setTimeout(() => {
        dispatch(cleanCart());
      },4000)
  }
  


  return (
    <>
      <Header />
      <div className='cart'>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
        {/* Left part */}
        <div className='cartLeft'>
          {cart.map((item, index) => (
            <div className='cartContainer'>
              {/* Image */}
              <div>
                <img src={item.image} style={{ width: 100, height: 100 }} />
              </div>
              {/* Description */}
              <div className='cartDescription'>
                <p>{item.title.length > 60 ? item.title.substr(0, 60) : item.title}</p>
                <p style={{ marginTop: 8 }}>{item.description.length > 80 ? item.description.substr(0, 80) : item.description}</p>
                <p style={{ marginTop: 8 }}>{item.price}</p>
              </div>
              {/* Buttons */}
              <div className='cartButtonContainer'>
                <div className='cartButtons'>
                  <div onClick={() => { decrementItemQuantity(item) }} style={{ cursor: 'pointer' }}>-</div>
                  <div>{item.quantity} </div>
                  <div onClick={() => { incrementItemQuantity(item) }} style={{ cursor: 'pointer' }}>+</div>
                </div>
                <button onClick={() => removeItemFromCart(item)} className='removeButton'>Remove Item</button>
                <h5 style={{ marginTop: 7 }}>{item.price * item.quantity}</h5>
              </div>
            </div>
          )
          )}
        </div>
        {/* Right Part */}
        {total === 0 ? (
          <div><h2>Your Cart Is Empty</h2></div>
        ) : (
          <div className='cartRight'>
            {/* Location Info & Button */}
            <div className='cartRightLocationContainer'>
              <div className='cartRightLocation'>
                <LocationOnIcon style={{ color: 'gray' }} />
                <div className='cartRightDescription'>
                  <p className='cartRightText'>Select your location</p>
                  <p className='cartRightText'>Please select a location so that we can find you!</p>
                  <button className='selectLocButton'>Select Location</button>
                </div>
              </div>

              <div className='cartRightLocation'>
                <LocationOnIcon style={{ color: 'gray' }} />
                <div className='cartRightDescription'>
                  <p className='cartRightText'>Choose your saved location</p>
                  <button className='selectLocButton'>Choose Location</button>
                </div>
              </div>
            </div>

            {/* Coupon info and description */}
            <div className='cartRightCoupon'>
              <ConfirmationNumberIcon style={{ color: 'gray' }} />
              <div style={{ marginLeft: 10 }}>
                <h4 className='cartRightCouponText'>Select/Apply Coupon</h4>
                <p className='cartRightCouponsmall'>Apply Coupons to avail offer on the products</p>
              </div>

            </div>

            {/* Container for checkout and total */}

            <div className='cartRightCheckout'>
              <div className='cartCheckoutText'>
                <h5>Cart Total</h5>
                <h5>{total}</h5>
              </div>
              <div className='cartCheckoutText'>
                <h5>Discount</h5>
                <h5>-</h5>
              </div>
              <div className='cartCheckoutText'>
                <h5>Charges</h5>
                <h5>{charges} </h5>
              </div>
              <div className='cartCheckoutText'>
                <h3>Grand Total</h3>
                <h3>{total + 30} </h3>
              </div>
            </div>
            <button onClick={placeOrder} className='checkOutButton'>Place Order</button>
          </div>

        )}

      </div>
    </>

  )
}
