import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

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
          <NavLink exact to='/dashboard' activeClassName="active">
            Dashboard
          </NavLink>
          <NavLink exact to='/allRoadPlans' activeClassName="active">
            Plans
          </NavLink>
          <NavLink exact to='/createRoadPlan' activeClassName="active">
            My Business
          </NavLink>
          <NavLink exact to='/routing' activeClassName="active">
            Routing
          </NavLink>
          <NavLink exact to='/help' activeClassName="active">
            Help and Support
          </NavLink>
          <NavLink exact to='/pricing' activeClassName="active">
            Payment
          </NavLink>
          
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtnLink to={'/profile'}>
          {/* <NavBtnLink to='/'>Sign In</NavBtnLink> */}
          <FontAwesomeIcon icon={faUser} size='1x' />
        </NavBtnLink>
        </div>
      </Nav>
    </>
  );
};
  
export default Navbar;