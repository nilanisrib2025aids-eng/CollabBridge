
import Navbar from '../components/navbar'

function Home() {
    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />
            <section className="text-center py-28 px-6">
                <h1 className="text-5xl font-bold text-gray-800">
                    Build Projects Together,
                    <span className="text-blue-600"> Grow Together.</span>
                </h1>
                <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
                    Connect with talented students from different colleges,
                    share your project ideas and find the right teammates
                    to turn your ideas into reality.
                </p>
                <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
                    Explore Projects
                </button>
            </section>
            <section id="how-it-works" className="py-16 px-10 bg-white">
                <h2 className="text-3xl font-bold text-center text-gray-800">
                    How It Works
                </h2>
                <p className="text-center text-gray-500 mt-3">
                    Start collaborating in three simple steps.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <div className="p-6 bg-slate-50 rounded-xl shadow-sm text-center">
                        <h3 className="text-xl font-semibold text-blue-600">
                            01. Create Your Profile
                        </h3>
                        <p className="text-gray-600 mt-3">
                            Register with your college details and
                            showcase your technical skills.
                        </p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-xl shadow-sm text-center">
                        <h3 className="text-xl font-semibold text-blue-600">
                            02. Explore Projects
                        </h3>
                        <p className="text-gray-600 mt-3">
                            Discover interesting projects posted
                            by students from other colleges.
                        </p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-xl shadow-sm text-center">
                        <h3 className="text-xl font-semibold text-blue-600">
                            03. Build Your Team
                        </h3>
                        <p className="text-gray-600 mt-3">
                            Send team-up requests and start
                            collaborating with other students.
                        </p>
                    </div>
                </div>
            </section>
            <section id="features" className="py-16 px-10">
                <h2 className="text-3xl font-bold text-center text-gray-800">
                    Why CollabBridge?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-4xl mx-auto">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="font-semibold text-lg">
                            Cross-College Collaboration
                        </h3>
                        <p className="text-gray-600 mt-2">
                            Connect with students beyond your own college.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="font-semibold text-lg">
                            Skill-Based Connections
                        </h3>
                        <p className="text-gray-600 mt-2">
                            Find teammates with different technical skills.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="font-semibold text-lg">
                            Location Preferences
                        </h3>
                        <p className="text-gray-600 mt-2">
                            Discover collaboration opportunities in your preferred areas.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="font-semibold text-lg">
                            Easy Team Formation
                        </h3>
                        <p className="text-gray-600 mt-2">
                            Send requests and build project teams easily.
                        </p>
                    </div>
                </div>
            </section>
            <footer className="bg-gray-900 text-white text-center py-6">
                <p>© 2026 CollabBridge. Connecting Ideas, Creating Teams.</p>
            </footer>
        </div>
    )
}

export default Home
