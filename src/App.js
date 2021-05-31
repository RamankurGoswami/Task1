import './App.css';
import icon from './task2 icon.svg';
import Weather from "./components/Weather"

function App() {
  
  return (
    <div className="App">
      <img src={icon} className="back-icon" alt="icon" style={{ top: "5vh", left: "3vw" }} />
        <img src={icon} className="back-icon" alt="icon" style={{ bottom: "5vh", right: "3vw" }} />
      <Weather />
    </div>
  );
}

export default App;
