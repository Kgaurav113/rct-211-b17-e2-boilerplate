import React from "react";
import {useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checklogin } from "../Redux/AuthReducer/action";
import { LOGIN_SUCCESS } from "../Redux/AuthReducer/actionTypes";


const Login = (e) => {
  const [email,SetEmailid]=useState("");
  const [password,setPass]=useState("");
  const dispatch=useDispatch();
  const Navigate=useNavigate();
  const handlecomplete=(e)=>{
    e.preventDefault();
    if(email && password )
    {
      dispatch(checklogin(email,password)).then((r)=>{
        if(r.type===LOGIN_SUCCESS){
          Navigate("/shoes")
        }
      })
    }
  }

  return (
    <div>
      <h2>LOGIN</h2>
      <form>
        <div>
          <label>User Email</label>
          <br />
          <input data-cy="login-email" value={email} onChange={(e)=>SetEmailid(e.target.value)} />
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input data-cy="login-password" value={password} onChange={(e)=>setPass(e.target.value)}/>
        </div>
        <button type="submit" data-cy="login-submit" onSubmit={handlecomplete}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
