
import {restaurantList} from "../constants"
import ResCard from "./ResCard"
import {useState} from react;
const Body =()=>{

    const [searchQuery, setSearchQuery] = useState('');
    
    return(
    <div className="res-list">
        {restaurantList.map((restaurant)=>{
            return <ResCard key={restaurant.data.id}  {...restaurant.data} />
        })}
        
    </div>
    );

};
     
export default Body;