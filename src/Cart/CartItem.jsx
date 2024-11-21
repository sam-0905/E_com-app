import data from "../utils/Constant";
import { useCart } from "../Context/Cart-Context";
import CartItem from './CartItem';

const CartItem = () => {
    const { state, dispatch } = useCart();
    const { quantity, totalPrice } = state;
   return (
    <>
    <h1>cartItem</h1>

    {data.map(({name,price,id,image}) => (
        <div key={id}>
            <img src={image}></img>
            <h2>{name}</h2>
            <h2>{price}</h2>

            <button onClick={()=> dispatch({type:"ADD_TO_CART", payload:{id,price}})}>+</button>
            <button onClick={() =>dispatch({ type:'REMOVE_FROM_CART',payload: {id,price}})}>-</button>

            <div><h2>Oder summary</h2>
            <h2>quantity: {quantity} </h2>
            <h2>Total Price :{totalPrice} </h2>
            </div>
        </div>
    ))}
    </>
   )
}

export default CartItem;