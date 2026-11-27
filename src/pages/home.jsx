
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/navbar'

function Home() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div style={{ textAlign: 'center', padding: '50px' }}>
                <h1 className="text-3xl sm:text-5xl font-bold text-blue-900 mb-5">Build Projects Together, Grow Together.</h1>
                <p className="text-gray-700 text-base sm:text-lg mb-6">
                    Connect with students from different colleges.
                    Share your project ideas and find your teammates.
                </p>
                <Link to={"/register"} className="inline-block bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-green-900">Get Started</Link>
            </div>
            <div>
                <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">How It Works</h2>
                <h3 className="bg-white p-6 rounded-xl shadow-md text-center text-xl font-bold text-blue-800 mb-3">1. Create Your Profile</h3>
                <h3 className="bg-white p-6 rounded-xl shadow-md text-center text-xl font-bold text-blue-800 mb-3">2. Explore Projects</h3>
                <h3 className="bg-white p-6 rounded-xl shadow-md text-center text-xl font-bold text-blue-800 mb-3">3. Build Your Team</h3>
            </div>
            <div>
                <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Our Features</h2>
                <p className="bg-white p-6 rounded-xl shadow-md text-center text-xl font-bold text-blue-800 mb-3">Cross College Collaboration</p>
                <p className="bg-white p-6 rounded-xl shadow-md text-center text-xl font-bold text-blue-800 mb-3">Project Sharing</p>
                <p className="bg-white p-6 rounded-xl shadow-md text-center text-xl font-bold text-blue-800 mb-3">Team Formation</p>
                <p className="bg-white p-6 rounded-xl shadow-md text-center text-xl font-bold text-blue-800 mb-3">Preferred Location Selection</p>
            </div>
            <footer className="bg-blue-900 text-white text-center p-5">
                <p>CollabBridge - Connecting Ideas, Creating Teams</p>
            </footer>
        </div>
    )
}

export default Home
