
import React, { useState,useEffect } from 'react';
import { Panel, PanelGroup, Placeholder } from 'rsuite';
import axios from 'axios';
import { Table } from 'rsuite';



function StoreList(props) {

    const { Paragraph } = Placeholder;

    const [data,setData] = useState('')

    useEffect(() => {
        // Update the document title using the browser API
        getShops();
      },[]);    

const getShops = () =>{

    let token = localStorage.getItem('token');
    console.log(token,"tokentoken")
    const headers = {
      'x-access-token': token

    }
    if(token!=null){
    axios.get('https://7c77zipbl1.execute-api.us-east-1.amazonaws.com/prod/purchasedList',{headers:headers}).then(response => {
    setData(response.data.data)

}).catch(error => {
    alert(error)
  }); 
}

}

const renderStores = () =>{
    console.log(data)
 const {Cell,Column,HeaderCell} =  Table

return <div>
{data && (
<>     
<div>
<Table
      virtualized
      height={400}
      data={data}
      onRowClick={data => {
        console.log(data);
      }}
    >  <Column width={300} align="center" fixed>
          <HeaderCell>Product / Service</HeaderCell>
          <Cell dataKey="product" />
        </Column>
        <Column width={100} >
          <HeaderCell>Transaction Amount</HeaderCell>
          <Cell dataKey="amount" />
        </Column>
        <Column width={350} >
          <HeaderCell>Created On</HeaderCell>
          <Cell dataKey="created_on" />
        </Column>
        <Column width={100} >
          <HeaderCell>Balance Credit Amount</HeaderCell>
          <Cell dataKey="credit_amount" />
        </Column>
        <Column width={200} >
          <HeaderCell>Credited Amount</HeaderCell>
          <Cell dataKey="admin_amount" />
        </Column>
      </Table>
    </div>  </>
   )}
</div>

}


  return renderStores()
}

export default StoreList;
