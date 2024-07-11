import "./scss/formRegister.scss"


function FormRegister(props:any) {

  const { 
    onSubmitSingUp,
    onSubmitSingIn,
    formState,
    OnsubmitRegister,
    Errors,
    errors,
    register
  } = props

  return (
    <div className="ContainerForm"> 
      <div className="containeButtonsRegiter"> 
        <button onClick={onSubmitSingUp} className={!formState ? "ButtonSelectedButtonSingUp" : "ButtonSingUp"} type="submit">Sing Up</button>
        <button onClick={onSubmitSingIn} className={formState? "ButtonSelectedButtonSingIn" : "ButtonSingIn"} type="submit">Sing In</button>
      </div>

      <form onSubmit={OnsubmitRegister} className="FormContain">
        { 
          Errors.map((error:any, i:number)=>(  
            <div className="ErrorPost" key={i}> 
              {error}
            </div>
          ))
        }
        {
          !formState?
          <div className="containinputText"> 
          <p className="userNameText">UserName</p>
          <input placeholder="Enter your Name" className="usernameInput" type="text" {...register('userName', {required:true})}/>
          {
            errors.userName && <p className="errorData">UserName is Required</p>
          }
          </div>:null
        }


        <div className="containinputText"> 
          <p className="userNameText">E-mail</p>
          <input placeholder="Enter your Email" className="emailInput" type="email" {...register('email', {required:true})}/>
          {
            errors.email && <p className="errorData">Email is Required</p>
          }
        </div>

        <div className="containinputText"> 
          <p className="userNameText">Password</p>
          <input placeholder=". . . . . ." className="passwordInput" type="password" {...register('password', {required:true})}/>
          {
            errors.password && <p className="errorData">Password is Required</p>
          }
        </div>

        <button className="ButtonSingUpSend" type="submit">  
          {!formState? 'Sing Up' : 'Sing In'}
        </button>
      </form>
    </div>
  );
}

export default FormRegister;
