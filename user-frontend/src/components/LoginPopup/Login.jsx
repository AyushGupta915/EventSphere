import {useState} from 'react'
import './Login.css'
import { assets } from '../../assets/assets'

const Login = ({setShowLogin}) => {
    const [currState, setCurrState] = useState("Sign in")

  return (
    <div className="login">
        <form className="login-container">
            <div className="login-title">
                <h2>{currState}</h2>
                <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-inputs">
                {currState!=="Sign in"?<input type="text" placeholder="Your Name" required/> : <></>}<br />
                <input type="text" placeholder="Your Email" required /><br />
                <input type="password" placeholder="Password" required />
            </div>
            <div className="login-footer">
                <input type="checkbox" required />
                <p>By signing in, you agree to our <span>Terms & Conditions</span> and <span>Privacy Policy</span></p>
            </div>
            <div className="btn">
                {currState}
            </div>
            {
                currState === "Sign in" ?
                <p>New Here?  <span onClick={()=> setCurrState("Sign up")}>Click Here</span></p> 
                : <p>Already have an account?  <span onClick={() => setCurrState("Sign in")}>Log in Here</span></p>
            }
        </form>
    </div>
  )
}

export default Login