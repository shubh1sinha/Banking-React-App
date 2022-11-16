import React from 'react'
import { Link} from 'react-router-dom'

export default function Navbar() {

  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <div class="container-fluid">
        <Link class="navbar-brand" to='/'>Banking Application</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    

    <Link className='btn btn-outline-light' to='/registration'>Register</Link>
    <Link className='btn btn-outline-light' to='/employee'>Employee</Link>
    
  </div>
</nav>
    </div>
  )
}
