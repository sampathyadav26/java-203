import logo from './logo.svg';
import './App.css';
import homeComponent from './components/homeComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>
          welcome to react jsp
        </h1>
        <homeComponent></homeComponent>
     
      </header>
    </div>
  );
}

export default App;
