import logo from './logo.svg';
import './App.css';
import Dishes from './components/Dishes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Ratings from './components/Ratings';

function App() {
  let myName = "lital gehmann";
  let myEmail = "litaltuli@gmail.com ";

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1 style={{backgroundColor: "yellow" , color: "black"}}>{myName}</h1>
        <p style={{backgroundColor: "red" , color: "black"}}>{myEmail}</p>
<Dishes />       
<Ratings />
      </header>
      <Footer developerName = {myName}/>
    </div>
  );
}

export default App;
