
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-sm">
            <h1 className="text-2xl font-bold text-blue-600">
                CollabBridge
            </h1>
            <div className="flex items-center gap-8">
                <Link to="/" className="text-gray-700 hover:text-blue-600">
                    Home
                </Link>
                <a href="#how-it-works" className="text-gray-700 hover:text-blue-600">
                    How It Works
                </a>
                <a href="#features" className="text-gray-700 hover:text-blue-600">
                    Features
                </a>
                <Link to="/login" className="text-gray-700 hover:text-blue-600">
                    Login
                </Link>
                <Link
                    to="/register"
                    className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
                >
                    Get Started
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
