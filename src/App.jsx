import './App.css';
import InputField from './components/InputField';
import Button from './components/Button';
import { useEffect, useState } from 'react';

import { Routes,BrowserRouter as Router, Route  } from 'react-router-dom';

import CreateEmployee from './pages/CreateEmployee';
import EmployeeList from './pages/EmployeeList';
import Login from './pages/Login';
import { Counter } from './components/counter';
import EditEmployee from './pages/EditEmployee';
import DisplayEmployee from './pages/DisplayEmployee';

function App() {

  const data = [
    { ename: "John Doe", eid: "1234", jdate: "12/12/2012", erole: "DEV", estatus: "Active", exp: "3 Years" },
    { ename: "John Doe", eid: "1234", jdate: "12/12/2012", erole: "DEV", estatus: "Active", exp: "3 Years" },
    { ename: "John Doe", eid: "1234", jdate: "12/12/2012", erole: "DEV", estatus: "Active", exp: "3 Years" },
    { ename: "John Doe", eid: "1234", jdate: "12/12/2012", erole: "DEV", estatus: "Active", exp: "3 Years" },
    { ename: "John Doe", eid: "1234", jdate: "12/12/2012", erole: "DEV", estatus: "Active", exp: "3 Years" },
    { ename: "John Doe", eid: "1234", jdate: "12/12/2012", erole: "DEV", estatus: "Active", exp: "3 Years" },
];

  const [empData,setState] = useState(data);

  // useEffect(()=>{
  //   empData = {data}
  // },[])

  // useEffect(() => {
  //   setState(data)
  // },[data])

  return(

    <Router>
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/counter" element={<Counter/>}/>
      <Route path="/create" element={<CreateEmployee/>}/>
      <Route path="/edit/:id" element={<EditEmployee/>}/>
      <Route path="/view/:id" element={<DisplayEmployee/>}/>
      <Route path="/list" element={<EmployeeList/>}/>
      </Routes>
    </Router>

  );
}

export default App;
