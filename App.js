import {Routes,Route,Link,BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Home from './home';
import About from './about';
import Contact from './contact';
import Address from './address';
function App() {
  return (
    <Router>
      <Link to="/homepage" style={{margin:10}}>Home</Link>
      <Link to="/aboutpage" style={{margin:10}}>About</Link>
      <Link to="/contactpage" style={{margin:10}}>Contact Us</Link>
      <Link to="/addresspage" style={{margin:10}}>Address</Link>
    <Routes>
      <Route path="/homepage" element={<Home/>}></Route>
      <Route path="/aboutpage" element={<About/>}></Route>
      <Route path="/contactpage" element={<Contact/>}></Route>
      <Route path="/addresspage" element={<Address/>}></Route>
      </Routes>
      </Router>

  );
}

export default App;
