import React from 'react';
import Tree from 'react-hierarchy-tree-graph';
import { Select, Box } from 'theme-ui'
import axios from 'axios';
import { Placeholder } from 'rsuite';



const { Paragraph } = Placeholder;

const dataWithCollapsedProperties = [
  {
    name: 'Top Level',
    children: [
      {
        name: '2: A',
        children: [
          {
            name: '3: Collapsed son of A',
            _collapsed: true,
            children: [
              {
                name: '4: Son of A',
              },
              {
                name: '4: Daughter of A',
              },
            ],
          },
          {
            name: '3: Daughter of A',
          },
        ],
      },
      {
        name: '2: B',
        children: [
          {
            name: '3: Collapsed son of A',
            _collapsed: true,
            children: [
              {
                name: '4: Son of A',
              },
              {
                name: '4: Daughter of A',
              },
            ],
          },
          {
            name: '3: Daughter of A',
          },
        ],

      },
      
      
    ],
  },
];
 const data = [
  {
      "name": "Austin",
      "children": [
          {
              "name": "john",
              "id": 244,
              "_collapse": true,
              "children": [
                  {
                      "name": "harish",
                      "id": 246,
                      "_collapse": true,
                      "children": [
                          {
                              "name": "jai",
                              "id": 251,
                              "_collapse": true,
                              "children": []
                          },
                          {
                              "name": "A1",
                              "id": 253,
                              "_collapse": true,
                              "children": [
                                  {
                                      "name": "A11",
                                      "id": 255,
                                      "_collapse": true
                                  }
                              ]
                          }
                      ]
                  },
                  {
                      "name": "mary",
                      "id": 248,
                      "_collapse": true,
                      "children": []
                  }
              ]
          },
          {
              "name": "tintu",
              "id": 245,
              "_collapse": true,
              "children": [
                  {
                      "name": "aadhi",
                      "id": 249,
                      "_collapse": true,
                      "children": []
                  },
                  {
                      "name": "jai",
                      "id": 250,
                      "_collapse": true,
                      "children": []
                  }
              ]
          }
      ]
  }
]

const Vertical = 'vertical'
class MyUserComponent extends React.Component {


    constructor() {
    super();
    this.state = {
      data: [],
      setUserData: [],
    };
    // Binding method
  }
  componentDidMount(){
    this.userChild();
    this.UserAmtCoupon();
  }


   userChild(){
    let token = localStorage.getItem('token');
    console.log(token,"tokentoken")
    const headers = {
      'Content-Type': 'application/json',
      'x-access-token': token

    }
    

    axios.post('https://7c77zipbl1.execute-api.us-east-1.amazonaws.com/prod/getchildList', {scheme:1},{headers:headers}).then(response => {

    this.setState({data:response.data})

    console.log(this.state.data.length,"array")
      

    console.log(response,"userData")


    }).catch(error => {
      alert(error)
    }); 

  }

  UserAmtCoupon = async() =>{
    let token = localStorage.getItem('token');
    console.log(token,"tokentoken")
    const headers = {
      'x-access-token': token,
      'Content-Type': 'application/json'
    }

    if(token!=null){
    axios.post('https://7c77zipbl1.execute-api.us-east-1.amazonaws.com/prod/userAmtCoupon',{},{headers:headers}).then(response => {
 
    this.setState({setUserData : response.data.data})
  }).catch(error => {
    alert(error)
  }); 
  }
  }
  render() {
    let coupon = sessionStorage.getItem('coupon')
    let pin = sessionStorage.getItem('pin')
    let name = localStorage.getItem('name')
    let mobile = sessionStorage.getItem('mobile')
    let referral = sessionStorage.getItem('referral_code')
    let amount = sessionStorage.getItem('amount')


    
    // let parsedData = JSON.parse(data)
     console.log(this.state.setUserData,"parsedData")

    return (
    <>
  {this.state.setUserData.length >= 1 &&  (      
      <><div className='row'>
            <div className='col-3'>
              <p>
                <small style={{ fontWeight: 'bold' }}>
                  Name: {name}
                </small>
                <br />
              </p>
            </div>
            <div className='col-3'>
              <p>
                <small style={{ fontWeight: 'bold' }}>
                  Referral Code: {referral}
                </small>
                <br />
              </p>
            </div>
            <div className='col-3'>
              <p>
                <small style={{ fontWeight: 'bold' }}>
                  Mobile: {mobile}
                </small>
                <br />
              </p>
            </div>
            <div className='col-3'>
              <p>
                <small style={{ fontWeight: 'bold' }}>
                   Pin: {this.state.setUserData[0].otp?pin:pin}
                  
                </small>
                <br />
              </p>
            </div>
          </div><div className='row'>
              <div className='col-3'>
                <p>
                  <small style={{ fontWeight: 'bold' }}>
                    Coupon: {this.state.setUserData[0].coupon}
                  </small>
                  <br />
                </p>
              </div>
              <div className='col-3'>
                <p>
                  <small style={{ fontWeight: 'bold' }}>
                    Credited Amount: {this.state.setUserData[0].amount}
                  </small>
                  <br />
                </p>

              </div>

            </div></>
   )}    





      <div id="treeWrapper" style={{width: '100em', height: '100em'}}>
    {this.state.data.length >= 1 && 
        <Tree data={this.state.data[0]} 
         shouldCollapseNeighborNodes={true}
         translate={{x:670, y: 120}}	
         orientation={Vertical}
        />  
    }
      </div>
    </>
    );
  }
}

export default MyUserComponent;
