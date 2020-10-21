import React from 'react'
import {Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink} from './NavbarElement'
const Navbar = () => {
    return (
        <>
           <Nav>
               <NavLink to='/'>
               <img src={require('../../images/logo.svg')} alt='logo' />
               </NavLink>
               <Bars/>
               <NavMenu>
                   <NavLink to='/about' activeStyle>About</NavLink>
                   <NavLink to='/service' activeStyle>Services</NavLink>
                   <NavLink to='/contact-us' activeStyle>Contact us</NavLink>
                   <NavLink to='/sign-up' activeStyle>SignUp</NavLink>
                   {/* <NavLink to='/about' activeStyle>About</NavLink> */}
               </NavMenu>
               <NavBtn>
                   <NavBtnLink to='/signin'>Sign In</NavBtnLink>
               </NavBtn>
           </Nav>
        </>
    )
}

export default Navbar
