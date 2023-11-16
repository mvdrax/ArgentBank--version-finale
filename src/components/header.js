

import React from "react";
import Logo from "../assets/argentBankLogo_11zon.webp";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';



const Header = () => {

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
  
      dispatch({ type: "user/logout" });
      
  };


    return (
        <nav className="main-nav">
      <div className="main-nav-logo">
         <Link to={"/index.html"}>
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
        </Link>
      </div>
      {user.token ? (
                    <>
                    <div>
                    <Link to={"/signin/profile"}>
                    {user.userName} <span></span>
                    </Link> 
                    <Link to={"/index.html"} onClick={handleLogout} className="main-nav-item" >
                    
                    <i className="fa fa-sign-out"></i>
                    Log Out
                    </Link>
                    </div>
                    </>
                ) : (
                    <Link to={"/signin"} className="main-nav-item" >
                    <i className="fa fa-user-circle"></i>
                    Sign In
                    </Link>         
                )}
      
    </nav>
    );
};


export default Header;