
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { registerschema } from '../schemas/registerschema'

function Register() {
    const navigate=useNavigate();
    const{register,handleSubmit,formState:{errors}}=useForm({
        resolver:zodResolver(registerschema)
    })
    function onSubmit1(data){
        console.log(data)
        alert("Registration Successful")
        navigate("/login",{state:data})
    }
    return (
        <div className="h-screen bg-blue-100 flex justify-center items-center p-4">
            <form onSubmit={handleSubmit(onSubmit1)} className="bg-white p-6 rounded-2xl shadow-2xl shadow-blue-900 w-full max-w-sm">
                <h1 className="text-3xl font-bold text-blue-900 text-center mb-4">CollabBridge</h1>
                <h2 className="text-2xl font-bold text-black-800 text-center mb-6">Create Your Account</h2>
                
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                <input type="text" placeholder="Enter your name" {...register("name")} className="text-gray-700 border gray rounded-md w-full font-medium mb"/>
                <br /><br />
                <p className="text-red-500 text-sm mb">{errors.name?.message}</p>

                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input type="email" placeholder="Enter your email" {...register("email")} className="text-gray-700 border gray rounded-md w-full font-medium mb"/>
                <br /><br />
                <p className="text-red-500 text-sm mb">{errors.email?.message}</p>

                <label htmlFor="college name" className="block text-gray-700 font-medium mb-2">College Name</label>
                <input type="text" placeholder="Enter your college" {...register("college")} className="text-gray-700 border gray rounded-md w-full font-medium mb"/>
                <br /><br />
                <p className="text-red-500 text-sm mb">{errors.college?.message}</p>

                <label  htmlFor="email" className="block text-gray-700 font-medium mb-2">Department</label>
                <input type="text" placeholder="Enter your department" {...register("department")} className="text-gray-700 border gray rounded-md w-full font-medium mb"/>
                <br /><br />
                <p className="text-red-500 text-sm mb">{errors.department?.message}</p>

                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Preferred Area</label>
                <input type="text" placeholder="Enter preferred area" {...register("preferredArea")} className="text-gray-700 border gray rounded-md w-full font-medium mb"/>
                <br /><br />
                <p className="text-red-500 text-sm mb">{errors.preferredArea?.message}</p>

                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Password</label>
                <input type="password" placeholder="Create password" {...register("password")} className="text-gray-700 border gray rounded-md w-full font-medium mb"/>
                <br /><br />
                <p className="text-red-500 text-sm mb">{errors.password?.message}</p>

                <button type="submit" className="w-full bg-blue-700 font-bold text-white p-3 rounded-2xl hover:bg-blue-900">Register</button>
                <p className="text-center text-gray-600 mt-5">
                    Already have an account?
                    <Link to="/login" className="text-blue-700 font-semibold hover:text-blue-900"> Login</Link>
                </p>
            </form>
            
        </div>
    )
}

export default Register
