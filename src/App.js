import './App.css';
import Navbar from './components/navbar';
import Banner from './components/banner';
import Welcome from './components/welcome';
import Posters from './components/posters';
import Infocard from './components/infoCard';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Welcome/>
      <Posters/>
      <Infocard/>
    </div>
  );
}

export default App;
