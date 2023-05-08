import './App.css'
import Adverts from './components/Adverts';
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Adverts />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
