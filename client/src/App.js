import React, {useState, useEffect} from "react";
import UpdateDataForm from "./pages/Update/update_form";
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import { PetifyContextProvider } from "./context/context";
import Login from "./pages/Login/Login";
import HomePage from "./pages/Home/Index";
import Register from "./pages/register/Register";
import Home from "./Users/home/home";
import HomeAfterLoggedIn from "./Users/AfterLoggedin/home/home";
import PaymentPic from "./Users/AfterLoggedin/screenshots/PaymentPic";
// 🐾
function App() {
  const[isAuthenticated, setIsAuthenticated] = useState(false);
  const[isAdmin, setIsAdmin] = useState(sessionStorage.getItem('admin') === "false" ? false : true);
  const setAuth  = (boolean) => {
    setIsAuthenticated(boolean);
  };
  const setAdmin = (boolean) => {
    setIsAdmin(boolean);
  }
  async function isAuth() {
    try{
      const response = await fetch('http://localhost:8000/auth/is-verify',{
        method: 'GET',
        headers: {token: localStorage.token}
      });

      const parseRes = await response.json();
      
      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);

    }catch(error){
      console.log(error);
    }
  };

  useEffect(()=> {
    isAuth();
  },[]);

  return (
    <PetifyContextProvider>
    <>
      <Router>

        <Routes>
            <Route 
            path='/login' 
            element ={
            !isAuthenticated  ? 
            (<Login setAuth={setAuth} setAdmin={setAdmin}/>
            ) : (
              isAdmin?
              (<Navigate to='/admin'/>): 
              (<Navigate to='/user'/>) 
            )
          }/>
      <Route path="/register" element = {<Register/>}/>
      <Route path="/" element={<Home/>}/>

      <Route 
        path='/admin' 
        element ={
        isAuthenticated && isAdmin ? 
        (
        <>
        <HomePage setAuth={setAuth}  setAdmin={setAdmin}/>
        </>
        ) : (
          <Navigate to='/login'/>
        )
      }/>

      <Route 
        path='/updatedataform/:id' 
        element ={
        isAuthenticated && isAdmin ? 
        (<UpdateDataForm setAuth={setAuth} />
        ) : (
          <Navigate to='/login'/>
        )
      }/>
    
 
      <Route 
      path="/user" 
      element={<HomeAfterLoggedIn setAuth={setAuth}/>}/>
      <Route path="/payment" element={<PaymentPic/>}/>
        </Routes>
      </Router>
    </>
    </PetifyContextProvider>
  );
}
export default App;
