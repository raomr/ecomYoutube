import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export default function Header() {
    const cart = useSelector((state) => state.cart.cart);
    const navigate = useNavigate();
    const navigateToCart = () => {
        navigate("/cart");
    }
    return (
        <>
            <div className='header'>
                {/* image logo */}
                <div>
                    <img
                        style={{ width: 120, height: 40, marginTop: 10 }}
                        className='image'
                        src="https://links.papareact.com/f90"
                    />
                </div>
                <div className='headerInputContainer'>
                    <input className='headerInput' type='text' placeholder='search Items or Products' />
                    <SearchIcon style={{ color: 'white', marginLeft: 4, marginTop: 2 }} />
                </div>
                <div >
                    <h4 className='headerText'>Hello John</h4>
                    <h4 className='headerText'>Accounts and List</h4>
                </div>
                <div>
                    <h4 className='headerText'>Returns</h4>
                    <h4 className='headerText'>Orders</h4>
                </div>
                {/* Shopping Cart */}
                <div onClick={navigateToCart}  style={{ position: "relative",cursor:"pointer" }}>
                    <ShoppingCartIcon style={{ color: 'white' }} />
                    <span style={{ position: 'absolute', left: 14, right: 14, 
                    backgroundColor: 'white', width: 14, height: 14, borderRadius: 7, 
                    textAlign: 'centre', fontSize: 12, fontWeight: 400 }}>
                        {cart.length}</span>
                </div>
                {/* Place and number */}
                <div>
                    <h4 className='headerText'>India</h4>
                    <h4 className='headerText'>12345</h4>
                </div>
            </div>
            {/* Bottom Header */}
            <div className="headerBottom">
                <MenuIcon style={{color:'white',paddingTop:6}}/>
                <p className='headerBottomText'>Buy</p>
                <p className='headerBottomText'>Healthy Products</p>
                <p className='headerBottomText'>Lifestyle</p>
                <p className='headerBottomText'>Prime Video</p>
                <p className='headerBottomText'>Super Sale</p>
                <p className='headerBottomText'>Exiting Offers</p>
                <p className='headerBottomText'>Subscribe</p>
            </div>
        </>

    )
}
