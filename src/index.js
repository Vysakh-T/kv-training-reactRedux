import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import './index.css';


import App from './App';
import CreateEmployee from './pages/CreateEmployee';
import Login from './Login';
import EmployeeList from './pages/EmployeeList';

import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Route path="/" element={<Login/>}/>
      <Route path="/create" element={<CreateEmployee/>}/>
      <Route path="/list" element={<EmployeeList/>}/>
    </Router>
    {/* <CreateEmployee/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
