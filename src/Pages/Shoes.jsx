import React from "react";
import Filter from "../Components/Filter";
import ShoesList from "../Components/ShoesList";

const Shoes = () => {
  return (
    <div>
      <Filter />
      <div>
        {/* Map through the shoes list here using ShoeCard Component */}
      
       <ShoesList/>
    
     
      </div>
    </div>
  );
};

export default Shoes;
