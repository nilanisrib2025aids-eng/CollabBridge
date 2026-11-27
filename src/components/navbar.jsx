
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <h1>CollabBridge</h1>
            <Link to="/">Home | </Link>
            <Link to={"/how it works"}>How It Works | </Link>
            <Link to={"/features"}>Features | </Link>
            <Link to="/login">Login | </Link>
            <Link to="/register">Register</Link>
        </nav>
    )
}

export default Navbar
