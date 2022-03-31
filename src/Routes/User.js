import React, { useContext, useEffect, useState } from 'react'
import { myContext } from '../context'

const User = () => {
const {users,setusers} = useContext(myContext)
const {inName,setinName} = useContext(myContext)

const [fname,setfname] = useState('')
const [lname,setlname] = useState('')
const [user,setuser] = useState('')
const [password,setpassword] = useState('')
const [email,setemail] = useState('')
const [number,setnumber] = useState('')
const [address,setaddress] = useState('')
const [data,setdata] = useState([])
const [read,setread] = useState(true)

useEffect(()=>{
  users.map(i=>{setuser(i.user); setfname(i.fname);setlname(i.lname);setpassword(i.password);setemail(i.email);setnumber(i.number);setaddress(i.address); 
  const dataa = users.filter(i=>i.user === inName)
  setdata(dataa)
})
},[])
if(data.length == 0){
setdata([-1]);setfname('');setlname('');setuser('');setpassword('');setemail('');setnumber('');setaddress('')
}

function done(){
setread(true)
}

return (
<div>
    <div className='w-[92vw] bg-slate-400 m-4 p-3 '>
      <h2 className='text-center text-xl '><i>User page</i> </h2>
      <h4 className='p-1' >fname:</h4> 
      <input className='p-1'  value={fname} onChange={e=>setfname(e.target.value)} readOnly={read} />
      <h4 className='p-1' >lname:</h4> 
      <input className='p-1'  value={lname} onChange={e=>setlname(e.target.value)} readOnly={read} />
      <h4 className='p-1' >user name:</h4> 
      <input className='p-1'  value={user} onChange={e=>setuser(e.target.value)} readOnly={read} />
      <h4 className='p-1' >password:</h4> 
      <input className='p-1'  value={password} onChange={e=>setpassword(e.target.value)} readOnly={read} />
      <h4 className='p-1' >email:</h4> 
      <input className='p-1'  value={email} onChange={e=>setemail(e.target.value)} readOnly={read} />
      <h4 className='p-1' >number:</h4> 
      <input className='p-1'  value={number} onChange={e=>setnumber(e.target.value)} readOnly={read} />
      <h4 className='p-1' >address:</h4> 
      <input className='p-1'  value={address} onChange={e=>setaddress(e.target.value)} readOnly={read} />
      <br /><br />
      <div className='flex justify-between'>
        <button className='px-1 p-2 hover:bg-slate-600' onClick={done}>done</button>
        <button className='px-1 p-2 hover:bg-slate-600' onClick={()=>setread(false)}>Edit</button>
      </div>
    </div>
</div>
)}
export default User