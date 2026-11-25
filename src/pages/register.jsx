
import { Link } from 'react-router-dom'

function Register() {
    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center p-5">
            <div className="bg-white w-full max-w-lg p-8 rounded-xl shadow-md">
                <h1 className="text-3xl font-bold text-blue-600 text-center">
                    CollabBridge
                </h1>
                <h2 className="text-2xl font-semibold text-center mt-4">
                    Create Your Account
                </h2>
                <p className="text-gray-500 text-center mt-2">
                    Join students and start collaborating.
                </p>
                <form className="mt-8 space-y-4">
                    <div>
                        <label className="block mb-2 font-medium">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name" required
                            className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 font-medium">
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email" required
                            className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 font-medium">
                            College Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your college name" required
                            className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 font-medium">
                            Department
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your department" required
                            className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 font-medium">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Create a password" required
                            className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
                    >
                        Create Account
                    </button>
                </form>
                <p className="text-center text-gray-600 mt-6">
                    Already have an account?
                    <Link to="/login" className="text-blue-600 font-semibold ml-1">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Register
