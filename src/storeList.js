
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
    axios.post('http://54.194.76.216:5000/getShopList',{},{headers:headers}).then(response => {
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
<Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 1120, height:340 }}>
    <img src="https://policywrite.s3.ap-south-1.amazonaws.com/shop.jpg" height="240" />
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
          Address:  {item.address}
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