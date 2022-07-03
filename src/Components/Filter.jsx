
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Sneakers, Loafers, Canvas, Boots
  //in the UI
  const dispatch = useDispatch();
  const [searchParams, setsearchParams] = useSearchParams();
  const urlCategory = searchParams.getAll("category");
  const [category, setcategory] = useState(urlCategory || []);
  const handleCheck = (e) => {
    const option = e.target.value;
    let newCategory = [...category];
    if (category.includes(option)) {
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setcategory(newCategory);
  };
  useEffect(() => {
    if (category) {
      let params={};
      category && (params.category=category);
      
      setsearchParams(params);
    
    }
  }, [category,dispatch, setsearchParams]);
  
  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-cy="filter-category">
        <div>
          <input type="checkbox" value="Sneakers"  onChange={handleCheck} />
          <label>Sneakers</label>
        </div>
        <div>
          <input type="checkbox" value="Loafers"  onChange={handleCheck} />
          <label>Loafers</label>
        </div>
        <div>
          <input type="checkbox" value="Canvas" onChange={handleCheck}/>
          <label>Canvas</label>
        </div>
        <div>
          <input type="checkbox" value="Boots"  onChange={handleCheck}/>
          <label>Boots</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
