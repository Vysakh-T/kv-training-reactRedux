import './App.css';
import InputField from './components/InputField';
import Button from './components/Button';
import { useEffect, useState } from 'react';

function App() {
  // const onClick = () => {
  //   const value = prompt('Enter your name');
  //   console.log(value)
  // };
  const [userName, setUserName] = useState('');
  const [displayName, setDisplayName] = useState('');

  const onChange = (value) => {
    setUserName(value);
  };


    useEffect(()=>{
      setDisplayName("");
    },[]);

    useEffect(()=>{
      if(!userName){
      setDisplayName("");
      }
      else{
        setDisplayName(userName);
      }
    },[userName]);


  return (
    <div className="App">
      <div>
      <InputField label="Username" type="text" key="uname" onChange={onChange}></InputField>
      <InputField label="Password" type="text" key="uname" onChange={onChange}></InputField>
      <Button label = 'Login' handleClick = {() => {}}></Button>
      <br/>
      <br/>
      <h4>Hello {displayName}</h4>
      </div>
    </div>
  );
}

export default App;
