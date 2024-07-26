import logo from '../src/image.jpg';
import './App.css';

function App() {

  const email = 'varun@hezkyteh.com';
  const subject = 'I want to inquire about';
  const body = 'Hello, I would like to...';


  return (
    <div className="App">
      <header className="App-header">
        <p>HEZKY TECH</p>
        <p>BUILDING INDUSTRIES OF TOMORROW</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>REQUEST A CALL</p>
        <div className='input-box'>
        <input placeholder='ENTER YOUR EMAIL ID' type='text' className='login-input'></input>
        <button className='btn'><a  href={`mailto:${email}?subject=${subject}&body=${body}`}  >SEND</a> </button>
        </div>
      
      </header>
    </div>
  );
}

export default App;
