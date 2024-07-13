
import axios from "axios";
import { useState,useEffect } from "react";
import { useForm } from "react-hook-form";
import "./scss/homePage.scss";

import {useAuth} from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

//Coneccion para escuchar y eviar los elementos



function HomeApp() {

  return (
    <div className="ContainerHomeApp">   
      Collections
    </div>
  );
}

export default HomeApp;
