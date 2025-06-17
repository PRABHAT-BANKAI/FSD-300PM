import React from 'react'

const Navbar = () => {
  return (
    <nav className='h-[70px] bg-amber-800 flex justify-between px-[10%] items-center'>
      <p>Logo</p>
      <ul className='flex gap-5'>
        <li>Home</li>
        <li>About</li>
        <li>contact</li>
        <li>Features</li>
      </ul>
    </nav>
  )
}

export default Navbar