import { useState } from "react";
import data from './utils/Constant';

const Body = () => {
    const[searchText , setSearchText] = useState();
    const[filterData ,setFilterData] = useState(data);

    const filteredData = () => {
        const filteredSearch = data.filter((data) => {
            data?.name?.toLowerCase()?.includes?.(searchText?.toLowerCase())
        })
        setFilterData(filteredSearch)
    }

    const changeSearchHandler = () => (event) => setSearchText(event.target.value)

    return (
        <>  
            <div>
        <input
        type="text"
        value={searchText}
        onChange={changeSearchHandler}
        placeholder="Search for Products, Brands and More"
        ></input>
        <button className="button-86" role="button" onClick={filteredData}>Search</button>
            </div>

        </>
    )
}

export default Body;