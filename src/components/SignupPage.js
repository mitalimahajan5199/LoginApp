import React, { useState } from "react";
import fire from "../auth/FireBaseAuth";
import { useNavigate } from 'react-router-dom';
import '../Styles/LoginPage.css';
import '../Styles/SignUp.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [error, setError] = useState("")

  const navigate = useNavigate();
  const redirect = () => {
      navigate('/', { replace: true });
  }

  const  handleSubmit = (event) =>{
    event.preventDefault()
    console.log(email,password,username);
    // Firebase

    let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let pass = /(?=.*\d.*)(?=.*[a-zA-Z].*)(?=.*[!#\$%&\?].*).{8,}/;
    if (email) {
      if (username){
        if (password) {
          if (res.test(email)) {
            if (password === confirmpassword) {
              if (pass.test(password)) {
              console.log(email, password);
              fire.auth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                  setTimeout(() => {
                    navigate('/dashboard', { replace: true })
                  }, 3000);
                  toast("User Created !!!");
                }).catch((e) => {
                  console.log('password not acceptable');
                  toast("Error Occured or user not created")
                  return false;
                })
            }else{
              setError('Password should contain 1 lower case, 1 upper case, 1 special symbol, 1 digit and 8 minimum character');
            }
          }
            else {
              setError('Password should be same');
            }
          }
          else {
            setError('Enter Valid Email ID');
          }
        } else {
          setError("Enter Password as it is mandatory")
        }
      }else{
        setError("Enter UserName as it is mandatory")
      }
    } else {
      setError("Enter Email ID as it is mandatory")
    }

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div className='EntireScreen'>
      <ToastContainer />
          <div className='MiddleScreensignup'>
            <div className='ContentPartsignup'>
            <div className='HeadingText'>ADMIN Sign Up</div>
            <div className='InputDiv InputFontStyle'>
                <span>E-mail Address</span>
                <input
                  type="email"
                  placeholder='Enter Email Id'
                  className="form-control InputType"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(ev) => setEmail(ev.target.value)}
                />
              </div>
            <div className='InputDiv InputFontStyle'>
                <span>Username</span>
                <input
            type="text"
            placeholder='Enter UserName'
            className="form-control InputType"
            aria-describedby="emailHelp"
            onChange={(ev)=>setUsername(ev.target.value)}
          />
            </div>
            <div className='InputDiv InputFontStyle'>
                <span >Password</span>
                <input type='password'
                placeholder='Enter Password'
                className="form-control InputType"
                id="exampleInputPassword1"
                onChange={(ev)=>setPassword(ev.target.value)}
                />             
            </div> 
            <div className='InputDiv InputFontStyle'>
                <span>Confirm Password</span>
                <input type='password'
                 className='InputType form-control '
                placeholder='Enter Password'
                onChange={(ev)=>setConfirmpassword(ev.target.value)}
                />
            </div> 
            <div className='LoginButtonDiv'>
                <button type="submit" className='LoginButton'>SIGN UP</button>
            </div>
            <div className='Signup' onClick={redirect}>Have Account? Login</div>
            <div className='errorMessageSugnup'>{error}</div>
            </div>
          </ div>
      </div>
      </form>
    </div>
  );
}
