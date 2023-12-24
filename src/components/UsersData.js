import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

const UsersData = () => {
const [uData, setUData] = useState([]);
    
const userData = async() =>{
    let res = await fetch("http://localhost:4000/registerUser")
    res = await res.json();    
    setUData(res)
}
console.log(uData)

    useEffect(() => {
        userData()
    }, [])

    const deleteUser = async(id) =>{
        console.log("id : ", id)
        let res = await fetch("http://localhost:4000/user/"+id,{
            method: "delete"
        })
        res = await res.json()
        if(res){
            userData()
        }

    }

  return (
    <div>
        <h1 className='display-0 fw-bold my-4 text-primary'>Student's Details</h1>
        <hr />
    <table  class="table table-hover w-75 mx-auto">
    <thead>
    <tr className='bg-warning   border: 1px solid black'>
      <th scope="col">Sr.No.</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Father Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Age</th>
      <th scope="col">Date OF Birth</th>
      <th scope="col">Gender</th>
      <th scope="col">Address</th>
      <th scope="col">Class</th>
      <th scope="col">Edit/Delete/Print</th>
    </tr>
  </thead>
    <tbody>
        {
            uData.map((user, ind)=>{
                return(
                    <>
                        <tr key={user._id}>
                            <th scope="row">{ind+1}</th>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.fatherName}</td>
                            <td>{user.fatherNumber}</td>
                            <td>{user.age}</td>
                            <td>{user.birthDate}</td>
                            <td>{user.gender}</td>
                            <td>{user.address}</td>
                            <td>{user.className}</td>
                            
                            <td>
                                <Link to={`/editform/${user._id}`} className='btn btn-success btn-sm me-2'><i class="fas fa-edit"></i></Link>
                                <a onClick={()=>deleteUser(user._id)} className='btn btn-danger btn-sm'><i class="fa fa-trash" aria-hidden="true"></i></a>
                            </td>
                        </tr>
                    </>
                )
            })
        }
        </tbody>
    </table>



    </div>
  )
}

export default UsersData



  
 
