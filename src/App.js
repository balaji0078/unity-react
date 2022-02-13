import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import axios from 'axios';

import Login from './Login';
import Dashboard from './Dashboard';
import Tree from './Home';
import Create from './CreateUser'
import Stores from './storeList';


import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
import { getToken, removeUserSession, setUserSession } from './Utils/Common';

function App() {
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    // const token = getToken();
    // if (!token) {
    //   return;
    // }

    // axios.get(`http://localhost:4000/verifyToken?token=${token}`).then(response => {
    //   setUserSession(response.data.token, response.data.user);
    //   setAuthLoading(false);
    // }).catch(error => {
    //   removeUserSession();
    //   setAuthLoading(false);
    // });
  }, []);

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header">
            <NavLink activeClassName="active" to="/user">User</NavLink>
            <NavLink activeClassName="active" to="/Create">SignIn</NavLink>
           <NavLink activeClassName="active" to="/">Login</NavLink>
            <a style={{marginLeft:17}} href='https://policywrite.s3.ap-south-1.amazonaws.com/Doc1.docx'>
            <label className='ml-2' >About us</label>
            </a>
            <a style={{marginLeft:17}} href='https://policywrite.s3.ap-south-1.amazonaws.com/TERMS+OF+SERVICE.docx'>
            <label className='ml-2' >Terms and Privacy Policy</label>
            </a>
      
            {/* <NavLink activeClassName="active" to="https://policywrite.s3.ap-south-1.amazonaws.com/Doc1.docx">Login</NavLink> */}



          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/create" component={Create} />
              <Route exact path="/user" component={Tree} />
              <Route exact path="/stores" component={Stores} />


              {/* <PublicRoute path="/login" component={Login} /> */}
              {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
