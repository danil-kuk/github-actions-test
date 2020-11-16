import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../logo.svg';

export const FirstPage: React.FC = () => (
  <>
    <h1>First page</h1>
    <NavLink to='/second'>
      Second page
    </NavLink>
    <div>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  </>
)