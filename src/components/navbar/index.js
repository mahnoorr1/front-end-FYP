import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  

const Navbar = () => {
  return (
    <>
      <Nav style={{position: 'fixed', width: '98%',zIndex: '700'}}>
        <Bars />
        <img style={{
            height: '35px',
            width: '143.5px', 
            display: 'flex',
            alignSelf: 'center',
            }} src={require('../../appLogo.png')}></img>
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <NavMenu>
          <NavLink to='/about' activeStyle>
            Dashboard
          </NavLink>
          <NavLink to='/events' activeStyle>
            Plans
          </NavLink>
          <NavLink to='/createRoadPlan' activeStyle>
            My Business
          </NavLink>
          <NavLink to='/team' activeStyle>
            Routing
          </NavLink>
          <NavLink to='/blogs' activeStyle>
            Help and Support
          </NavLink>
          
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/'>Sign In</NavBtnLink>
        </NavBtn>
        </div>
      </Nav>
    </>
  );
};
  
export default Navbar;