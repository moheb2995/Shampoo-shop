import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { myContext } from '../context'

const SList = () => {
const {list,setlist} = useContext(myContext)
const [vSell,setvsell] = useState('')
const [select , setSelect] = useState(false)
const {id} = useParams()
 
const getID =id=> list.findIndex(i => i.id == id)
const p = getID(id)

function removeI (){
  if(list[p].isSelected){
    list[p].isSelected = false
    list[p].sell = 0
  }
  setvsell('')
  setlist(list)
  setSelect(!select)
} 

function addCart(){
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

const f = list.filter(i=> i.id == id)

const data = f.map(i=>{
return(
  <div key={i.id} className='bg-slate-400 p-2'>
    <img src={i.url} alt={i.title} />
    <h3>{i.title}</h3>
    <h4>{i.price}</h4> 
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
    <br />
    <input type="number" placeholder={i.Inventory} max={i.Inventory} value={vSell} onChange={e=>setvsell(e.target.value)}/>
    <p>{i.sell}</p>
    <p>{i.ex}</p> 
  </div>
)
})

return (
<div className='m-2'>
{data}
</div>
)}
export default SList