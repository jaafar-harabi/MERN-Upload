import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home' 
import Register from './pages/Register'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
   
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      
    </BrowserRouter>

    </>
  
  );
}

export default App;
