import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import ViewContact from './pages/ViewContact'
import AddContact from './pages/AddContact'



const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Contact />} />
          <Route path="/view" element={<ViewContact />} />
          <Route path="/add" element={<AddContact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
