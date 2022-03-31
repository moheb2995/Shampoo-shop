import React,{createContext, useState} from "react";

export const myContext = createContext()

const BookContext =(props)=>{
  const UID = () => `${new Date().getTime()}${String(Math.random()).slice(3, 9)}`
  
const [navlog,setnavlog] = useState (false)
const [inName,setinName] = useState('')
const [user,setuser] = useState('admin845')
const [password,setpassword] = useState(845)
const [users,setusers] = useState([
  {fname:'ali',lname:'moheb',user:'mkm',password:1234,email:'moheb@gmail.com',number:'09121111330',address:'Tehran...',id: UID(),cart:[],}
])
const [list,setlist] = useState([
  {
    title:'محصول 1',
    url: "https://zibasham.ir/images/com_hikashop/upload/shampo-roghane-mo.jpg" ,
    price:20000,
    ex:'بهترین شامپو برای تو',
    coments:[],
    id: UID(),
    Inventory: 10,
    isSelected: false,
    sell: 0,

  },
  {
    title:'محصول 2', 
    url: "https://tienda.tarracoimportexport.com/img/p/2/3/9/9/2399-tm_thickbox_default.jpg" ,
    price:22000,
    ex:'بهترین شامپو برای تو',
    coments:[],
    id: UID(),
    Inventory: 10,
    isSelected: false,
    sell: 0,

  },
  {
    title:'محصول 3', 
    url: "https://rojestore.com/wp-content/uploads/2020/12/seliar-curl-shampooECHOSLINE.jpg" ,
    price:27000,
    ex:'بهترین شامپو برای تو',
    coments:[],
    id: UID(),
    Inventory: 10,
    isSelected: false,
    sell: 0,

  },
  {
    title:'محصول 4', 
    url: "https://www.firooz.com/wp-content/uploads/2013/05/shampo-narmkoonandeh1.jpg" ,
    price:30000,
    ex:'بهترین شامپو برای تو',
    coments:[],
    id: UID(),
    Inventory: 10,
    isSelected: false,
    sell: 0,

  },
  {
    title:'محصول 5', 
    url: "https://ctmehr.com/Content/files/mahsolat%2Farayeshi%20va%20behdashti%2Flavazeme%20behdashti%2Fshampo%20v%20moraghebat%20moo%2Fshampoo%20moo%2FAVE%2F400gr%2Fzd%20shore%2Flsza0.jpg" ,
    price:25000,
    ex:'بهترین شامپو برای تو',
    coments:[],
    id: UID(),
    Inventory: 10,
    isSelected: false,
    sell: 0,

  },
])

return(

<myContext.Provider value={
  {user,setuser,password,setpassword,users,setusers,navlog,setnavlog,inName,setinName,list,setlist,}
  }>
  {props.children}
</myContext.Provider>

)}
export default BookContext