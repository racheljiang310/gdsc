import Navbar from './NavBar';
import Home from './Home';

function App() { //function that returns jsx code
  const link = "http://www.google.com"; //get link to linktree
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
      </div>
    </div>
  );
}

export default App;
//so we can use it in other files
