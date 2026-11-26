
import Navbar from '../components/navbar'

function Home() {
    return (
        <div>
            <Navbar />
            <div style={{ textAlign: 'center', padding: '50px' }}>
                <h1>Build Projects Together, Grow Together.</h1>
                <p>
                    Connect with students from different colleges.
                    Share your project ideas and find your teammates.
                </p>
                <a href="/register">Get Started</a>
            </div>
            <div id="how-it-works">
                <h2>How It Works</h2>
                <h3>1. Create Your Profile</h3>
                <p>Register and enter your college details.</p>
                <h3>2. Explore Projects</h3>
                <p>View projects posted by other college students.</p>
                <h3>3. Build Your Team</h3>
                <p>Send requests and connect with other students.</p>
            </div>
            <div id="features">
                <h2>Our Features</h2>
                <p>Cross College Collaboration</p>
                <p>Project Sharing</p>
                <p>Team Formation</p>
                <p>Preferred Location Selection</p>
            </div>
            <footer>
                <p>CollabBridge - Connecting Ideas, Creating Teams</p>
            </footer>
        </div>
    )
}

export default Home
