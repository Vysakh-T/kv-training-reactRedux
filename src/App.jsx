import './App.css';
import InputField from './components/InputField';
import Button from './components/Button';

function App() {
  // const onClick = () => {
  //   const value = prompt('Enter your name');
  //   console.log(value)
  // };


  return (
    <div className="App">
      <div>
      <InputField label='User Name'></InputField>
      <InputField label='Password'></InputField>
      <Button label = 'Login' handleClick = {() => {}}></Button>
      </div>
    </div>
  );
}

export default App;
