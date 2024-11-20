import '../src/main.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './Pages/Home';


function App() {
  return (
    <div className="App">
      <Header/>
      <div className='container'>
        <Home/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
