import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'

const ANav = () => {


return(
<div>
  <nav>
  <Link className='' to={'AHome'}>Home</Link>
  
  <Link className='' to={'AUser'}>User</Link>
  {/* <Link to={''}></Link>
  <Link to={''}></Link>
  <Link to={''}></Link> */}
  <Link className='' to={'/'}></Link>
  </nav>
  <Outlet/>
</div>
)}
export default ANav