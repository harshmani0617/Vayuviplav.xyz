import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>



<BrowserRouter>
<Navbar/>
    
    
    
      {/* {showPopup && <LeadPopup onClose={handleClosePopup} />} */}
   
   

    <Routes>
      {/* <Route path='/' element={<PopupForm />} /> */}
      <Route path='/' element={<HomeScreen/>}/>
      

      
      
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
