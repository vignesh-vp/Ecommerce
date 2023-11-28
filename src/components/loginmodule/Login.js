import React, { useEffect, useState } from 'react'
 import "./css/main.css";
 import "./css/util.css";
 import { useNavigate } from 'react-router-dom';
 import { GoogleOAuthProvider } from '@react-oauth/google';
import { gapi } from 'gapi-script';
import LoginButton from "../google/Loginbutton";
import { GoogleLogin } from '@react-oauth/google';

const Login = () => {
    const navigate = useNavigate();
   const [name,changename]=useState('');
   const [password,changepassword]=useState('');
   const [loginstatus,changeloginstatus]=useState('');
    let googleimg=require('./images/icons/icon-google.png');
//   let faceimg=require('./images/icons/icons8-facebook-48.png');


  useEffect(()=>{
    function start(){
        gapi.client.init({
            clientId:"998779442730-ih247388dqkho21se0gn4p3jlkeiksaj.apps.googleusercontent.com",
            scope:""
        })
    };
    gapi.load('client:auth2',start);
  })

const namechangeHandler=function(e){
    e.preventDefault();
    changename(e.target.value);

}

const passwordchangeHandler=function(e){
    e.preventDefault();
    changepassword(e.target.value);

}
  const getData=function(){
       fetch('http://localhost:3050/userdata').then((response)=>{
    return response.json();
   }).then((data)=>{
   

    data.forEach((item) => {
        const user=data.find((item)=>{
            
            return item.name===name && item.password==password;
        })
        
        if(user){
            
           changeloginstatus(true);
           navigate('/Home');
        }else{
            changeloginstatus(false);
        }
    });
    
   });
  }
  return (
    <div>
       <div class="limiter">
       {/* <div class="container-login100" style="background-image: url('images/bg-01.jpg');"> */}
    <div class="container-login100">
        <div class="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
            {/* <form class="login100-form validate-form flex-sb flex-w"> */}
                <span class="login100-form-title p-b-53">
                    Sign In With
                </span>

                {/* <a href="test" class="btn-face m-b-20">
                <img src={faceimg} alt="facebook image" />
                    Facebook
                </a> */}

<LoginButton/>
                <GoogleOAuthProvider>
                {/* <GoogleLogin></GoogleLogin> */}
                </GoogleOAuthProvider>
               
                {/* <a href="an" class="btn-google m-b-20">
                {/* <img src={googleimg} alt="sing up image" />
                    Google
                </a>
                 */}
                <div class="p-t-31 p-b-9">
                    <span class="txt1">
                        Username
                    </span>
                </div>
                <div class="wrap-input100 validate-input" data-validate = "Username is required">
                    <input class="input100" type="text" name="username" value={name} onChange={namechangeHandler}/>
                    <span class="focus-input100"></span>
                </div>
                
                <div class="p-t-13 p-b-9">
                    <span class="txt1">
                        Password
                    </span>

                    <a href="test" class="txt2 bo1 m-l-5">
                        Forgot?
                    </a>
                </div>
                <div class="wrap-input100 validate-input" data-validate = "Password is required">
                    <input class="input100" type="password" name="pass" value={password} onChange={passwordchangeHandler}/>
                    <span class="focus-input100"></span>
                </div>

                <div class="container-login100-form-btn m-t-17"  onClick={getData}>
                    <button class="login100-form-btn">
                        Sign In
                    </button>
                </div>


                {loginstatus ? 'Login success':' '}
                <div class="w-full text-center p-t-55">
                    <span class="txt2">
                        Not a member?
                    </span>

                    <a href="signup" class="txt2 bo1">
                        Sign up now
                    </a>
                </div>
            {/* </form> */}
        </div>
    </div>
</div>

<div id="dropDownSelect1"></div>
    </div>
    




  )
}

export default Login