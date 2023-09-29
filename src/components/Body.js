import { restaurantList } from "../constants";
import ResCard from "./ResCard";
import { useState } from "react";

function filterData(searchQuery, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
}

const Body = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantList);

  const handleSearch = () => {
    const filteredData = filterData(searchQuery, restaurantList);
    setFilteredRestaurants(filteredData);
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="res-list">
        {filteredRestaurants.map((restaurant) => (
          <ResCard key={restaurant.data.id} {...restaurant.data} />
        ))}
      </div>
    </>
  );
};

export default Body;