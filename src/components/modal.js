
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import SignUpForm from './SignUpForm';

function ModalForm() {
    const [show, setShow] = useState(false);
  
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch static backdrop modal
        </Button>
  
        <Modal
          show={show}
          backdrop="static"
          keyboard={false}
        >
         <SignUpForm />
        </Modal>
      </>
    );
  }
  
  return(<ModalForm />);