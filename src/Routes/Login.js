import React, { useContext, useState } from 'react'
import { myContext } from '../context'
import { Link } from 'react-router-dom'

const Login = () => {
const [log,setlog] =useState(true)
const {inName,setinName} = useContext(myContext)
const [inpass,setinpass] = useState('')

const [fname,setfname] = useState('')
const [lname,setlname] = useState('')
const [user,setuser] = useState('')
const [password,setpassword] = useState('')
const [email,setemail] = useState('')
const [number,setnumber] = useState('')
const [address,setaddress] = useState('')

const {navlog,setnavlog} = useContext(myContext)
const {users,setusers} = useContext(myContext)

const UID = () => `${new Date().getTime()}${String(Math.random()).slice(3, 9)}`

function add (){
  if(fname=='' || lname=='' || user=='' || password=='' || email=='' || address=='' || number == '')return alert('compelet inputs')
  const obj = {fname,lname,user,password,email,number,address,id: UID(),cart:[]}
  setuser(users.push(obj))
  setfname('');setlname('');setuser('');setpassword('');setemail('');setnumber('');setaddress('');setlog(true)
}

return (
<div className='  '>
  {
  log ? 
    <div className='bg-slate-400 w-[70vw] m-24 text-center'>
    <h1 className='p-3 text-xl'>pleace enter username and password</h1>
    <div className=''>
      <h4 className='p-1'>username:</h4>
      <input className='p-1' onChange={e=>setinName(e.target.value)} value={inName} />
      <h4 className='p-1'>password:</h4>
      <input className='p-1' onChange={e=>setinpass(e.target.value)} value={inpass} />
      <br />
      <div className="flex justify-between ">
        <button className='p-2 m-1 hover:bg-slate-600 ' onClick={()=>setlog(false)}>Register</button>
        <Link to='/User' ><button className='p-2 m-1 hover:bg-slate-600 '>login</button></Link>
      </div>
    </div>
    </div> 
  :
  <div className='w-[92vw] bg-slate-400 m-4 p-3  '>
    <h2 className="text-center text-xl"><i>Register</i></h2>
    <div className="">
      <h4 className='p-1  '>fname:</h4> 
      <input className='p-1' value={fname} onChange={e=>setfname(e.target.value)} />
      <h4 className='p-1'>lname:</h4> 
      <input className='p-1' value={lname} onChange={e=>setlname(e.target.value)} />
      <h4 className='p-1'>user name:</h4> 
      <input className='p-1' value={user} onChange={e=>setuser(e.target.value)} />
      <h4 className='p-1'>password:</h4> 
      <input className='p-1' value={password} onChange={e=>setpassword(e.target.value)} />
      <h4 className='p-1'>email:</h4> 
      <input className='p-1' value={email} onChange={e=>setemail(e.target.value)} />
      <h4 className='p-1'>number:</h4> 
      <input className='p-1' value={number} onChange={e=>setnumber(e.target.value)} />
      <h4 className='p-1'>address:</h4> 
      <input className='p-1' value={address} onChange={e=>setaddress(e.target.value)} />
    </div>
    <br /><br />
    <div className="flex justify-between">
      <button className='px-2 p-2 hover:bg-slate-600' onClick={add}>add</button>
      <button className='px-1 p-2 hover:bg-slate-600' onClick={()=>setlog(true)}>back</button>
    </div>
  </div>
  }
</div>
)}
export default Login