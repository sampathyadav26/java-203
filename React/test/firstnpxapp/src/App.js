import logo from './logo.svg';
import './App.css';
import HomeComp from './HomeComp';
import FunctionalCompo from './FunctionalCompo';
import MainCompo from './MainCompo';
import ChildCompo from './ChildCompo';
import { ShoppingList } from './navBar/ShoppingList';

function App() {
  return (
    <div className="App">
      {/* <h1>Welcome page</h1>
      <hr></hr>
      <HomeComp/>
      <MainCompo/>
      <FunctionalCompo/>
      <hr></hr>
      <ChildCompo/> */}
      <ShoppingList/>
    </div>
  );
}

export default App;
