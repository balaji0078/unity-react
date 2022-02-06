import React from 'react';
import Tree from 'react-hierarchy-tree-graph';
import { Select, Box } from 'theme-ui'

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
 
const Vertical = 'vertical'
class MyUserComponent extends React.Component {
  render() {
    return (
      <div id="treeWrapper" style={{width: '50em', height: '20em'}}> 
        <Tree data={dataWithCollapsedProperties} 
        //  collapsible={true}
        //  useCollapseData={true}
         shouldCollapseNeighborNodes={true}
         translate={{x:70, y: 120}}	
         Orientation={Vertical}


        />
      </div>
    );
  }
}

export default MyUserComponent;