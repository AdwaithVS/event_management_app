import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import AboutPage from './components/AboutPage';
import FAQPage from './components/FAQPage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <div>
      <HomePage/>
      <ServicesPage/>
      <AboutPage/>
      <FAQPage/>
      <ContactPage/>
    </div>
  );
}

export default App;
