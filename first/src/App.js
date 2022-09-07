
import './App.css';
import FooterComponent from './componets/FooterComponent';
import HomeComponent from './componets/HomeComponent';
import MainComponent from './componets/MainComponent';
import SubModule from './componets/SubModule';



function App() {
  return (
    <div className="App">
      <h>
        first project of react js
        </h>
      <header className="App-header">
        
        
        
        <HomeComponent></HomeComponent>
        <MainComponent/>
        <FooterComponent/>
        <MainComponent/>
        <SubModule/>
      

      </header>
    </div>
  );
}

export default App;
