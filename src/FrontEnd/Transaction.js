import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Link, useNavigate, useParams} from 'react-router-dom';

export default function Transaction() {
    let navigate = useNavigate();
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
    const[transaction, setTransaction] = useState({
        startDate: "",
        endDate: ""
    })
    const{startDate, endDate} = transaction
    const onInputChange=(e)=>{
        setTransaction({...transaction,[e.target.name]: e.target.value})
            }
            const [receipts, setReceipts] = useState([])
    const save=async(e)=>{
        e.preventDefault();
        const result=await axios.post("http://localhost:9391/bank/customer/receipt?accountNo="+customer.accountNo +"&startDate="+transaction.startDate+"&endDate="+transaction.endDate)

        console.log(result.data)
        setReceipts(result.data);

            }



  return (
    <div>
         <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Deposit Money</h2>
                <form onSubmit={(e)=>save(e)}>
                    <div className='mb-3'>
                    <input type={"text"}
                    className="form-control"
                    placeholder='Enter your name'
                    name="accountNo"
                    value={customer.accountNo}
                    readOnly
                     />
                    </div>

                    <div className='mb-3'>
                    <input type={"date"}
                    className="form-control"
                    placeholder='Enter Amount to be Deposited'
                    name="startDate"
                    value={startDate}
                    onChange={(e)=>onInputChange(e)} />
                    </div>

                    <div className='mb-3'>
                    <input type={"date"}
                    className="form-control"
                    placeholder='Enter Amount to be Deposited'
                    name="endDate"
                    value={endDate}
                    onChange={(e)=>onInputChange(e)} />
                    </div>


                    <button type='submit' className='btn btn-outline-primary'>Submit</button>
                    &nbsp;
                    <Link className='btn btn-outline-danger' to={`/`} >Cancel</Link> &nbsp;
                </form>
                
            </div>
            <div className='contaimer'>
    <div className='container'>
    
    <div className='py-4'>
    <h3>Closing Balance : &nbsp; {customer.balance}</h3>
    <table class="table border shadow">
        
<thead className='table-dark'>
<tr>

  <th scope="col">S No</th>
  <th scope="col">Transaction Id</th>
  <th scope="col">Amount</th>
  <th scope="col">Type</th>
  <th scope="col">Date</th>
</tr>
</thead>
<tbody>
{
    receipts.map((receipts, index)=>(
        <tr>
        <th scope="row" key={index}>{index+1}</th>
        <td>{receipts.transactionId}</td>
        <td>{receipts.amount}</td>
        <td>{receipts.type}</td>
        <td>{receipts.date}</td>
        </tr>
    ))
}
</tbody>
</table>
    </div>
</div>
</div>
        </div>
    </div>
</div>
  )
}
