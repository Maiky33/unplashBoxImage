
import axios from "axios";
import { useState,useEffect } from "react";
import { useForm } from "react-hook-form";
import "./scss/registerPage.scss";

import {useAuth} from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import heroLeft from "../images/hero-left.png"
import heroRight from "../images/hero-right.png"
import FormRegister from "../components/FormRegister"


function RegisterPage() {

  const {register,handleSubmit,formState:{errors}} = useForm()
  const {SingUp,SingIn,isAuthenticated,Errors,reloginverifyToken}:any = useAuth()

  const [formState, setformState] = useState(true)



  const navigate = useNavigate()

  
  const OnsubmitRegister = handleSubmit(async(values) =>{  
    if(formState){
      SingIn(values)
    }else{
      SingUp(values)
    }
  })

  const onSubmitSingUp =()=>{ 
    setformState(false)
  }
  const onSubmitSingIn =()=>{ 
    setformState(true)
  }

  

  useEffect(()=>{ 
    reloginverifyToken()
  },[])

  useEffect(()=>{ 
    if(isAuthenticated){  
      navigate('/HomeApp')
    }
  },[isAuthenticated])

  return (
    <div className="ContainerRegister">   
      <NavBar/>  
      <div className="ContainerContentApp"> 
        <img className="heroBanner-left" src={heroLeft} alt="" />
        {
          !isAuthenticated?<FormRegister 
            onSubmitSingUp={onSubmitSingUp}
            onSubmitSingIn={onSubmitSingIn}
            formState={formState}
            OnsubmitRegister={OnsubmitRegister}
            Errors={Errors}
            errors={errors}
            register={register}
          />:null
        }

        <img className="heroBanner-right" src={heroRight} alt="" />
      </div>
    </div>
  );
}

export default RegisterPage;
