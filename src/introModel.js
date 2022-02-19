import { Modal,ButtonToolbar,Paragraph,Loader,Button,Placeholder } from 'rsuite';
import React,{useEffect}  from 'react';
import Introduction from './introduction'

const App = (props) => {
    const [open, setOpen] = React.useState(false);
    const [rows, setRows] = React.useState(0);
    const handleOpen = () => setOpen(true);
    const handleClose = () => 
    {
      props.history.push('/login')  
      setOpen(false);
    }
    const { Paragraph } = Placeholder;


   useEffect(() => {
    handleOpen();
      
   }, [])
    const handleEntered = () => {
      setTimeout(() => setRows(80), 20);
    };
  
    return (
      <div className="modal-container">
        {/* <ButtonToolbar>
          <Button onClick={handleOpen}>Open</Button>
        </ButtonToolbar> */}
  
        <Modal
          open={open}
          onClose={handleClose}
          onEntered={handleEntered}
        //   onExited={() => {
        //     setRows(0);
        //   }}
        >
          <Modal.Header>
            <Modal.Title>Digital Unity</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {rows ? (
            <>
              <Introduction/>
              <Paragraph />
            </>  
            
              
            ) : (
              <div style={{ textAlign: 'center' }}>
                <Loader size="md" />
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose} appearance="primary">
              Ok
            </Button>
            <Button onClick={handleClose} appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  };
export default App;  