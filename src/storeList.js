
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
    axios.post('http://54.194.76.216:5000/getShopList',{},{headers:headers}).then(response => {
    setData(response.data.data)

}).catch(error => {
    alert(error)
  }); 

   


}

const renderStores = () =>{
    console.log(data)

return <div>
{data && data.map((item) => (
<>     
<Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 740 }}>
    <img src="https://via.placeholder.com/240x240" height="240" />
    <Panel header="RSUITE">
      <p>
        <small style={{fontWeight:'bold'}}>
          Shop name:  {item.name}
        </small>
        <br/>
      </p>
      <p>
        <small style={{fontWeight:'bold'}}>
          Address:  {item.address}
        </small>
        <br/>
      </p>
      <p>
        <small style={{fontWeight:'bold'}}>
          id:  {item.id}
        </small>
        <br/>
      </p>
      <p>
        <small style={{fontWeight:'bold'}}>
          mobile:  {item.mobile}
        </small>
        <br/>
      </p>
      <br/>
    </Panel>
    </Panel>
    <br/>
  </>
))}
</div>

}


  return renderStores()
}

export default StoreList;