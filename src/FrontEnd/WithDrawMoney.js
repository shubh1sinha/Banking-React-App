import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useNavigate, useParams} from 'react-router-dom';

export default function WithDrawMoney() {
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
        amount:"",
        accountNo: ""
    })
    transaction.accountNo = customer.accountNo
    const{accountNo, amount} = transaction
    const onInputChange=(e)=>{
        setTransaction({[e.target.name]: e.target.value})
            }
    const save=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:9391/bank/customer/withdraw", transaction)
        navigate('/customer/balance/'+id)
            }
  return (
    <div>
        <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Withdraw Money</h2>
                <form onSubmit={(e)=>save(e)}>
                    <div className='mb-3'>
                    <input type={"text"}
                    className="form-control"
                    placeholder='Enter your name'
                    name="accountNo"
                    value={transaction.accountNo}
                    readOnly
                     />
                    </div>

                    <div className='mb-3'>
                    <input type={"number"}
                    className="form-control"
                    placeholder='Enter Amount to be Deposited'
                    name="amount"
                    value={amount}
                    onChange={(e)=>onInputChange(e)} />
                    </div>


                    <button type='submit' className='btn btn-outline-primary'>Submit</button>
                    &nbsp;
                    <button type='submit' className='btn btn-outline-danger'>Cancel</button>
                </form>
                
            </div>
        </div>
    </div>
</div>
  )
}
