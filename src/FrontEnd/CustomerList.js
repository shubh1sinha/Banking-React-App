import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, useParams, useNavigate} from 'react-router-dom'

export default function CustomerList() {
  let navigate = useNavigate();
    const [customer, setCustomer] = useState([])
    useEffect(()=>{
        loadCustomer();
    }, []);

    const loadCustomer=async()=>{
        const response = await axios.get("http://localhost:9391/bank/customer/list");
        console.log(response)
        setCustomer(response.data);
    }

    function deactivate(panNo){
      axios.get(`http://localhost:9391/bank/account/deactivate/`+panNo)
      window.location.reload()
      navigate('/customer/list')
   }


function activate(panNo){
   axios.get(`http://localhost:9391/bank/account/activate/`+panNo)
   window.location.reload()
   navigate('/customer/list')
}

  return (
    <div>
       <div className='contaimer'>
            <div className='container'>
            <div className='py-4'>
            <table class="table border shadow">
        <thead className='table-dark'>
        <tr>
          <th scope="col">S No</th>
          <th scope="col">Account No</th>
          <th scope="col">Pan No</th>
          <th scope="col">Account Status</th>
          <th scope="col">Action</th>
        </tr>
        </thead>
        <tbody>
        {
            customer.map((customer, index)=>(
                <tr>
                <th scope="row" key={index}>{index+1}</th>
                <td>{customer.accountNo}</td>
                <td>{customer.panNo}</td>
                <td>{String(customer.status)}</td>

                { <td>
                    <Link className='btn btn-info mx-2' to={`/customer/info/${customer.panNo}`}>Customer-Info</Link>
                    
                    {(()=>{
                      if(customer.status===true){
                        return(<button className='btn btn-danger mx-2' onClick={() => deactivate(customer.panNo)} >DeActivate</button>)
                      }
                      else{
                        return(<button className='btn btn-success mx-2' onClick={() => activate(customer.panNo)}>Activate</button>)
                      }
                    })()}
                    
                    
                </td> }
                </tr>
            ))
        }
        </tbody>
        </table>
            </div>
        </div>
        </div>
    </div>
  )
}
