import '../src/main.css';
import Header from './components/Header/Header';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='container'>
        <Home/>
      </div>
    </div>
  );
}

export default App;
