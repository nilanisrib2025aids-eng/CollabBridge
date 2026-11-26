
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div>
            <h1>CollabBridge</h1>
            <h2>Login</h2>
            <form>
                <label>Email:</label>
                <input type="email" placeholder="Enter your email" />
                <br /><br />
                <label>Password:</label>
                <input type="password" placeholder="Enter your password" />
                <br /><br />
                <button type="submit">Login</button>
            </form>
            <p>
                Don't have an account?
                <Link to="/register"> Register</Link>
            </p>
        </div>
    )
}

export default Login
