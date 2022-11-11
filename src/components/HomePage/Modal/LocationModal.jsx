import {Button, Modal} from 'react-bootstrap'
import {useState} from 'react'
import {setEircode} from '../../../Redux/actions'
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import './LocationModal.css'

const LocationModal = () => {

const address = useSelector((state) => state.address)

// const split_address = address.split(',')[2]

  const [show, setShow] = useState(false);
  const [currEircode, setCurrEircode] = useState()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //const coordinates = useSelector((s) => s);
  const dispatch = useDispatch();

  return(
    <>
    {address ? <h5 variant="light" className='align-items-center pt-2' onClick={handleShow}>
        {address.split(',')[0]}
      </h5> : <h5 variant="light" className='align-items-center pt-2' onClick={handleShow}>
        Set Location
      </h5>}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please enter Eircode or Address</Modal.Title>
        </Modal.Header>
        <Modal.Body><input type='text' placeholder='eircode' ></input></Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => 
            dispatch(setEircode(currEircode))
          }>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default withRouter(LocationModal)