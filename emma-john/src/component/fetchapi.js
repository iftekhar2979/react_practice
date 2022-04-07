import React, { useEffect, useState } from 'react'
import './fetchApiModule.css'

export default function FetchApi() {
    const [user,setUsers]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>{setUsers(data)})
    },[])
  return (
      <div>
 {
     user.map(users=>(
         <div className='box'>
             <h3 >user Name:<span className='gray'> {users.name}</span></h3>
             <h2 >Email :<span className='red'>{users.email}</span></h2>
             <h3>Phone : <span className='white'> {users.phone}</span></h3>
             <h4>loacation : <span className='blue'>{users.username}</span></h4>
             </div>
     ))
 }
 </div>
  )
}
