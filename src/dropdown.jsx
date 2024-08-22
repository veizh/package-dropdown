import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import "./style.css"
const Dropdown = ({initial,arrayOptions,mutateur}) => {
    let [isOpen,setIsOpen]=useState(false)
    return (
      <div className={isOpen?'dropdown__container open':'dropdown__container'} onClick={()=>setIsOpen(!isOpen)}>
        <div className='active__select option'><p>{initial&&initial}</p><ChevronDown className={isOpen?"reverse dropdown__icon":"dropdown__icon"} size={20}/></div>
        <div className={isOpen?'options__container open':'options__container'}>
        {arrayOptions.map((e,i)=>{
          return<BoxOption name={e.name?e.name:e} value={e.value?e.value:e} key={i} mutateur={mutateur} setIsOpen={setIsOpen}  />
        })}
        </div>
      
      </div>
    );
  };


let BoxOption=({name,mutateur,setIsOpen,value})=>{
return(
  <div className='option' onClick={()=>{
    mutateur(value)
    setIsOpen(false)
  }
  }><p>{name&&name}</p></div>
)
}
 
export default Dropdown;