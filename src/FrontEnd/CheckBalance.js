import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'

export default function CheckBalance() {

  const {id}  = useParams(); 
    const[customer, setCustomer] = useState({
        customerId:"",
        accountNo:"",
        balance:"",
        panNo:""
    })

    useEffect(()=>{
        loadCustomer()
    },[])
    const loadCustomer = async ()=>{
        const result = await axios.get("http://localhost:9391/bank/customer/balance?panNo="+id)
        setCustomer(result.data)
    }

  return (
    <div>
      <div>
            <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Balance Infromation</h2>
                <div className='card'>
                    <div className='card-header'>
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                                <b>Account No: &nbsp;{customer.accountNo}</b>
                            </li>
                            <li className='list-group-item'>
                                <b>Balance: &nbsp;{customer.balance}</b>
                            </li>
                            </ul>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}
