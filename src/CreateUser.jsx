/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/react-in-jsx-scope */
import React,{useState} from 'react'
import { Dropdown,Message, toaster,Loader,Paragraph } from 'rsuite';
import { Select,Box,Textarea,Spinner } from 'theme-ui'
import axios from 'axios';
import 'rsuite/dist/rsuite.min.css'


export default function Form(props) {

// States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [refferal, setReferral] = useState('');
const [dropDownType, setDropDownType] = useState(1);
const [address, setAddress] = useState('');
const [enableSpinner, setSpinner] = useState(false);


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

// Handling the form submission
const handleSubmit = async(e) => {
	e.preventDefault();
	if (name === '' || email === '') {
	setError(true);
	} 
  else
   {
	let body ={
		name:name,
		mobile:email,
		address:address,
		referrer:refferal,
		areaId:1,
		type:dropDownType
	  }
    axios.post('https://7c77zipbl1.execute-api.us-east-1.amazonaws.com/prod/create', body).then(response => {
						setSpinner(false)
						console.log(response.status==200)
						alert("user created succesfully !!!!!!")
						props.history.push('/');
					  }).catch(error => {
				
						alert("user not created please contact admin!!!!!!")
						props.location.reload();
					});
    // setError(false); 
	// await displayRazorpay();
	//   console.log(verifyPay,"vpayyyy")

	//   if(verifyPay=='success'){

	// 	}

     

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

function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = src
      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }
      document.body.appendChild(script)
    })
  }

  async function displayRazorpay() {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

    console.log(res,"ressss")

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

		const data = await fetch('https://7c77zipbl1.execute-api.us-east-1.amazonaws.com/prod/razorpay', { method: 'POST' }).then((t) =>
			t.json()
		)

		console.log(data)

		const options = {
			key: 'rzp_test_td5Af2X9GYXNnl',
			currency: data.currency,
			amount: data.amount.toString(),
			order_id: data.id,
			name: 'Donation',
			description: 'Thank you for nothing. Please give us some money',
			// image: 'http://localhost:1337/logo.svg',
			handler: function (response) {
				setSpinner(true)
				let body ={
					name:name,
					mobile:email,
					address:address,
					referrer:refferal,
					areaId:1,
					type:dropDownType
				  }
			     if(response){
					axios.post('https://7c77zipbl1.execute-api.us-east-1.amazonaws.com/prod/create', body).then(response => {
						setSpinner(false)
						console.log(response.status==200)
						alert("user created succesfully !!!!!!")
						props.history.push('/');
					  }).catch(error => {
				
						alert("user not created please contact admin!!!!!!")
						props.location.reload();
					});

				 }

				// alert(response.razorpay_payment_id)
				// alert(response.razorpay_order_id)
				// alert(response.razorpay_signature)
				return 'success'
				
			},
			prefill: {
        name,
				email: 'bala12@mailnesia.com',
				phone_number: '7904306518'
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	}


  


return ( 
<div>
{enableSpinner && <Loader center content="loading" />}

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
