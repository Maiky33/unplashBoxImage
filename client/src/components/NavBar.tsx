
import axios from "axios";
import { useState,useEffect } from "react";
import { useForm } from "react-hook-form";
import "./scss/navBar.scss";

import {useAuth} from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import logo from "../images/Logo.svg"

//Coneccion para escuchar y eviar los elementos



function NavBar() {

  let isAuthenticated = false

  return (
    <div className="ContainerNav">
      <img className="LogoNav" src={logo} alt="" />


      {isAuthenticated?
        <div className="navegationElements"> 
          <div className="HomeItem">Home</div>
          <div className="CollectionsItem">Collections</div>
        </div>: 
        <div className="navegationElements"> 
          <div className="AccountItem">Account</div>
        </div>
      }
    </div>
  );
}

export default NavBar;
