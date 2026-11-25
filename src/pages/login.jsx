
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center p-5">
            <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-md">
                <h1 className="text-3xl font-bold text-blue-600 text-center">
                    CollabBridge
                </h1>
                <h2 className="text-2xl font-semibold text-center mt-4">
                    Welcome Back!
                </h2>
                <p className="text-gray-500 text-center mt-2">
                    Login to continue your collaboration journey.
                </p>
                <form className="mt-8 space-y-5">
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
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password" required
                            className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
                    >
                        Login
                    </button>
                </form>
                <p className="text-center text-gray-600 mt-6">
                    Don't have an account?
                    <Link to="/register" className="text-blue-600 font-semibold ml-1">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Login
