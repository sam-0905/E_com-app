import "font-awesome/css/font-awesome.min.css";
import { Routes, Route } from 'react-router-dom';
import Body from "./Body";
import Header from './Components/Header';
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import CartItem from "./Cart/CartItem";


const App = () => {
    return (
    <>
    <Header/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/body" element={<Body/>} />
        {/* <Route path="/login" element={<LoginComp />} /> */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/cartItem" element={<CartItem />} />

        {/* <Route path="/wish" element={<WishListCompo />} /> */}
        <Route path="*" element={<Error />} /> 

        {/* <Route path="/user" element={<UserComponent />} /> */}

        {/* <Route path="/about" element={<AboutComponent />} /> */}
        {/* this route shld also map to a component. */}
        {/* <Route path="/product/:ProductId" element={<ProductComponent />} />
        <Route path="/cateogry" element={<Category />} />*/}
      </Routes>
    </>)

}

export default App;





