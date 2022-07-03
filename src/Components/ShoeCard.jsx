import React from "react";

const ShoeCard = (Data) => {
  
  return (
    <div data-cy={`shoe-card-wrapper-${Data.id}`}>
      <div>
        <img data-cy="shoe-card-image" src={Data.image} alt="" />
      </div>
      <div>
        <div data-cy="shoe-name">{Data.name}</div>
        <div data-cy="shoe-category">{Data.category}</div>
      </div>
    </div>
  );
};

export default ShoeCard;
