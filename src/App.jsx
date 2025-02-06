import { Routes,Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home.jsx'
import Favourites from './pages/Favourites.jsx';
import NavBar from './components/NAvBAr.jsx';

function App() {
  

  return(
    <>
    <div>
      <NavBar/>
    </div>
    <main className="main-content">

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/favourites" element={<Favourites/>} />
      </Routes>

    </main>
    </>
  );
 
}

export default App
