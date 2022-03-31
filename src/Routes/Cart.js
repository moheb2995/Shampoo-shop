import React, { useContext, useState } from 'react'
import { myContext } from '../context'
import { Link } from "react-router-dom";

const Cart = () => {
const {list,setlist} = useContext(myContext)
const [vSell,setvsell] = useState()
const [select , setSelect] = useState(false)
const arr = []
const getID = (id) => list.findIndex((i) => i.id == id)

function removeI (id){
  const p = getID(id)

  if(list[p].isSelected){
    list[p].isSelected = false
    list[p].sell = 0
  }
  setvsell('')
  setlist(list)
  setSelect(!select)
} 

function addCart(id){
  const p = getID(id)

  if(vSell == ''){
    list[p].isSelected = true
    list[p].sell = 1
  }
  else{
    list[p].isSelected = true
    list[p].sell = vSell
  }
  setlist(list)
  setSelect(!select)
}
const showList = list.filter(i=> i.isSelected).map(i=>
  <div key={i.id} className="bg-slate-400 w-[90vw] m-3 p-2">

    <h3 className="">{i.title} </h3>
    <Link to={`/SList/${i.id}`}>
      <img className="p-3.5 h-52" src={i.url} alt={i.title} />
    </Link>
    {arr.push(i.sell > 0? i.price * i.sell : i.price * 1)}
    <h4 className="">{i.sell > 0? i.price * i.sell : i.price * 1} قیمت</h4>
    {
    <button className='bg-slate-800 text-white p-1 ' 
      onClick={()=>{addCart(i.id)}}>
      add to cart
    </button>
    }
    {
      i.isSelected ?
      <button className='bg-slate-800 text-white p-1 ' 
        onClick={()=>{removeI(i.id)}}>
        remove item
      </button>
      :
      ''
    }
    <input type="number" placeholder={i.Inventory} max={i.Inventory} value={i.sell} onChange={e=>setlist(e.target.value)}/>
    <p>{i.sell}</p>
  </div>
)

// console.log(arr);
return (
  <div>
  {showList}
  <hr />
  {arr.reduce((acc,cur)=>acc + cur,0)}
  <Link to={'/Factor'}> <button className=''>continuation</button></Link>
</div>
)}
export default Cart