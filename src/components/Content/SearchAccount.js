import React, { useState, useRef } from 'react';
import {Table, InputGroup, FormControl, Button} from 'react-bootstrap'
import { connect } from 'react-redux';
import {getLoginInfo , userLogout} from '../../redux/ActionCreator'
import {logoutToWeb} from '../../API/API'
function SearchAccount({loginInfo , getLoginInfo ,showConfirmWin , userLogout , history}) {
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
        <div className="article-content">
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Input keyword of search"
                    aria-label="Input keyword of search"
                    aria-describedby="basic-addon2"
                    />
                <InputGroup.Append>
                    <Button variant="outline-secondary">Search</Button>
                </InputGroup.Append>
            </InputGroup>
            <Table striped bordered hover size="sm">
            <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>  
            </Table>
        </div>
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

export default connect(mapStateToProps , mapDispatchToProps)(SearchAccount);
 