import React, { useContext, useState } from 'react'
 import { myContext } from '../context'
import { Link } from "react-router-dom";

const Factor = () => {
const {list,setlist,users} = useContext(myContext)
const [paid,setpaid] = useState(false)
const arr = []
let row = 1
const date =`${new Date().getFullYear()}/${new Date().getMonth()}/${new Date().getDay()} `

const getID =id=> list.findIndex(i => i.id == id)

function payFactor(id){
  const p = getID(id)
  if(paid) {
    list[p].Inventory = list[p].Inventory - (list[p].sell / 2)
    list[p].isSelected = false
    list[p].sell = 0
  }
  setlist(list)
}

return (
<div>

{
  users.map(i=>
  <div key={i.id} className='bg-indigo-300'>
    <h2 >Shampoo sales invoice</h2>
    <h3>Mr/Madam bill : {i.fname} {i.lname}</h3>
    <h3>Phone : {i.number}</h3>
    <h3>address : {i.address}</h3>
    <h3>date : {date}</h3>
    <h3>email : {i.email}</h3>
  </div>)
}

<div>
  <table className='bg-indigo-400' >
    <thead>
      <tr>
        <th>row</th>
        <th>ID code</th>
        <th>product</th>
        <th>number</th>
        <th>price</th>
        <th>Total price</th>
      </tr>
    </thead>
    {
      list.filter(i=> i.isSelected).map(i=>{
        arr.push(i.price * i.sell) 
        payFactor(i.id)

        return(
        <tbody key={i.id}>
          <tr>
            <td className="">{row++}</td>
            <td className="">{i.id}</td>
            <td className="">{i.title}</td>
            <td className="">{i.sell}</td>
            <td className="">{i.price}</td>
            <td className="">{i.price * i.sell }</td>
          </tr>
        </tbody>
      )})}
    <tfoot>
      total factor : {arr.reduce((acc,cur)=>acc + cur,0)}
    </tfoot>
  </table>
</div>

<button className='' onClick={()=>setpaid(true)}>{paid ? 'paid' : 'payment'}</button>

</div>
)}
export default Factor