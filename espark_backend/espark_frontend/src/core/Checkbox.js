import React, {useEffect,useState} from 'react';

const Checkbox=({categories,handleFilters})=>{
const[checked,setCheked]=useState([]);
const handleToggle = c =>()=>{
    const currentCategoryId=checked.indexOf(c);
    const newChekedCategoryId=[...checked];
     if(currentCategoryId===-1){
        newChekedCategoryId.push(c);
     }
     else{
        newChekedCategoryId.splice(currentCategoryId,1);
     }
     setCheked(newChekedCategoryId);
     handleFilters(newChekedCategoryId);
}                

    return categories.map((c,i)=>(
<li key={i} className="list-unstyled">
<input onChange={handleToggle(c._id)} value={checked.indexOf(c._id===-1)} type="checkbox" className="form-check-input"/>
<label className="form-check-label">{c.name}</label>
   </li>
    ))

}

export default Checkbox;