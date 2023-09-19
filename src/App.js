import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { ErrorPage } from './components/ErrorPage';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
// import { Dashboard } from './pages/Dashboard.js';
import { Dashboard } from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <div className='RouterPaths'>
        {/* <h3>Testing...1..2...3</h3> */}
        <BrowserRouter>
        <Home>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/dashboard" element={<Dashboard/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="*" element={<ErrorPage/>} />
        </Routes>
        </Home>
        </BrowserRouter>
        {/* <Home/> */}
      </div>
    </div>
  );
}

export default App;
