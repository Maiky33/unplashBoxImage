
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
import SearchComponent from "../components/SearchComponent";
import Gradiend from "../images/gradiend-bg@2x.png"


function RegisterPage() {

  const {register,handleSubmit,formState:{errors}} = useForm()
  const {SingUp,SingIn,isAuthenticated,Errors,reloginverifyToken}:any = useAuth()

  const [formState, setformState] = useState(true)
  const [inputValue, setinputValue] = useState();


  
  // const navigate = useNavigate()

  
  const OnsubmitRegister = handleSubmit(async(values) =>{  
    if(formState){
      SingIn(values)
    }else{
      SingUp(values)
    }
  })

  const onSubmitSingUporSingIn =()=>{ 
    setformState(!formState)
  }

  

  useEffect(()=>{ 
    reloginverifyToken()
  },[])

  // useEffect(()=>{ 
  //   if(isAuthenticated){  
  //     navigate('/HomeApp')
  //   }
  // },[isAuthenticated])

  return (
    <div className="ContainerRegister">   
      <NavBar isAuthenticated={isAuthenticated}/> 
      
      {inputValue && inputValue !== "" ?<img src={Gradiend} draggable={false} className="headerSearchActive" />:null}
      

      <div className={!inputValue || inputValue === "" ? "ContainerContentApp" : "ContainerContentAppSearchActive"}> 
        {!inputValue || inputValue === "" ?
          <img className="heroBanner-left" src={heroLeft} alt="" />
          :null
        }
        <div className="formRegisterandSearchComponent"> 
          {
            !isAuthenticated?<FormRegister 
              onSubmitSingUporSingIn={onSubmitSingUporSingIn}
              formState={formState}
              OnsubmitRegister={OnsubmitRegister}
              Errors={Errors}
              errors={errors}
              register={register}
            />:
            <SearchComponent inputValue={inputValue} setinputValue={setinputValue} />
          }
        </div>
        {!inputValue || inputValue === "" ?
          <img className="heroBanner-right" src={heroRight} alt="" />
          :null
        }
      </div>
    </div>
  );
}

export default RegisterPage;
