import { useState } from "react";
import data from './utils/Constant';
import { Link } from "react-router-dom";
import { useCart } from "./Context/Cart-Context";

const Body = () => {
    const[searchText , setSearchText] = useState();
    const[filterData ,setFilterData] = useState(data);

    const filteredData = () => {
        console.log("filter",searchText)
        const filteredSearch = data.filter((data) => (
            data?.name?.toLowerCase()?.includes?.(searchText?.toLowerCase())
        ));
        setFilterData(filteredSearch)
    }

    const changeSearchHandler = (e) => setSearchText(e.target.value)
    const { state, dispatch } = useCart();


    return (
        <>  
        <div className="search-container">
        <input
        type="text"
        value={searchText}
        onChange={changeSearchHandler}
        className="search-bar"
        placeholder="Search for Products, Brands and More"
        ></input>
        <button className="button-86" role="button" onClick={filteredData}>Search</button>
        </div>
        <div className="card" >
        {filterData.map(
          ({
            id,
            name,
            image,
            price,
            productName,
            inStock,
            level,
            fastDelivery,
            ratings,
          }) => (

            <div className="card">
                <div className="card-container">
                <div key={id} className="card-img"> <img src={image} width="100%" height="auto" alt={productName} /> </div>
                    <div className="card-details">
                    <h3 className="card-title"> {name} </h3>
                    <div className="price">Rs. {price}</div>
                    <div className="stock-label">  {inStock && <div className="in-stock"> In Stock </div>}
                    {!inStock && <div className="out-stock">  Out of Stock </div>}</div>
                    <div>{level}</div>
                    <div className="rating fa fa-star" style={{marginTop:"4px"}}>{ratings}</div>
                     {fastDelivery ? (
                     <div >  Fast Delivery </div>
                     ) : (
                     <div> 3 days minimum </div>
                     )}
                    </div>
                    <div>
                      <Link to="/cart"><button onClick={()=> dispatch({type:"ADD_TO_CART", payload:price})  }>ADD TO CART</button></Link>
                      </div>
                   
                </div>
                   
             </div>                             
          )
        )}
      </div>
        </>
    )
}

export default Body;