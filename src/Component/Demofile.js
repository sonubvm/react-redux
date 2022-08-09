import React, {useState} from 'react';
  
const Multi = () => {
  
    const [records,setRecords]= useState([]);
    const [obj,setObj]=useState({})
    //    firstname:'',
    //    midelname:'',
    //    lastname:''
      
    // const [usersubmit,setUsersubmit]= useState({});
    const handleInput = (e) => {
        const name = e.target.name;
        // console.log("ee",e);
        const value = e.target.value;
        // console.log(e.target.name,value);
      //   constn target = event.target
      //   const gender = e.target.gender;
    setObj({...obj,[name]:value})
    setObj({...obj,[name]:value})
   //  setObj({...obj,[name]:value})
    // setUsersubmit({...usersubmit, [name]: value});
    
}
console.log("log",obj);
     const handleSubmit = (e) => {
        records.push(obj)
      
        setRecords([...records])
        setRecords([...records])
      }
     

    // const edit = 
      
      
     console.log("arr",records);
  return (
    <>
       <form action=''>
           <div>
              <label htmlFor='first name'>First Name:</label>
              <input type='text' name='fname'
            //    value={usersubmit.firstname}
               onChange={(e)=>handleInput(e)}
               key='firstName'/>
           </div>  
            
           <div> 
              <label htmlFor='midel name'>Midel Name:</label>
              <input type='text' 
            //   value={usersubmit.midelname}
              onChange={(e)=>handleInput(e)}
              name='middelName'/>
           </div>
            
           <div>
              <label htmlFor='last name'>Last Name:</label>
              <input type='text'
            //   value={usersubmit.lastname}
              onChange={(e)=>handleInput(e)}
              name='lastName'/>
           </div><br></br>
            
           <div>
               <label htmlFor='gender'>Gender:</label><br></br>
               <input type='radio' 
               onChange={(e)=>handleInput(e)}
               name='gender' id='male' value='male'></input>
               <label htmlFor='male'>Male</label>
               <input type='radio'
               onChange={(e)=>handleInput(e)}
               name='gender' id='female' value='female'></input>
               <label htmlFor='female'>Female</label>
           </div>
           <br></br>
            
           <div>
               <label htmlFor='hobby'>Hobby:</label><br></br>
               <input type='checkbox'  
               onChange={(e)=>handleInput(e)}
               name='hobby'  value='cricket'></input>
               <label htmlFor='cricket'>Cricket</label><br></br>
               <input type='checkbox' 
               onChange={(e)=>handleInput(e)}
                name='hobby'  value='chess'></input>
               <label htmlFor='chess'>Chess</label>
           </div>
                
         <button type='button' onClick={handleSubmit}>Submit</button>
         <br></br><br></br>

         <table className='list' id='storelist' border={2}>
             <thead>
               <tr>
                  <th>First Name</th>
                  <th>Midel Name</th>
                  <th>Last Name</th>
                  <th>Gender</th>
                  <th>Hobby</th>
                  <th>Action</th>
               </tr>
             </thead>
             <tbody>
            {
              records && records.map((item,i)=>{
                  return(
                     <tr key={i}>
                       <td>{item.fname}</td>
                       <td>{item.middelName}</td>
                       <td>{item.lastName}</td>
                       <td>{item.gender}</td>
                       <td>{item.hobby}</td>
                       <td>
                        <input type='button' onClick= 'edit("td")' value='Edit' id='edit'></input>
                          <input type='button' onClick= 'delete("td")' value='Delete' id='delete'></input> </td>
                     </tr>  
                 )
               })
            }
             </tbody>
           </table>
         
       </form><br></br>
    </>
  )
}
export default Multi

   