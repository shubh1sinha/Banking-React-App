import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'

export default function Employee() {
  const{id}=useParams()
  const[customer, setCustomer] = useState({
    name:"",
    username:"",
    password:"",
    panNo:""
})

  useEffect(()=>{
    loadCustomer()
},[])
const loadCustomer = async ()=>{
    const result = await axios.get(`http://localhost:9391/bank/customer/info/${id}`)
    console.log(result)
    setCustomer(result.data)
}


  return (
    <div>
      <div>
      <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>User Portal</h2>
                <div className='card'>
                    <div className='card-header'>
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                            
                            <Link className='btn btn-outline-dark' to={`/customer/list`}>Customer List</Link> &nbsp;
                            
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
    </div>
    </div>
    
    </div>
  )
}