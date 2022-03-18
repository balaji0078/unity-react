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
const [Coupon, setCoupon] = useState('');
const [product, setProduct] = useState('');
const [refferal, setReferral] = useState('');
const [dropDownType, setDropDownType] = useState(1);
const [enableSpinner, setSpinner] = useState(false);
const [pin, setPin] = useState();
const [amount, setAmount] = useState();




// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleName = (e) => {
	setCoupon(e.target.value);
	setSubmitted(false);
};

// const handleAddress =(e)=>{
//   setAddress(e.target.value)
// }
// const HandleLoader = () =>{
//   return (
//     <Loader center content="loading" />
//   )
// }

// Handling the email change
const handleEmail = (e) => {
	setEmail(e.target.value);
	setSubmitted(false);
};

// Handling the password change
// const handleRefferal = (e) => {
// 	setReferral(e.target.value);
//   console.log(e.target.value,refferal)
// 	setSubmitted(false);
// };

// Handling the form submission
const handleSubmit = async(e) => {
	// e.preventDefault();
	if (Coupon === '' || product === '' || amount==='' || pin==='') {
	setError(true);
	} 
  else
   {
	let body ={
		coupon:Coupon,
		product:product,
		type:dropDownType,
		amount:amount,
		pin:pin
	  }

	  alert(dropDownType)
    let token = localStorage.getItem('token');
    const headers = {
      'x-access-token': token
    }
	
    if(token!=null){
		
  
    axios.post(' https://7c77zipbl1.execute-api.us-east-1.amazonaws.com/prod/copounRedeem', body,{headers:headers}).then(response => {
						setSpinner(false)
						console.log(response.status==200)
						alert("Transaction done succesfully !!!!!!")
						window.location.reload()
						props.history.push('/payform');
					  }).catch(error => {
				
						alert(`${error.statusText}`)
					});
        }
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

const handleProducts = (e) =>{
  setProduct(e.target.value)
}  

const handlePin = (e) =>{
  setPin(e.target.value)
}

const handleAmount = (e) =>{
  setAmount(e.target.value)
}


// Showing success message
const successMessage = () => {
	return (
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}}>
		<h1>Amount Debited suucessfully!!</h1>
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
<div>
{enableSpinner && <Loader center content="loading" />}

<div className="form">
	<div>
		<h1>Coupon Redeem</h1>
	</div>

	{/* Calling to the methods */}
	<div className="messages">
		{errorMessage()}
		{successMessage()}
	</div>

	<form>
		{/* Labels and inputs for form data */}
    <div className='row col-2'style={{width:'fit-content'}}>
		<label className="label fs-6" style={{paddingLeft:'12px'}}>Coupon</label>
		<input onChange={handleName} style={{marginLeft:'12px'}}  className="form-control"
		value={Coupon} type="text"  />
    </div>
    <div className='row col-2' style={{width:'fit-content'}}>
	  <label className="label fs-6" style={{paddingLeft:'12px'}}>Coupon Type</label>
    <Select defaultValue="1" rows={15} onClick={(e)=>selectType(e)}>
        <option value={"1"}>Cashback</option>
        <option value={"2"}>Product</option>
    </Select>
    </div>
    <div className='row col-2'style={{width:'fit-content'}}>
		<label className="label fs-6" style={{paddingLeft:'12px'}}>Products</label>
		<input onChange={handleProducts} style={{marginLeft:'12px'}} className="form-control"
		value={product} type="text" />
    </div>
    <div className='row col-2' style={{width:'fit-content'}}>
		<label className="label fs-6" style={{paddingLeft:'12px'}}>Pin</label>
		<input onChange={handlePin} style={{marginLeft:'12px'}} className="form-control"
		value={pin} type="text" />
    </div>

    <div className='row col-2' style={{width:'fit-content'}}>
    <label className="label fs-6" style={{paddingLeft:'12px'}}>Amount</label>
		<input onChange={handleAmount} style={{marginLeft:'12px'}} className="form-control"
		value={amount} type="text" />
    </div>
    <div className='row col-2 pt-4'style={{width:'fit-content'}}>
		<button onClick={handleSubmit} className="btn btn-primary" type="submit" style={{marginLeft:6}}>
		Submit
		</button>
    </div>
	</form>
	</div>
	</div>
);
}
