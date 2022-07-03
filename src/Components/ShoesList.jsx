import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getshoes } from "../Redux/AppReducer/action";
import ShoeCard from "./ShoeCard";

import { Link, useSearchParams } from "react-router-dom";

const ShoesList = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const shoes = useSelector((state) => state.AppReducer.shoes);
  useEffect(() => {
    if (shoes.length === 0) {
      const getshoesParams = {
        params: {
          category: searchParams.getAll("category"),
        },
      };
      console.log(getshoesParams);
      dispatch(getshoes(getshoesParams));
    }
  }, [shoes?.length, dispatch, searchParams]);
  console.log(shoes);

  return (
    <>
      {shoes?.map((s) => {
        console.log("data", s);
        return (
          <div key={s.id} >
            <div>
              {" "}
              <h1>{s.name}</h1>
              <div>
                <img
                  style={{ width: "200px", height: "200px" }}
                  src={s.image}
                  alt=""
                />
              </div>
              <h3>{s.category}</h3>
              <Link to={`/shoes/${s.id}`}>
                <ShoeCard Data={s} />
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ShoesList;
