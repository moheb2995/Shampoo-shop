import React from 'react'
import { useContext } from 'react'
import { myContext } from '../context'

const AUser = () => {
const {users,setusers} = useContext(myContext)
const UID = () => `${new Date().getTime()}${String(Math.random()).slice(3, 9)}`

const clone = [...users]

const getIndex =(id)=>clone.findIndex(i=>i.UID == id)

console.log(clone);
const list = clone.map(i=>
<div className='w-[90vw]  bg-slate-200 border-solid border-black	border-2 p-1	 '>
   <h3>{i.id}</h3>
   {console.log(i.id)}
   <h4>{i.user} </h4>
  <button className='' 
  onClick={
    ()=>{clone.splice(getIndex(i.id),1);setusers(clone)}
  }
  >❎</button> 
  {/* <button className='' >edit</button> */}
</div>
)

return (
<div>
  
  {list}
</div>
)}
export default AUser