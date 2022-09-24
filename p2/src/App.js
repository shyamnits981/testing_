
import './App.css';
import { BrowserRouter,Routes, Route} from 'react-router-dom';

import Nav from './components/Nav';


import BasicInfo from './components/Basicinfo';



function App() {
  return (
   <BrowserRouter>
    <Nav/>
    
   <Routes>
    
    <Route path="/basicinfo" element={<BasicInfo/>} />
  
 
  
   </Routes>
   </BrowserRouter>
  );
}

export default App;
