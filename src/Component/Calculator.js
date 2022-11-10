import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleSubmitvalue } from "./action";
const Calculator = () => {
    const [value, setvalue]= useState([]);
    const dispatch = useDispatch();
    const data = useSelector((state)=> state.reducer.value)
    const handlevalue= (e,id)=>{
        value[id] = {num:e.target.value};
        setvalue(value);
    };
   return (
    <>
        <div>
          Enter the 1st Value:  <input type ="text" onChange={(e) => handlevalue(e,0)}/><br />
          Enter the 2nd Value:  <input type ="text" onChange={(e) => handlevalue(e,1)}/><br />
          <button onClick={(e)=>{dispatch(handleSubmitvalue(value))}}>Sum</button>
          <h1>{data}</h1>
        </div>
    </>
   );

}
export default Calculator;