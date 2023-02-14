import React from 'react'
import { NavLink } from 'react-router-dom'
export default function NavBar() {
  return (
    <>
    <div className="mainNav">
      <div className='nav_section'>
        <div >
          <NavLink className='nav_btn' to="/"  style={({ isActive }) => ({
    color: isActive ?'#545e6f' :'#fff',
    background: isActive ? '#2fd9a0' : '#000000' ,
  })}>Home</NavLink>
        </div>
        <div >
          <NavLink className='nav_btn' to="/contact" style={({ isActive }) => ({
   color: isActive ?'#545e6f' :'#fff',
   background: isActive ? '#2fd9a0' : '#000000' ,
  })} >Contact</NavLink>
        </div>
      </div>
    </div>
    </>
  )
}
