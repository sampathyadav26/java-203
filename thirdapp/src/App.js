
import './App.css';
import Home from './Components.js/Home';
import MainComponent from './Components.js/MainComponent';
import Footer from './Components.js/Footer';
import SubComponent from './Components.js/SubComponent';
import SubComponent1 from './Components.js/Subfolder/SubComponent1';

function App() {
  return (
    <div className="App">
      <Home/>
      <MainComponent/>
      <Footer/>
      <SubComponent/>
      <SubComponent1/>
    </div>
  );
}

export default App;
