import React, { useState, useRef } from 'react';
import logo from '../../logo.svg';
import {Navbar,Nav, Overlay, Popover} from 'react-bootstrap'
import { connect } from 'react-redux';
import {getLoginInfo , userLogout} from '../../redux/ActionCreator'
import {logoutToWeb} from '../../API/API'
function Header({loginInfo , getLoginInfo ,showConfirmWin , userLogout , history}) {
    const [show , setShow] = useState(false);
    const [target , setTarget] = useState(null);
    const ref = useRef(null);

    const onUserInfoClick = (event)=>{
      getLoginInfo();
      setShow(!show);
      setTarget(event.target);
    };
    const confirmLogOut = (e)=>{
      showConfirmWin(true , "Do you want to logout?" ,logout);
    }
    const logout = ()=>{
      userLogout();
    }

    return (
        <>
          <Navbar bg="dark" variant="dark" fixed="top" sticky="top" className="headerBar" bsPrefix="">
              <Navbar.Brand href="/" > 
                  <img src={logo} alt="logo" className="btnLogo" />
                  CMS
              </Navbar.Brand>
              <Navbar.Collapse>
                <Nav className="mr-auto"></Nav>
                <Nav>
                  <Nav.Link onClick={(e)=>{onUserInfoClick(e)}}>
                    <i  class="fa fa-binoculars headerIcon"></i>
                  </Nav.Link>
                  <Nav.Link onClick={(e)=>{confirmLogOut(e)}}>
                    <i class="fa fa-power-off headerIcon"></i>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
          </Navbar>
          <Overlay show={show} target={target} placement={"bottom"}  container={ref.current} containerPadding={20}>
            <Popover  >
                <Popover.Title as="h3">User Information</Popover.Title>
                <Popover.Content>
                   <div>account :{loginInfo.account}</div> 
                   <div>name : {loginInfo.name} </div>
                </Popover.Content>
            </Popover>
          </Overlay>
        </>
    );

}
const mapStateToProps = (state)=>{
    return {
      loginInfo :state.login.userInfo
    }
};

const mapDispatchToProps = (dispatch)=>{
  return {
      getLoginInfo:()=>{
        dispatch(getLoginInfo()); 
      },
      userLogout:()=>{
        logoutToWeb().then(()=>{
          dispatch(userLogout());
        })
        
      }
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(Header);
 