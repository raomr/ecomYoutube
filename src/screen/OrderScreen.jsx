import React from 'react'
import "./OrderScreen.css"
import { useLocation } from 'react-router-dom'
function OrderScreen() {
    const location = useLocation();
    console.log(location.state)
    return (
        <div className='orders'>
            <div>
                <h3>Your Orders</h3>
                {location.state.orders.map((order) => (
                    <div>
                        <div className='orderContainer'>
                            <img style={{ width: 140, height: 140 }} src={order.image} />
                            <div className='orderDescription'>
                                <p style={{marginTop:8}}>{order.title}</p>
                                <p style={{marginTop:8}}>{order.description.length>80?order.description.substr(0,80):order.description}</p>
                                <p style={{marginTop:8}}>{order.price * order.quantity}</p>
                            </div>
                            <div className='orderButtons'>
                            <button className='orderButton'>Return Product</button>
                            <button className='orderButton'>Download Invoice</button>
                            <button className='orderButton'>Rate Product</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OrderScreen
