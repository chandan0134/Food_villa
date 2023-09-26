
import {restaurantList} from "../constants"
import ResCard from "./ResCard"
import {useState} from "react";

function filterSearch(searchQuery,restaurant){
    const filterSearch=restaurant.filter((restaurant)=>
      restaurant.data.name.includes(searchQuery)
    );
    return filterSearch;
}

const Body =()=>{

    const [searchQuery, setSearchQuery] = useState('');
    const [restaurants, setRestaurants]=useState(restaurantList);
    return(
    <>
    <div className="search-container">
        <input
        type="text"
        className="search-"
        placeholder="search"
        value={searchQuery}
        onChange={(e)=>{
            setSearchQuery(e.target.value);
        }}
        />
        <button
        className="search-btn"
        onClick={()=>{
            const data=filterSearch(searchQuery,restaurants);
            setRestaurants(data);
        }
        }
        >
        search
        </button>
    </div>

    <div className="res-list">
    
        { restaurants.map((restaurant) => {
            return (
            <ResCard key={restaurant.data.id}  {...restaurant.data} />
            );
        })}

     


        
    </div>
    </>
    );
  

};
     
export default Body;