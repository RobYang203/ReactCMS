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

export function Confirm({isShow, msg , onConfirm ,  onWindowShow}){
    return(
        <Modal show={isShow} centered onHide={()=>{onWindowShow(false)}} backdrop="static" >
            <Modal.Header closeButton>
                Message
            </Modal.Header>
            <Modal.Body >
                {msg}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-primary" onClick={()=>{ onConfirm()}}>Confirm</Button>   
            </Modal.Footer>     
        </Modal>
    );
}