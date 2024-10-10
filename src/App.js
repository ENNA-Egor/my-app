import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
         <label>
            Count
          </label>
        <p>0</p>
        </div>
        <div className='block'>
        <btn  className = "btn">+</btn>
        <btn className = "btn">-</btn>
        <btn className = "btn">Reset</btn>
        </div>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React-Redux
        </a>
      </header>
    </div>
  );
}

export default App;
