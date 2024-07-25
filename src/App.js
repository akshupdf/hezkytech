import logo from '../src/image.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>HEZKY TECH</p>
        <p>BUILDING INDUSTRIES OF TOMORROW</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>REQUEST A CALL</p>
        <div className='input-box'>
        <input placeholder='ENTER YOUR PHONE NUMBER' type='text' className='login-input'></input>
        <button className='btn' >SEND</button>
        </div>
      
      </header>
    </div>
  );
}

export default App;
