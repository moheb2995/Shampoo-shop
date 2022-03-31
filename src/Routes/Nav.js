import React, { useContext } from 'react'
import { Link,Outlet } from 'react-router-dom'
import { myContext } from '../context'
import { useState,useEffect } from 'react'

const Nav =()=>{
const {navlog,setnavlog} = useContext(myContext)

const [fname,setfname] = useState('')
const [lname,setlname] = useState('')
const [user,setuser] = useState('')
const [password,setpassword] = useState('')
const [email,setemail] = useState('')
const [number,setnumber] = useState('')
const [address,setaddress] = useState('')
const [data,setdata] = useState([])
const {users,setusers} = useContext(myContext)

useEffect(()=>{
  users.map(i=>{setuser(i.user); setfname(i.fname);setlname(i.lname);setpassword(i.password);setemail(i.email);setnumber(i.number);setaddress(i.address); 
})
},[])

function exit(){
setnavlog(false) 
if(data.length !== 0){
setdata([-1]);setfname('');setlname('');setuser('');setpassword('');setemail('');setnumber('');setaddress('')
}
}

return (
<div className=''>
  <nav className=' bg-slate-400'>

    <Link className='hover:bg-slate-600 px-3 pl-6 font-bold ' to={'/Home'} >Home</Link>
    <Link className='hover:bg-slate-600 px-3 font-bold ' to={'/List'}  >List</Link>
    {/*<Link className='hover:bg-slate-600 px-3 font-bold ' to={'/Shope'} >Shope</Link>
    <Link className='hover:bg-slate-600 px-3 font-bold ' to={'/Video'} >Video</Link> */}
    <Link className='hover:bg-slate-600 px-3 font-bold ' to={'/User'}  >User</Link>
    <Link className='hover:bg-slate-600 px-3 font-bold ' to={'/Login'} >Login</Link>
    <Link className='hover:bg-slate-600 px-3 font-bold ' to={'/A'} >admin</Link>
    
    <hr />
    <div className=' '>
    <div className={navlog?'block':'none'}  > {/* ? */}
      <button className='hover:bg-slate-600 px-3 pl-6 font-bold' onClick={exit}>exit</button>
      <Link to={'./Cart'}><button className='hover:bg-slate-600 px-3 font-bold' >cart</button> </Link>
      {/* <button className='hover:bg-slate-600 px-3 font-bold'>profile</button> */}
    </div>
    </div>
  </nav>
  <Outlet/>
</div>
)}
export default Nav