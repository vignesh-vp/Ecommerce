import React, { useState } from 'react'
import "./css/style.css"
import LoginButton from '../google/Loginbutton';




const Signup = () => {

 
//     let googleimg=require('./images/icon-google.png');
// let faceimg=require('./images/icons8-facebook-48.png');

const [name,changename]=useState('');
const [email,changeemail]=useState("");
const [password,changepassword]=useState("");
const [repeatpass,changerepeatpass]=useState("");
const[ validatepass,changevalidatepass]=useState(true);
const [mailexit,changemailexit]=useState(false);

const [savedstatus,changesavestatus]=useState(false);


    let signup=require("./images/signup-image.jpg")


    const namechangehandler=function(e){
        changename(e.target.value);
    }
    const emailchangehandler=function(e){
        changeemail(e.target.value);
    }
    const passwordchangehandler=function(e){
        changepassword(e.target.value);
    }

    const repeatpasschangehandler=function(e){
        changerepeatpass(e.target.value);
    }
 
const handleSubmit = async (e) => {
    
   
        fetch('http://localhost:3050/userdata').then((response)=>{
            return response.json();
           }).then((data)=>{
            data.forEach((item) => {
              
                const user=data.find((item)=>{
                    
                    return item.name==name;
                })
                

                if(user==undefined){
                    console.log(false);
                    // changemailexit(false)
                }else if(user){
                    console.log(true);
                    // changemailexit(true)
                }
            });
               
           });
           if(password!==repeatpass ){
            changevalidatepass(false)
             return 
        }
          
           if(mailexit!==true){
            changemailexit(false)
              return
           }

          
   

    changevalidatepass(true);
    changemailexit(true);
    e.preventDefault();
  
    try {
      const apiUrl = 'http://localhost:3050/userdata'; // Replace with your API URL

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name:name,email:email,password:password}),
      });

      const responseData = await response.json();
  
      changesavestatus(true);
    } catch (error) {
      console.error('Error posting data:', error);
    }

 

}

    
  return (
    <div class="main">
    <section class="signup">
        <div class="container">
            <div class="signup-content">
                <div class="signup-form">
                    <h2 class="form-title">Sign up</h2>
                    {/* <form method="POST" class="register-form" id="register-form"> */}
                        <div class="form-group">
                            <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                            <input type="text" name="name" id="name" placeholder="Your Name" value={name} onChange={namechangehandler}/>
                        </div>
                        <div class="form-group">
                            <label for="email"><i class="zmdi zmdi-email"></i></label>
                            <input type="email" name="email" id="email" placeholder="Your Email" value={email} onChange={emailchangehandler}/>
                        </div>
                        <div class="form-group">
                            <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                            <input type="password" name="pass" id="pass" placeholder="Password" value={password} onChange={passwordchangehandler}/>
                         
                        </div>
                        <div class="form-group">
                            <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                            <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" value={repeatpass} onChange={repeatpasschangehandler}/>
                        </div>
                        <div class="form-group">
                            <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                            <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="sh" class="term-service">Terms of service</a></label>
                        </div>

                        <div>
                        <div class="form-group form-button" onClick={handleSubmit}>
                            <input type="submit" name="signup" id="signup" class="form-submit" value="Register"/>
                        </div>
                        {mailexit ? " already mail id registered .. try to login":" "}
                        {validatepass ? '' : <p>check your passwords are same</p>}  

                        {savedstatus ?  <div class="status">Account created successfully...</div> :' '}  
                        
                        <LoginButton/>
                
                        </div>
                       
                    {/* </form> */}
                </div>
                <div class="signup-image">
                    <figure><img src={signup} alt="" /></figure>
                    <a href="/" class="signup-image-link">I am already member</a>
                </div>
            </div>
        </div>
    </section>

</div>

  )
}

export default Signup;