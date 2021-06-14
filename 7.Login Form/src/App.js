import React, { useState } from "react";

const App = () => {
 
  
  const[fullname,setFullName]=useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
  });

   const inputEvent=(event)=>{
    console.log(event.target.value);
    console.log(event.target.name);
    
    const value=event.target.value;
    const name=event.target.name;
    
    setFullName((preValue)=>{


      return{
        ...preValue,
        [name]:value
      }
      // if(name==='fname'){
      //   return{
      //   fname: value,
      //   lname: preValue.lname,
      //   email: preValue.email,
      //   phone: preValue.phone
      //   }
      // }
      // if(name==='lname')
      // {
      //   return{
      //   fname: preValue.fname,
      //   lname: value,
      //   email: preValue.email,
      //   phone: preValue.phone,
      //   }
      // }
      // if(name==='email'){
      //   return{
      //     fname: preValue.fname,
      //   lname: preValue.lname,
      //   email: value,
      //   phone: preValue.phone,
      //   }
      // }
      // if(name==='phone'){
      //   return{
      //     fname: preValue.fname,
      //   lname: preValue.lname,
      //   email: preValue.lname,
      //   phone: value,
      //   }
      // }
    });
  };

  const onSubmits=(event)=>{
    event.preventDefault();
    alert("form submitted");
     
  }

  return (
    <>
    <div className="main_div">
    <form onSubmit={onSubmits}>
      <div>
      <h1>Hello! {fullname.fname} {fullname.lname}</h1>
      <input type="text" placeholder="Enter Your Name" 
      name="fname"
      onChange={inputEvent} 
      value={fullname.fname}/> 
      <br/>
      <input type="text" placeholder="Password"
        name="lname"
       onChange={inputEvent}
       value={fullname.lname}/> 
       <br/>
       <input type="email" placeholder="Enter your email"
        name="email"
       onChange={inputEvent}
       value={fullname.email}/> 
       <br/>
       <input type="number" placeholder="Enter your Phone Number"
        name="phone"
       onChange={inputEvent}
       value={fullname.phone}/> 
        <button type="submit">
          Submit
        </button>
      </div>
      </form>
      </div>
    </>
  );
};
export default App;
