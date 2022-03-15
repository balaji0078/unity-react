
import React, { useState,useEffect } from 'react';
import { Panel, PanelGroup, Placeholder } from 'rsuite';
import axios from 'axios';


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
    axios.post('https://7c77zipbl1.execute-api.us-east-1.amazonaws.com/prod/getShopList',{},{headers:headers}).then(response => {
    setData(response.data.data)

}).catch(error => {
    alert(error)
  }); 
}

   


}

const renderStores = () =>{
    console.log(data)

return <div>
{data && data.map((item) => (
<>     
<Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 1120, height:180 }}>
    {/* <img src="https://via.placeholder.com/240x240" height="240" /> */}
    <Panel header="STORE">
      <div className='row'>
      <div className='col-4'>
      <p>
        <small style={{fontWeight:'bold'}}>
          Shop name:  {item.name}
        </small>
        <br/>
      </p>
      </div>
      <div className='col-4'> 
      <p>
        <small style={{fontWeight:'bold'}}>
         <a href=`https://${item.address}` target ='_blank'>Address:{item.address}</a>
        </small>
        <br/>
      </p>
      </div>
      <div className='col-4'> 
      <p>
        <small style={{fontWeight:'bold'}}>
          mobile:  {item.mobile}
        </small>
        <br/>
      </p>
      </div>
      <div className='col-4'> 
      <p>
        <small style={{fontWeight:'bold'}}>
          Credit Available:  {item.amount}
        </small>
        <br/>
      </p>
      </div>
      </div>
      <br/>
    </Panel>
    </Panel>
    <br/>
    <br/>

  </>
))}
</div>

}


  return renderStores()
}

export default StoreList;
