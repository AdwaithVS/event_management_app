import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <div>
      <HomePage/>
      <ServicesPage/>
      <AboutPage/>
    </div>
  );
}

export default App;
