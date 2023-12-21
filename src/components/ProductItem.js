import React from 'react'
import "./ProductItem.css"
import { addToCart,removeFromCart } from '../redux/CartSlice';
import {useDispatch, useSelector} from 'react-redux'
function ProductItem({item}) {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const addItemToCart = (item) => {
    dispatch(addToCart(item))
  }
  const removeItemFromCart = (item) => {
    dispatch(removeFromCart(item))
  }
  return (
    <div className='productItem'>
      {/* item img and descriptions */}
      <img style={{width:200,height:200,marginLeft:"auto",marginRight:"auto"}} src={item.image}/>
      <p>{item.title.length > 30? item.title.substr(0,30) : item.title}</p>
      <p>{item.description.length > 60? item.description.substr(0,60) : item.description}</p>
      <p>{item.price}</p>
      {/* add to cart button */}
      {cart.some((x) => x.id === item.id)?(
         <button onClick = {() => removeItemFromCart(item)} className='productItemButton'>Remove From Cart</button>
      ):(
        <button onClick = {() => addItemToCart(item)} className='productItemButton'>Add To Cart</button>
      )}
      

      {/* Buy now */}
      <button className='productItemBuy'>Buy Now</button>
    </div>
  )
}

export default ProductItem
