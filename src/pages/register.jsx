
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
        navigate("/")
    }
    return (
        <div>
            <h1>CollabBridge</h1>
            <h2>Create Your Account</h2>
            <form onSubmit={handleSubmit(onSubmit1)}>

                <label>Name:</label>
                <input type="text" placeholder="Enter your name" {...register("name")}/>
                <br /><br />
                <p>{errors.name?.message}</p>

                <label>Email:</label>
                <input type="email" placeholder="Enter your email" {...register("email")}/>
                <br /><br />
                <p>{errors.email?.message}</p>

                <label>College Name:</label>
                <input type="text" placeholder="Enter your college" {...register("college")}/>
                <br /><br />
                <p>{errors.college?.message}</p>

                <label>Department:</label>
                <input type="text" placeholder="Enter your department" {...register("department")}/>
                <br /><br />
                <p>{errors.department?.message}</p>

                <label>Preferred Area:</label>
                <input type="text" placeholder="Enter preferred area" {...register("preferredArea")}/>
                <br /><br />
                <p>{errors.preferredArea?.message}</p>

                <label>Password:</label>
                <input type="password" placeholder="Create password" {...register("password")}/>
                <br /><br />
                <p>{errors.password?.message}</p>

                <button type="submit">Register</button>
            </form>
            <p>
                Already have an account?
                <Link to="/login"> Login</Link>
            </p>
        </div>
    )
}

export default Register
