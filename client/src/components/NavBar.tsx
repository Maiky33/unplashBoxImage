
import axios from "axios";
import { useState,useEffect } from "react";
import { useForm } from "react-hook-form";
import "./scss/navBar.scss";

import {useAuth} from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import logo from "../images/Logo.svg"

//Coneccion para escuchar y eviar los elementos



function NavBar(props:any) {

  const {isAuthenticated} = props

  const usenavigate = useNavigate()

  return (
    <div className="ContainerNav">
      <img className="LogoNav" src={logo} alt="" />


      {isAuthenticated?
        <div className="navegationElements"> 
          <div onClick={()=>{usenavigate("/")}} className="HomeItem">Home</div>
          <div onClick={()=>{usenavigate("/Collections")}} className="CollectionsItem">Collections</div>
        </div>: 
        <div className="navegationElements"> 
          <div className="AccountItem">Account</div>
        </div>
      }
    </div>
  );
}

export default NavBar;
