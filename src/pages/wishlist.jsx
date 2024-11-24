import { useWish } from "../Context/wishlist-context";
import data from "../utils/Constant";
import emptyWish from  '../assets/icons/emptyWish.png'
import "../wishList/wish.css"

const WishList = () => {
    const { wishlist, andFunctionSetWishlist } = useWish();

    // Filter the data to include only items in the wishlist
    const wishlistItems = data.filter(item => wishlist.includes(item.id));

    return (
        <>
            {wishlistItems.length === 0 ? (
                <h1 className="empty-wish animate__animated animate__flash"><img src={emptyWish} alt="wish-card" />Your wishList is empty</h1>
            ) : (
                wishlistItems.map(({ name, image, id, price }) => (
                    <div key={id} className="wish-card">
                        <div><img src={image} alt={name} className="wish-img"/>
                        </div>
                        <div><h2>{name}</h2>
                        <p className="price">Price: ${price}</p></div>
                        <div> <button
                            className="button-32"
                            onClick={() =>
                                andFunctionSetWishlist({ type: "REMOVE_FROM_WISHLIST", payload: id })
                            }
                        >
                            <i className="fa fa-trash-o" style={{ fontSize: "16px" }}></i>
                        </button></div>
                       
                    </div>
                ))
            )}
        </>
    );
};

export default WishList;
