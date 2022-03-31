import React from 'react'
import { Routes, Route } from "react-router-dom";
// import Video from './Routes/Video'
import List from './Routes/List'
import SList from './Routes/SList'
import Cart from './Routes/Cart'
import Home from './Routes/Home'
import Login from './Routes/Login'
import User from './Routes/User'
import Nav from './Routes/Nav'
import Factor from './Routes/Factor'

import ANav from './admin Routes/ANav'
import AHome from './admin Routes/AHome'
import AUser from './admin Routes/AUser'
// import ANav from './admin Routes/ANav'
// import ANav from './admin Routes/ANav'


const App = () => {
return (
<div>
  <Routes>
    <Route path="/" element={<Nav />}>
      <Route path="Home" element={<Home />} />
      <Route path="User" element={<User />} />
      <Route path="List" element={<List />} />
      <Route path="SList/:id" element={<SList />} />
    {/*  <Route path="Video" element={<Video />} />*/}
      <Route path="Cart" element={<Cart />} /> 
      <Route path="Login" element={<Login />} />
      <Route path="Factor" element={<Factor />} />
    </Route>

    <Route path='/A' element={<ANav/>}>
      <Route path="AHome" element={<AHome />} />
      <Route path="AUser" element={<AUser />} />

    </Route>
    
  </Routes>
</div>
)
}
export default App