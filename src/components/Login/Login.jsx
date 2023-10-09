import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Header/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Hooks/AuthProvider";
import toast from "react-hot-toast";


const Login = () => {

    const {googleSign,signIn} =useContext(AuthContext)
    const navigate= useNavigate()
    const location = useLocation()
    console.log(location)
   

    const handleGoogle =() =>{
        googleSign()
        .then(result =>{
            console.log(result.user)
        })
    }

   

    const handleLogin = e =>{
        e.preventDefault()
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email,password)
          

       
        signIn(email,password)
        .then(result =>{
            toast.success('Your account logged in successfully');
            navigate(location?.state?location.state: '/')
        })
        .catch(error => {
           
              toast.error('Invalid email or password')
            
        })
        if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password)){
          
            toast.error ('Minimum six characters, at least capital letter and special character')
            return;
           
        }
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="lg:text-4xl text-xl font-bold">Login Your Account.</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
          <h2 className="text-center text-gray-400">Or</h2>
          <button onClick={handleGoogle} className="btn btn-primary">Sign in Google</button>
        </div>
        
        
        <p className="text-center ">Do not have a account? <Link className="text-red-600 underline" to="/register">Register</Link></p>
      </form>
    
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;