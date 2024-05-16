import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Dashboard } from './Pages/Dashboard'
import { SignUp } from './Pages/SignUp'

import { About } from './Pages/About'
import { Signin } from './Pages/Signin'

 const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/sign-in" element={<Signin />} />
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="/dashboard" element={<Dashboard />} />
   </Routes>
   </BrowserRouter>
  )
}
export default App;
