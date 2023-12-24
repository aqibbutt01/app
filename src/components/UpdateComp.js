import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from 'react-router-dom'
const UpdateComp = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [fatherNumber, setFatherNumber] = useState('');
  const [age, setAge] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [className,  setClassName] = useState('');
//   const [data, setData] = useState([]);
  const navigate = useNavigate();
  const handleChange = e => {setGender(e.target.value);};
  const params = useParams();


    const getUserDetail = async() =>{
        let res = await fetch(`http://localhost:4000/userdetail/${params.id}`)
        res = await res.json();
        setFirstName(res.firstName)
        setLastName(res.lastName)
        setFatherName(res.fatherName)
        setFatherNumber(res.fatherNumber)
        setAge(res.age)
        setBirthDate(res.birthDate)
        setGender(res.gender)
        setAddress(res.address)
        setClassName(res.className)
        
    }


  const updateData = async(e) =>{
    e.preventDefault();
   let res = await fetch(`http://localhost:4000/userupdate/${params.id}`,{
    method: "put",
    body: JSON.stringify({firstName, lastName, fatherName, fatherNumber, age, birthDate, gender, address, className}),
    headers:{
        "Content-Type": "Application/json"
    }
   })
   res = await res.json();
   console.log(res);
   navigate('/usersdetail');
  }

  useEffect(() => {
    getUserDetail();
  }, [])


  return (
    <div className="wrapper rounded bg-white">  
      <form>
      <div className="h3">UPDATE DATA</div>
  <div className="form">
    <div className="row">

      <div className="col-md-6 mt-md-0 mt-3">
        <label>First Name</label>
        <input type="text"  className="form-control" required id="firstName"  value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
           </div>

      <div className="col-md-6 mt-md-0 mt-3">
      <label>Last Name</label>
      <input type="text"  className="form-control" required id="lastName"  value={lastName} onChange={(e)=>setLastName(e.target.value)}  /> 
       </div>

    </div>

    <div className="row">

      <div className="col-md-6 mt-md-0 mt-3">
        <label>Father Name</label>
        <input type="text"  className="form-control" required id="fatherName"  value={fatherName} onChange={(e)=>setFatherName(e.target.value)}  /> 
 
        </div>

      <div className="col-md-6 mt-md-0 mt-3">
      <label>Father Contact Number</label>
      <input type="text"  className="form-control" required id="fatherNumber"  value={fatherNumber} onChange={(e)=>setFatherNumber(e.target.value)}  /> 
        </div>

    </div>

    <div className="row">
      <div className="col-md-6 mt-md-0 mt-3">
        <label>Enter Your Age</label>
        <input type="text" className="form-control" required  id="age"  value={age} onChange={(e)=>setAge(e.target.value)}  />
        </div>
     
      <div className="col-md-6 mt-md-0 mt-3">
        <label>Birthday</label>
        <input type="date"  className="form-control" required id="birthDate"  value={birthDate} onChange={(e)=>setBirthDate(e.target.value)}  />
        </div>
    </div>

    <div className="row">
     
     <div className="col-md-6 mt-md-0 mt-3 ">
         <label>Gender</label>
       <input className="m-1"  type="radio"id="Male"name="choose"value="Male"checked={gender === 'Male'}  onChange={handleChange} />
         <span  htmlFor="Male" className="m-1" >Male</span>
        
        <input className="m-1" type="radio" id="Female"name="choose" value="Female"checked={gender === 'Female'}  onChange={handleChange} />
         <span className="m-1" htmlFor="ale" >Female</span>
     </div>
     </div>

    <div className="row">
      <div className="col-md-6 mt-md-0 mt-3">
        <label>Address</label>
        <input type="text" className="form-control" required  id="address" value={address} onChange={(e)=>setAddress(e.target.value)}  /> 
          
        </div>

      <div className="col-md-6 mt-md-0 mt-3">
        <label>Class</label>
        <input type="text"className="form-control" id="className"  value={className} onChange={(e)=>setClassName(e.target.value)}/>     
         
      </div>

    </div>
  </div>




        
        <button onClick={updateData}  type="submit" className="btn btn-primary" >
          Update Record
        </button>
        
        
      </form>
    </div>
  );
};

export default UpdateComp;
