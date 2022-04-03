/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/react-in-jsx-scope */
import React,{useState} from 'react'
import { Dropdown,Message, toaster,Loader,Paragraph } from 'rsuite';
import { Select,Box,Textarea,Spinner } from 'theme-ui'
import axios from 'axios';
import 'rsuite/dist/rsuite.min.css';
import IppoPay from './IppoPay';
import {pathOr} from 'ramda'
// import fetch from 'node-fetch';


export default function Form(props) {

// States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [refferal, setReferral] = useState('');
const [dropDownType, setDropDownType] = useState(1);
const [address, setAddress] = useState('');
const [enableSpinner, setSpinner] = useState(false);
const [openUrl,setOpenUrl]= useState(false);
const [orderIds, setorderIds] = useState('');
const [userBody, setUserBody] = useState({});

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

const checkUserValidation = async(data,headers)=>{


	let res = await axios.post('https://7c77zipbl1.execute-api.us-east-1.amazonaws.com/prod/userValidation',data,{headers:headers}).then(response => {
		return response.data
	  }).catch(error => {
		alert(JSON.stringify(error.response.data.status))
	});

	return res

}

// Handling the form submission
const handleSubmit = async(e) => {
	e.preventDefault();
	let amount = 118.00
	if (name === '' || email === '',address ==='',refferal ==='') {
	   setError(true);
	   return
	}
	else{
 
	const headers = {
		'Content-Type': 'application/json'
	  }
	let ippPayBody = {
        "amount": amount,
        "name": name,
        "email": email,
    }

		let body ={
		"name":name,
		"mobile":email,
		"address":address,
		"referrer":refferal,
		"areaId":1,
		"type":1
	  }
	  let uservalidationBody = {
		"mobile":email,
		"referral_code":refferal,
	  }

	  let ValidationUser = await checkUserValidation(uservalidationBody,headers)
	  console.log(ValidationUser,"ValidationUserValidationUser")
	  if(ValidationUser.code == 200){
	    setUserBody(body)
	    await axios.post('https://7c77zipbl1.execute-api.us-east-1.amazonaws.com/prod/createOrderID',ippPayBody,{headers:headers}).then(response => {
						setSpinner(false)
						console.log(response.status==200,"order id created")
						let orderId = pathOr('',['data','data','order','order_id'],response)
						setorderIds(orderId)


						console.log(orderId,"orderId")
						if(response.status==200){
							setOpenUrl(true)

						}
						// alert("user created succesfully !!!!!!")
						//props.history.push('/');
					  }).catch(error => {
				
						alert("user and order id is not created please contact admin!!!!!!")
						props.location.reload();
			});
		}
	}
};

const selectType = (e) =>{
  setDropDownType(e.target.value)
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
const openHippopay = () =>{
	console.log(userBody,"userBodyuserBodyuserBody")
	return( <IppoPay pass={true} orderId={orderIds} userBody={userBody} setOpenUrl={setOpenUrl} props={props}/>)

}

return ( 
<div>
{enableSpinner && <Loader center content="loading" />}
{openUrl && openHippopay()}
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
		value={email} type="text" />
    </div>
    <div className='row col-2'>
		<label className="label fs-6" style={{paddingLeft:'12px'}}>referrer</label>
		<input onChange={handleRefferal} style={{marginLeft:'12px'}} className="form-control"
		value={refferal} type="text" />
    </div>
    <div className='row col-2'>
    <label className="label" style={{paddingLeft:'12px'}}>Address</label>
     <Textarea defaultValue="" style={{marginLeft:10}} rows={4} onChange={(e)=>handleAddress(e)}>
      </Textarea>
    </div>
    <div className='row col-2 pt-4'>
		<button onClick={handleSubmit} className="btn btn-primary" type="submit" style={{marginLeft:6}}>
		Submit
		</button>
    </div>
	</form>
	</div>
	</div>
);
}
