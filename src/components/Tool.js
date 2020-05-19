import React from 'react';
import { Toast,Button, Modal } from "react-bootstrap";
import {useState} from 'react'
export function Alert({isShow , msg , onWindowShow}){
    const showBtnClose = onWindowShow !== undefined;
    return(
        <Modal show={isShow} centered onHide={()=>{onWindowShow(false)}} backdrop="static" >
            <Modal.Header closeButton>
                Message
            </Modal.Header>
            <Modal.Body >
                {msg}
            </Modal.Body>         
        </Modal>

    );
}

export function Confirm({isShow,msg , onConfirm ,  onWindowShow}){
    const [show, setShow] = useState(isShow);
    const showBtnClose = onWindowShow !== undefined;
    return(
        <Modal show={show} centered onHide={()=>{onWindowShow(false)}} backdrop="static" >
            <Modal.Header closeButton>
                Message
            </Modal.Header>
            <Modal.Body >
                {msg}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-primary" onClick={()=>{ onWindowShow(false); onConfirm()}}>Cancel</Button>
                <Button variant="outline-secondary" onClick={()=>{ onWindowShow(false);}}>Cancel</Button>     
            </Modal.Footer>     
        </Modal>
    );
}