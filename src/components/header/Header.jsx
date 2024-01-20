// import React from 'react'
import { NavDesktop } from './navbar component/nav-desktop'
import { NavMobile } from './navbar component/nav-mobile'
import { logo } from '../../assets'


const Header = () => {
  return (
    <div className='my-4 mx-2 flex justify-between'>
        <a href="/">
            <img src={logo} alt="sm-logo" className='w-32 h-11 sm:w-48 sm:h-16 sm:'/>
        </a>
        <NavDesktop/>
        <NavMobile/>
    </div>
  )
}

export default Header