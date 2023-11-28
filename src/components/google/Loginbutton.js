import React from 'react';

import { GoogleLogin } from 'react-google-login';


const Loginbutton = () => {
  function onSuccess(res){
    
    console.log("login success",res.profileObj)
  }
  function onFailure(){
    console.log("login failed..")
  }
    return (
      <div class="google-signin">
        
         <GoogleLogin
     
            clientId={"998779442730-ih247388dqkho21se0gn4p3jlkeiksaj.apps.googleusercontent.com"}
            buttonText="Continue with google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            
            />
      </div>
       
        // <GoogleLogin
        //     onSuccess={credentialResponse => {
        //       console.log(credentialResponse);
        //     }}
        //     onError={() => {
        //       console.log('Login Failed');
        //     }}
        //   />
    )
}

export default Loginbutton;