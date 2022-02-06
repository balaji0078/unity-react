/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/react-in-jsx-scope */
import React,{useState} from 'react'
import { Dropdown,Message, toaster,Loader,Paragraph } from 'rsuite';
import { Select,Box,Textarea } from 'theme-ui'
import axios from 'axios';
import 'rsuite/dist/rsuite.min.css'


export default function Form() {

// States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [refferal, setReferral] = useState('');
const [dropDownType, setDropDownType] = useState(1);
const [address, setAddress] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleName = (e) => {
	setName(e.target.value);
	setSubmitted(false);
};

const handleAddress =(e)=>{
  setAddress(e.target.value)
  console.log(e.target.value)

}
const HandleLoader = () =>{
  return (
    <Loader center content="loading" />
  )
}

// Handling the email change
const handleEmail = (e) => {
	setEmail(e.target.value);
	setSubmitted(false);
};

// Handling the password change
const handleRefferal = (e) => {
	setReferral(e.target.value);
  console.log(e.target.value,refferal)
	setSubmitted(false);
};

// Handling the form submission
const handleSubmit = (e) => {
	e.preventDefault();
	if (name === '' || email === '' || address === '') {
	setError(true);
	} 
  else
   {
    
    setError(false);
   
      let body ={
        name:name,
        mobile:email,
        address:address,
        referrer:refferal,
        areaId:1,
        type:dropDownType
      }

      axios.post('http://54.194.76.216:5000//create', body).then(response => {
        console.log(response.status==200)
        props.history.push('/login');


        // setUserSession(response.data.token, response.data.user);
    //   props.history.push('/dashboard');
      }).catch(error => {

        return(<>
          <Message type="success" /></>
        )
        // if (error.response.status === 401) setError(error.response.data.message);
      setError("Something went wrong. Please try again later.");
      });

	}
};

const selectType = (e) =>{
  setDropDownType(e.target.value)
  console.log(e.target.value,"eeeedrcrrdcre")
  }

// Showing success message
const successMessage = () => {
	return (
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}}>
		<h1>User {name} successfully registered!!</h1>
	</div>
	);
};

// Showing error message if error is true
const errorMessage = () => {
	return (
	<div
		className="error"
		style={{
		display: error ? '' : 'none',
		}}>
		<h1>Please enter all the fields</h1>
	</div>
	);
};

return ( 

<div className="form">
	<div>
		<h1>User Registration</h1>
	</div>

	{/* Calling to the methods */}
	<div className="messages">
		{errorMessage()}
		{successMessage()}
	</div>

	<form>
		{/* Labels and inputs for form data */}
    <div className='row col-2'>
		<label className="label fs-6" style={{paddingLeft:'12px'}}>Name</label>
		<input onChange={handleName} style={{marginLeft:'12px'}}  className="form-control"
		value={name} type="text"  />
    </div>
    <div className='row col-2'>
		<label className="label fs-6" style={{paddingLeft:'12px'}}>Mobile</label>
		<input onChange={handleEmail} style={{marginLeft:'12px'}} className="form-control"
		value={email} type="email" />
    </div>
    <div className='row col-2'>
		<label className="label fs-6" style={{paddingLeft:'12px'}}>referrer</label>
		<input onChange={handleRefferal} style={{marginLeft:'12px'}} className="form-control"
		value={refferal} type="text" />
    </div>
  <div className='row col-2'>
	  <label className="label fs-6" style={{paddingLeft:'12px'}}>Select Type</label>
    <Select defaultValue="1" rows={15} onClick={(e)=>selectType(e)}>
        <option value={"1"}>User</option>
        <option value={"2"}>Store</option>
    </Select>
    </div>
    <div className='row col-2'>
    <label className="label" style={{paddingLeft:'12px'}}>Address</label>
      <Textarea defaultValue="" style={{marginLeft:10}} rows={4} onClick={(e)=>handleAddress(e)}>
      </Textarea>
    </div>
    <div className='row col-2 pt-4'>
		<button onClick={handleSubmit} className="btn btn-primary" type="submit" style={{marginLeft:6}}>
		Submit
		</button>
    </div>
	</form>
	</div>
);
}
