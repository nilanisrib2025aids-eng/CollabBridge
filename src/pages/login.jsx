
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function Login() {
    const location=useLocation();
    const [logindata,setLogindata]=useState({
        name:" ",
        email:" ",
        password:" "
    })
    const navigate=useNavigate();
    function handlechange(e){
        e.preventDefault();
        setLogindata({
            ...logindata,
            [e.target.name]:e.target.value
        })
    }
    const formsubmit=(e)=>{
        const registerdata=location.state
        e.preventDefault();
        console.log("Login Data",logindata)
        console.log("Register Data",registerdata)
        if(registerdata && logindata.email===registerdata.email && logindata.password===registerdata.password){
            console.log("Login Success")
            navigate("/",{state:logindata})
        }
        else{
            console.log("Login Failed")
        }
    }
    return (
        <div className="h-screen bg-blue-100 flex justify-center items-center p-4">
            <form onSubmit={formsubmit} className="bg-white p-6 rounded-2xl shadow-2xl shadow-blue-900 w-full max-w-sm">
                <h1 className="text-3xl font-bold text-blue-900 text-center mb-4">CollabBridge</h1>
                <h2 className="text-2xl font-bold text-black-800 text-center mb-6">Login</h2>

                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input type="email" placeholder="Enter your email" required name="email" onChange={handlechange} className="text-gray-700 border gray rounded-md w-full font-medium mb"/>
                <br /><br />

                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                <input type="password" placeholder="Enter your password" required name="password" onChange={handlechange} className="text-gray-700 border gray rounded-md w-full font-medium mb"/>
                <br /><br />
                <button type="submit" className="w-full bg-blue-700 font-bold text-white p-3 rounded-2xl hover:bg-blue-900">Login</button>

                <p className="text-center text-gray-600 mt-5">
                    Don't have an account?
                    <Link to="/register" className="text-blue-700 font-semibold hover:text-blue-900"> Register</Link>
                </p>
            </form>
            
        </div>
    )
}

export default Login
