import React, { useState } from 'react' 

function Navbar() {
  return (
    <>
        <div className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className="navbar-logo">
                  TRVL
                </Link>
            </div>
        </div>
    </>
  )
}

export default Navbar