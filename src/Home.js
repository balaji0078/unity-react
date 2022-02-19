import React from 'react';
import Tree from 'react-hierarchy-tree-graph';
import { Select, Box } from 'theme-ui'
import axios from 'axios';

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
    };
    // Binding method
  }
  componentDidMount(){
    this.userChild();
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
  render() {
    return (
      <div id="treeWrapper" style={{width: '100em', height: '100em'}}> 
    {this.state.data.length >= 1 && 
        <Tree data={this.state.data[0]} 
         shouldCollapseNeighborNodes={true}
         translate={{x:670, y: 120}}	
         orientation={Vertical}
        />  
    }
      </div>
    );
  }
}

export default MyUserComponent;
