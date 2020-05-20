import React, { useState, useRef, useEffect } from 'react';
import {Table, InputGroup, FormControl, Button} from 'react-bootstrap'
import { connect } from 'react-redux';
import {getUserList} from '../../redux/ActionCreator'
import {getfilterUserList} from '../../API/API'
function SearchAccount({userList,getUserList}) {
    const [tableList , setTableList] = useState(userList);
    const searchInput = useRef(null);
    const setDataList = (list)=>{
        const retList = [];
        list.map((item)=>{
            
            const tmp =<tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.account}</td>
                    <td>{item.name}</td>
                    <td>{new Date(item.createDate).toDateString()}</td>
                </tr>
            retList.push(tmp);

        });

        return retList;
    }
    const onSearchClick =()=>{
        const searchValue = searchInput.current.value;
        getUserList(searchValue);
    }
    useEffect(()=>{
        setTableList(setDataList(userList));
    },[userList]);
    return (
        <div className="article-content">
            <InputGroup className="mb-3">
                <FormControl
                    ref={searchInput}
                    placeholder="Input keyword of search"
                    aria-label="Input keyword of search"
                    aria-describedby="basic-addon2"
                    />
                <InputGroup.Append>
                    <Button variant="outline-secondary" onClick={onSearchClick}>Search</Button>
                </InputGroup.Append>
            </InputGroup>
            <Table striped bordered hover size="sm">
            <thead>
                    <tr>
                    <th>#</th>
                    <th>Account</th>
                    <th>Name</th>
                    <th>Create Date</th>
                    </tr>
                </thead>
                <tbody>
                    {tableList}                 
                </tbody>  
            </Table>
        </div>
    );

}
const mapStateToProps = (state)=>{
    return {
      userList :state.userList.userList
    }
};

const mapDispatchToProps = (dispatch)=>{
  return {
      getUserList:(key)=>{
        getfilterUserList(key).then((list)=>{
          dispatch(getUserList(list));
        })        
      }
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(SearchAccount);
 