
import {restaurantList} from "../constants"
import ResCard from "./ResCard"

const Body =()=>{
    return(
    <div className="res-list">
        {restaurantList.map((restaurant)=>{
            return <ResCard key={restaurant.data.id}  {...restaurant.data} />
        })}
        
    </div>
    );

};
     
export default Body;