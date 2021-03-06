import React, {useContext} from 'react';
import {ItemContext} from "../context/Itemcontext";
import { GrNext, GrClose, GrEdit, GrTrash  } from "react-icons/gr";


import {Link} from 'react-router-dom';
//import Item from "./Item";

const Items = () => {
    const [items, setItems] = useContext(ItemContext);
    console.log(items)


    return (

           <div className='container'>
               <h2>Itemlijst</h2>
               {items.map(item =>{
                   return (
                      <div style={{background: 'url(./item.img) no repeat center/cover'}} className='itemBg'>
                           <div className='itemInfo'>
                               <h3>{item.name}</h3>
                               <p>{item.description}</p>
                               <GrEdit style={{ color:'white', cursor:'pointer'}}/><GrTrash style={{ color:'white', cursor:'pointer'}}
                                                                                            // onClick={() => onDelete(item.id)}
                           />
                               <Link to='#'>Details</Link>
                           </div>
                       </div>
                   );
               })};

           </div>


    );
};
export default Items