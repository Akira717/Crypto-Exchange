import React, {useEffect,useState} from 'react';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavbarContainer, NavItem, NavLink, NavLogo, NavMenu,NavBtn ,NavBtnLink} from './NavbarElements';

const Navbar = ({ toggle}:any) => {
    const [showBtn, setshowBtn] = useState(false);

    const toggleHome = () => {
      scroll.scrollToTop();
    };
    useEffect(()=>{
      if(localStorage.getItem('user'))
      {
        console.log('user');
        setshowBtn(true);
      }
    });
    
    const deleteUser = () =>
    {
      localStorage.removeItem('user');
    }
  
    return (
      <>
        <IconContext.Provider value={{ color: '#fff' }}>
          <Nav>
            <NavbarContainer>
              <NavLogo to='/' onClick={toggleHome}>
                BXO Pro
              </NavLogo>
              <NavMenu>
                <NavItem>
                  <NavLink to='/Home' >Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to='/Market'>Market</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to='/trade'>Trade</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to='/'>Stake</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to='/'>Wallet</NavLink>
                </NavItem>
              </NavMenu>
            </NavbarContainer>
            <NavBtn style={{display:showBtn === true ? "none":"block"}}>
              <NavBtnLink to="/login">Log In</NavBtnLink>
              <NavBtnLink to="/signup">Create Account</NavBtnLink>
            </NavBtn>
            <NavBtn onClick={deleteUser} style={{display:showBtn === false ? "none":"block"}}>
              <NavBtnLink to="/">Log Out</NavBtnLink>
            </NavBtn>

          </Nav>
        </IconContext.Provider>
      </>
    );
  };

export default Navbar;