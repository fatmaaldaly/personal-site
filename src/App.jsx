import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Projects from './pages/projects'
import './style.css'


export default function App() {
  
  return (
    <Routes>
  
      <Route path="/" element={<Home />} />
      <Route path="projects" element={<Projects />} />
   
    </Routes>
    
  )
}


