import React, { useEffect, useState } from 'react'
import {  useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import {login} from '../actions/Authentication'


export default function Login() {

  const dispatch = useDispatch();

  // const {  isAuthenticated, userToken } = useSelector(state => state.auth);
  // console.log(isAuthenticated,userToken);

  const {auth} = useSelector((state)=>state);
  console.log(auth.name);

  const [ok,setok] = useState('');

  useEffect(()=>{
    setok(auth.userToken);
    dispatch(login('XYsgsgwqe124'))
  },[auth.userToken, dispatch]);

  
  return (
    <div>
      <h1>This is Login</h1>    
      {/* <p>{isAuthenticated}</p> 
      <p>{userToken}</p> */}
      <h2>this is {ok}</h2>
    </div>
  )
}
