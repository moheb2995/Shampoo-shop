import React, { useContext, useState } from "react";
import { myContext } from "../context";
import { Link } from "react-router-dom";

const List = () => {
const { list, setlist } = useContext(myContext);
const [select , setSelect] = useState(false)

const getID = (id) => list.findIndex((i) => i.id == id)

function sItem(id) {
  const p = getID(id);
  if(list[p].isSelected){
    list[p].isSelected = false
    list[p].sell = 0
  }
  else{
    list[p].isSelected = true
    list[p].sell = 1
  }
  setlist(list);
  setSelect(!select)
}

const showList = list.map((i) => {
  return (
    <div key={i.id} className="bg-slate-400 w-[90vw] m-3 p-2">
      <h3 className="">{i.title} </h3>
      <Link to={`/SList/${i.id}`}>
        <img className="p-3.5 h-60" src={i.url} alt={i.title} />
      </Link>
      <h4 className="">{i.price} قیمت</h4>
      <button
        className="bg-slate-800 text-white p-1 "
        onClick={() => {
          sItem(i.id);
        }}
      >
      {i.isSelected?'move item':'add to cart'}
      </button>
    </div>
  );
});

return (
<div>
  {showList}
</div>
);
};
export default List;
