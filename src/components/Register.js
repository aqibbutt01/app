import React, {useState} from "react";
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [fatherNumber, setFatherNumber] = useState('');
  const [age, setAge] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [className,  setClassName] = useState('');
  const [data, setData] = useState([]);
  const [errorMsg, setErrorMsg] = useState(false);
  const navigage = useNavigate();


  const saveData = async(e) =>{
    if(!firstName || !lastName || !fatherName|| !fatherNumber || !age || !birthDate || !gender || !address || !className ){
      setErrorMsg(true)
      return false
    }
    e.preventDefault();
    let abcd = await fetch("http://localhost:4000/register",{
      method: 'POST',
      body: JSON.stringify({firstName, lastName, fatherName, fatherNumber, age, birthDate, gender, address, className }),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    abcd = await abcd.json();
    setData(abcd);
    navigage('/usersdetail')
  }


  const handleChange = e => {setGender(e.target.value);};


  return (

    
<div className="wrapper rounded bg-white">
  <form>
  <div className="h3">Registration Form</div>
  <div className="form">
    <div className="row">

      <div className="col-md-6 mt-md-0 mt-3">
        <label>First Name</label>
        <input type="text"  className="form-control" required id="firstName" onChange={(e)=>setFirstName(e.target.value)} />
        {errorMsg && !firstName && <span className="errorHandle">Student first name is required</span>} 
      </div>

      <div className="col-md-6 mt-md-0 mt-3">
      <label>Last Name</label>
      <input type="text"  className="form-control" required id="lastName" onChange={(e)=>setLastName(e.target.value)}  /> 
          {errorMsg && !lastName && <span className="errorHandle">Student last name is required</span>}  
      </div>

    </div>

    <div className="row">

      <div className="col-md-6 mt-md-0 mt-3">
        <label>Father Name</label>
        <input type="text"  className="form-control" required id="fatherName" onChange={(e)=>setFatherName(e.target.value)}  /> 
          {errorMsg && !fatherName && <span className="errorHandle">Father Name is required</span>}         
        
        </div>

      <div className="col-md-6 mt-md-0 mt-3">
      <label>Father Contact Number</label>
      <input type="text"  className="form-control" required id="fatherNumber" onChange={(e)=>setFatherNumber(e.target.value)}  /> 
          {errorMsg && !fatherNumber && <span className="errorHandle">Father Contact Number is required</span>}         
        </div>

    </div>

    <div className="row">
      <div className="col-md-6 mt-md-0 mt-3">
        <label>Enter Your Age</label>
        <input type="text" className="form-control" required  id="age" onChange={(e)=>setAge(e.target.value)}  /> 
          {errorMsg && !age && <span className="errorHandle">Age is required</span>}         
      
        </div>
     
      <div className="col-md-6 mt-md-0 mt-3">
        <label>Birthday</label>
        <input type="date"  className="form-control" required id="birthDate" onChange={(e)=>setBirthDate(e.target.value)}  /> 
          {errorMsg && !birthDate && <span className="errorHandle">Date of Birth  is required</span>}         
        
        </div>

        </div>

        <div className="row">
     
      <div className="col-md-6 mt-md-0 mt-3 ">
          <label>Gender</label>
        <input className="m-1"  type="radio"id="Male"name="choose"value="Male"checked={gender === 'Male'}  onChange={handleChange} />
          <span  htmlFor="Male" className="m-1" >Male</span>
         
         <input className="m-1" type="radio" id="Female"name="choose" value="Female"checked={gender === 'Female'}  onChange={handleChange} />
          <span className="m-1" htmlFor="ale" >Female</span>

        {errorMsg && !gender && <span className="errorHandle">Gender  is required</span>} 
      </div>
      </div>

   

    <div className="row">
      <div className="col-md-6 mt-md-0 mt-3">
        <label>Address</label>
        <input type="text" className="form-control" required  id="address" onChange={(e)=>setAddress(e.target.value)}  /> 
          {errorMsg && !address && <span className="errorHandle">Address is required</span>}         
      
        </div>

      <div className="col-md-6 mt-md-0 mt-3">
        <label>Class</label>
        <input type="text"className="form-control" id="className"  onChange={(e)=>setClassName(e.target.value)}/>     
          {errorMsg && !className && <span className="errorHandle">Enter The Class Name</span>}              
        
      </div>

    </div>

    <div> 
     <button onClick={saveData} type="submit" className="btn btn-primary" >
          Register
        </button></div>
  </div>
  </form>
</div>

  );
};

export default Register;
