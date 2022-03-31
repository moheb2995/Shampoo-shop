import React, { useContext, useState } from 'react'
import { myContext } from '../context'

const AHome = () => {
const UID = () => `${new Date().getTime()}${String(Math.random()).slice(3, 9)}`

const {list,setlist} = useContext(myContext)

const [title,settitle] = useState('')
const [url,seturl] = useState('')
const [price,setprice] = useState('')
const [ex,setex] = useState('')
const [Inventory,setInventory] = useState('')

function add(){
  if(title=='' || url=='' || price=='' || ex=='' || Inventory=='')return alert('complete inputs')
  const obj = {title,url,price,ex,Inventory,id:UID(),coments:[],isSelected: false,sell: 0,}
  // const clone = JSON.parse(JSON.stringify(list))
  // clone.push(obj)
  // setlist(clone)
  list.push(obj)
  setlist(list)
  settitle('');seturl('');setprice('');setex('');setInventory('');
  console.log(list);
}

return(
<div>
  <div>
    <h2>add item</h2>
    <input className='' value={title} onChange={e=>settitle(e.target.value)} placeholder='title' />
    <input className='' value={url} onChange={e=>seturl(e.target.value)} placeholder='url image' type='url'/>
    <input className='' value={price} onChange={e=>setprice(e.target.value)} placeholder='price' type='number'/>
    <input className='' value={Inventory} onChange={e=>setInventory(e.target.value)} placeholder='Inventory' type='number'/>
    <input className='' value={ex} onChange={e=>setex(e.target.value)} placeholder='explantion' />
    <button className='' onClick={add}>add</button>
  </div>

  <div>
    {
    list.map(i=><div key={i.id}>
      <h3 className="">{i.title} </h3>
      <img className='' src={i.url} alt={i.title} />
      <h4 className="">{i.price} </h4>
      <p className="">{i.ex}</p>
      <h5 className="">{i.Inventory}</h5>
    </div>
    )
    }
  </div>
</div>
)}
export default AHome