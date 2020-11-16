import React from 'react'
import { NavLink } from 'react-router-dom'
import image from '../assets/logo512.png'

export const SecondPage: React.FC = () => (
  <>
    <h1>Second page</h1>
    <NavLink to='/first'>
      First page
    </NavLink>
    <div>
      <img src={image} alt="logo" />
    </div>
  </>
)