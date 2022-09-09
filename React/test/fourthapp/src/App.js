
import './App.css';
import './component/navbar';
import './component/home';
import './component/service';
import './component/aboutUs';
import './component/contactUs';
function App() {
  return (
    <div className="App">
      <navbar/>
      <home/>
      <service/>
      <aboutUs/>
      <contactUs/>

    </div>
   
  );
}

export default App;
