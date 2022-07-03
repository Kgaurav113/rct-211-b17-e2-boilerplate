import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getshoes } from "../Redux/AppReducer/action";


const SingleShoe = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const shoes = useSelector((state) => state.AppReducer.shoes);
 
  const [currentShoes, setCurrentShoes] = useState({});
  useEffect(() => {
    if (id) {
      const temp = shoes.find((shoes) => shoes.id === Number(id));
      temp && setCurrentShoes(temp);
    }
  }, [shoes, id]);
  useEffect(() => {
    if (shoes.length === 0) {
      dispatch(getshoes());
    }
  }, [shoes.length, dispatch]);
  return (
    <div>
      <h2>Shoe name</h2>
      <div>
        <img src={currentShoes.image} alt="Cover Pic" />
      </div>
      <div>
        <div>{currentShoes.category}</div>
      </div>
    </div>
  );
};

export default SingleShoe;
