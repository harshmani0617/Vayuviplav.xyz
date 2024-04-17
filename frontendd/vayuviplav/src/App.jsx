import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<Navbar />



      <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<HomeScreen />} />
        </Routes>

        <BottomNav />
      </BrowserRouter>

    </>
  )
}

export default App
