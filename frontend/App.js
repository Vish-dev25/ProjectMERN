import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import MenuUpdate from './components/MenuUpdate';
import Home from './components/Home';
import Nav from './components/Nav';
import AboutUs from'./components/AboutUs';
import Register from './components/Register';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/Home' element = { <Home/> }/>
        <Route path='/AboutUs' element = { <AboutUs/> }/>
        <Route path='/Menu' element = { <Menu/> }/>
        <Route path='/MenuUpdate' element = { <MenuUpdate/> }/>
        <Route path='/Register' element = { <Register/> }/>
        <Route path='LoginForm' element= { <LoginForm/> }/>
      </Routes>
      
    </>
  );
}

export default App;
