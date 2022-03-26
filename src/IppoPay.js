import {Ippopay} from 'react-ippopay';
import React,{ Component,useState,useEffect } from 'react';


export default class App extends Component {
  state = {
    ippopayOpen: false,
    order_id:'order_S86DSSsVr',
    public_key:'pk_live_U0ZsEL0n8IRx'
  };
  ippopayHandler(e){
    if(e.data.status == 'success'){
        console.log(e.data)
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
    let {pass,orderId} = this.props
    console.log(orderId,"orderIdorderId")
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
