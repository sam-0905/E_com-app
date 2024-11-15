import { useState } from "react";
import data from './utils/Constant';

const Body = () => {
    const[searchText , setSearchText] = useState("");
    const[filterData ,setFilterData] = useState(data)

    retrun (
        <>  
        <input
        type="text"
        value={searchText}
        onChange={(e)=>e.target.value}
        placeholder="Search for Products, Brands and More"
        ></input>
        <button></button>
        </>
    )
}

export default Body;