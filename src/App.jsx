
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/home'
import Register from './pages/register'
import Login from './pages/login'
import HoeItWorks from './pages/howitworks'
import CollabFeatures from './pages/features'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/how-it-works" element={<HoeItWorks/>}/>
            <Route path="/features" element={<CollabFeatures/>}/>
        </Routes>
        
    )
}

export default App
