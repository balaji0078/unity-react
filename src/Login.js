import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { setUserSession } from './Utils/Common';
import jwt from 'jwt-decode'

function Login(props) {
  const [loading, setLoading] = useState(false);
  const [verifyOtp, setVerifyOtp] = useState(false);
  const [name, setName] = useState('Bala');


  const username = useFormInput('');
  const password = useFormInput('');
  const otpVal = useFormInput('');

  const [error, setError] = useState(null);

  useEffect(() => {
   // localStorage.clear()
    // Update the document title using the browser API
  });
  // handle button click of login form
  const handleLogin = () => {
    // setError(null);
    setLoading(true);
    axios.post('http://54.194.76.216:5000/login', { mobile: username.value}).then(response => {
      setLoading(false);
      setVerifyOtp(true);

      // setUserSession(response.data.token, response.data.user);
   //   props.history.push('/dashboard');
    }).catch(error => {
      setLoading(false);
      // if (error.response.status === 401) setError(error.response.data.message);
     setError("Something went wrong. Please try again later.");
    });
  }
  const handleOtp = () =>{
    setLoading(true);
    axios.post('http://54.194.76.216:5000/verifyToken', { mobile: username.value,otp:otpVal.value}).then(res => {
      const token = res.data.token;
      localStorage.clear();
      const user = jwt(token); // decode your token here
      const id = user.id
      const name = user.name
      localStorage.setItem('token', token);
      localStorage.setItem('uid', id);
      localStorage.setItem('name', name);
      setLoading(false);
      // setUserSession(response.data.token, response.data.user);
      props.history.push('/user');
    }).catch(error => {
      setLoading(false);
      // if (error.response.status === 401) setError(error.response.data.message);
     setError("Something went wrong. Please try again later.");
    });

  }

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

		const data = await fetch('http://54.194.76.216:5000/razorpay', { method: 'POST' }).then((t) =>
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
				alert(response.razorpay_payment_id)
				alert(response.razorpay_order_id)
				alert(response.razorpay_signature)
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
      <p className='fs-6'>Login</p>
     { verifyOtp == false &&
      <>
      <p className='fs-6' style={{paddingLeft:'17px'}}>Mobile No
      </p>
      <div className="input-group" style={{width:'fit-content'}}>
        <br />
        <input className="form-control" type="number" {...username} style={{marginLeft:'1rem'}} autoComplete="new-password" />
        <span class="input-group-text" id="basic-addon2">+ 91</span>

      </div>
      <br/>
      {/* <button type="button" class="btn btn-primary"> */}
      <input type="button" className='btn btn-primary' style={{marginLeft:'12px'}} value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
      {/* </button> */}
      </>
    }

{ verifyOtp &&
      <>
      <p className='fs-6' style={{paddingLeft:'17px'}}>Verify OTP
      </p>
      <div className="input-group" style={{width:'fit-content'}}>
       <br />
        <input className="form-control" type="number" {...otpVal} style={{marginLeft:'1rem'}} autoComplete="new-password" />
      </div>
      <br/>

      <input type="button" className='btn btn-primary' style={{marginLeft:'12px'}} value={'Verify otp'} onClick={handleOtp} disabled={loading} /><br />
      </>
    }
    </div>
      
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Login;