import './App.css';
import InputField from './components/InputField';
import Button from './components/Button';
import { useEffect, useState } from 'react';

import { Routes,BrowserRouter as Router, Route  } from 'react-router-dom';

import CreateEmployee from './pages/CreateEmployee';
import EmployeeList from './pages/EmployeeList';
import Login from './pages/Login';
import { Counter } from './components/counter';

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
      <Route path="/create" element={<CreateEmployee data = {empData} handleCreate = {setState}/>}/>
      <Route path="/list" element={<EmployeeList data={empData}/>}/>
      </Routes>
    </Router>

  );
}

export default App;
