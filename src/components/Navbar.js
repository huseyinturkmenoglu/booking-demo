import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navContainer'>
            <span className='navLogo'>bookingDemo</span>
            <div className="navItems">
                <button className='navButton'>Register</button>
                <button className='navButton'>Login</button>
            </div>

        </div>

    </div>
  )
}

export default Navbar