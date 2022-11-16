import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';

export default function Home() {
    
  let navigate = useNavigate();
  const [login, setLogin] = useState({
      username : '',
      password: '',
  })

  const {username, password} = login

  const onInputChange=(e)=>{
      setLogin({...login,[e.target.name]: e.target.value})
          }
  
          const save=async(e)=>{
              e.preventDefault();
      

              const result = await axios.post("http://localhost:9391/bank/customer/login", login)
              if(result.data === 'Logged-In'){
                navigate('/dashboard/'+username)
              }
              else{
                navigate('/')
              }
              

                    
                  
                      
          }
return (
  <div>
      <div>
      

      <div className='container'>
      <div className='row'>
          <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
              <h2 className='text-center m-4'>Login Form</h2>
              <form onSubmit={(e)=>save(e)}>
                  <div className='mb-3'>
                  <input type={"text"}
                  className="form-control"
                  placeholder='Enter username'
                  name="username"
                  value={username} 
                  onChange={(e)=>onInputChange(e)} />
                  </div>

                  <div className='mb-3'>
                  <input type={"password"}
                  className="form-control"
                  placeholder='Enter password'
                  name="password"
                  value={password} 
                  onChange={(e)=>onInputChange(e)} />
                  </div>

                  
                  <button type='submit' className='btn btn-outline-primary'>Submit</button>
                  &nbsp;

                  <Link type='submit' className='btn btn-outline-danger' to='/'>Cancel</Link>
                  </form>
              </div>
          </div>
      </div>
  </div>
  </div>
)
}