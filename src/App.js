import './App.css';
import { Provider } from 'react-redux';
import store from './store'
import Home from './screen/Home';
import Cart from './screen/Cart';
import {BrowserRouter, Route,Routes} from "react-router-dom"
import OrderScreen from './screen/OrderScreen';

function App() {
  return (
    <BrowserRouter>
     <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path = "/cart" element={<Cart/>}/>
        <Route path = "/orders" element={<OrderScreen/>}/>
      </Routes>
      </Provider>
  </BrowserRouter>

  );
}


export default App;
