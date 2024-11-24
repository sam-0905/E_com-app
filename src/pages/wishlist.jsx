import { useWish } from "../Context/wishlist-context";
import data from "../utils/Constant";
import wishList from './wishlist';


const wishList = () => {

    const {state,dispatch} = useWish();

    return (
        <>
        {state.length > 0 ? (
            data.map(({name,image,id,price}) => (
                <div key={id} className="cart-card">
                <img src={image}></img>
                <h2>{name}</h2>
                <p className="price">Price: ${price}</p>

                <button className="button-32" onClick={() =>dispatch({ type:"REMOVE_FROM_WISHLIST",payload:{id,price}})}>-</button>
              </div>
            ))
        ): ( <h1>Your wishList is empty</h1> )}

        </>
    );
};

export default wishList;