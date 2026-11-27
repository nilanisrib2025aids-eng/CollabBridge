
import { Link, Outlet } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="bg-blue-900 text-white p-4">
            <h1 className="text-2xl font-bold mb-3 sm:mb-0">CollabBridge</h1>
            <Link to="/" className="justify-center gap-4">Home | </Link>
            <Link to={"/how-it-works"} className="justify-center gap-4">How It Works | </Link>
            <Link to={"/features"} className="justify-center gap-4">Features | </Link>
            <Link to="/login" className="justify-center gap-4">Login | </Link>
            <Link to="/register" className="justify-center gap-4">Register</Link>
            <Outlet/>
        </nav>
    )
}

export default Navbar
