
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav style={{ padding: '15px', backgroundColor: 'lightblue' }}>
            <h1>CollabBridge</h1>
            <Link to="/">Home</Link> {' | '}
            <a href="#how-it-works">How It Works</a> {' | '}
            <a href="#features">Features</a> {' | '}
            <Link to="/login">Login</Link> {' | '}
            <Link to="/register">Register</Link>
        </nav>
    )
}

export default Navbar
