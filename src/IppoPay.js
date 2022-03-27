import {Ippopay} from 'react-ippopay';
import React,{ Component,useState,useEffect } from 'react';
import axios from 'axios';
import {isEmpty} from 'ramda'

var data = {}

export default class App extends Component {
  state = {
    ippopayOpen: false,
    order_id:'order_S86DSSsVr',
    public_key:'pk_live_U0ZsEL0n8IRx'
  };

  ippopayHandler = async e => {

   // alert(JSON.stringify(e.data.status))
    console.log(this.props,"trusttt")
    if(e.data.status == 'success'){
      //  let {setOpenUrl} = this.props
      console.log("success0i0i0i0",data)
      console.log(data,"user~~~~~~~~~~~~~~")
      if(!isEmpty(data)){
        let {setOpenUrl} = this.props

         await axios.post('https://7c77zipbl1.execute-api.us-east-1.amazonaws.com/prod/create', data).then(response => {
						console.log(response.status==200)
						alert("user created succesfully !!!!!!")
            // location.reload();

						 this.props.props.history.push('/login');
             setOpenUrl(false)
					  }).catch(error => {
						  console.log("user not created please contact admin!!!!!!")
              this.props.props.history.push('/login');
              setOpenUrl(false)

					});
        }
        console.log(e.data,"~~~~~~^")
    }
    if(e.data.status == 'failure'){
        console.log(e.data)
    }
  }
  componentDidMount(){
    this.ippopayOpen()

  }
  componentDidUpdate(prevProps,prevState){
    if(prevProps!=this.props){
      console.log("trrrr uppp")
      this.ippopayOpen()
    }
    
    window.addEventListener('message', this.ippopayHandler);
  }
  ippopayOpen(){
    this.setState({ippopayOpen: true});
  }
  render() {
    let {pass,orderId,userBody} = this.props
    data = userBody
    console.log(userBody,"ippo userBody")
    return (<>
    {pass && (
      <div>
        <Ippopay ippopayOpen={this.state.ippopayOpen} pass ={this.state.ippopayOpen} ippopayClose={true} order_id={orderId} public_key={this.state.public_key}
          />
      </div> 
    )}
      </>
      
    );
  }
}
