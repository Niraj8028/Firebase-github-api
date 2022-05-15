import React, { useState, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.min.css'
import { ToastContainer } from "react-toastify"

import firebase from "firebase/app"
import 'firebase/auth'

import Home from './Pages/Home'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import PageNotFound from './Pages/PageNotFound'
import { UserContext } from './Context/UserContext'
import Footer from './Layout/Footer'



const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
      
      <Routes>     
        <Route path="/" element={<Home/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      
      <Footer/>
    
      
      </UserContext.Provider>
    </Router>
  )
}

export default App