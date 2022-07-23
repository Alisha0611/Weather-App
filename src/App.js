import './App.css';
import Home from './Components/Home/Home'
import bg from './Components/video/cloud.mp4'

function App() {
  return (
    <div className="App">
      <video autoPlay muted loop >
            <source src={bg} type="video/mp4" />
        </video>
      <Home/>
    </div>
  );
}

export default App;
