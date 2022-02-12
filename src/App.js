
import './App.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Login from './Screens/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Singup from './Screens/Register/Register';
import ImportantLink from './Component/ImportantLink/ImportantLink';
import Landing from './Screens/Landing/Landing';
import Register from './Screens/Register/Register';


function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/landing" element={<Landing/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
    </Routes>
     
     
      <Footer/>
    </BrowserRouter>
      
      </>
      
    
  );
}

export default App;
