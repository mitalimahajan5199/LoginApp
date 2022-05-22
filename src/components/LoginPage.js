import React, { useState } from "react";
import fire from '../auth/FireBaseAuth'
import { useNavigate } from 'react-router-dom';
import '../Styles/LoginPage.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate();
  const redirect = () => {
    console.log("feewfwe")
    navigate('/signup', { replace: true });
  }

  // firebase 
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(email, password);

    let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if (email) {
      if (password) {
        if (res.test(email)) {
          console.log(email, password);
          fire.auth().signInWithEmailAndPassword(email, password).then(() => {
            toast("Login Successful !!!");
            sessionStorage.setItem('user', email);
            navigate('/dashboard', { replace: true })
          }).catch((error) => {
            toast("User Doesnt Exist !!!");
            return false;
          })
        } else {
          setError('Enter Valid Email ID');
        }
      } else {
        setError("Enter Password as it is mandatory")
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
          <div className='MiddleScreen'>

            <div className='ContentPart'>
              <div className='HeadingText'>ADMIN Login</div>
              <div className='InputDiv InputFontStyle'>
                <span>E-mail Address</span>
                <input
                  type="email"
                  onChange={(ev) => setEmail(ev.target.value)}
                  className='form-control InputType'
                  placeholder='Enter Email Id'
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className='InputDiv InputFontStyle'>
                <span >Password</span>
                <input
                  type="password"
                  className="form-control InputType"
                  id="exampleInputPassword1"
                  onChange={(ev) => setPassword(ev.target.value)}
                  placeholder='Enter Password'
                />
              </div>
              <div className='InputDivRow'>
                <input type='checkbox' className='CheckBox' /><span className='RememberSpan InputFontStyle'>Remember Me</span>
                <div className='EmptyDiv'></div>
                <span className='ForgetPass'>
                  Forgot Your Password?
                </span>
              </div>
              <div className='LoginButtonDiv'>
                <button type="submit" className="LoginButton">
                  LOGIN
                </button>

              </div>
              <div className='Signup' onClick={redirect}>If you don't have an Account? SignUp</div>
              <div className='errorMessage'>{error}</div>
            </div>

          </ div>
        </div>
      </form>
    </div>
  );
}
