import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import Mint from './components/Mint';
import SellNFT from './components/SellNFT';
import Audit from './components/Audit';
import About from './components/About';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <div className='bg-gray-200 px-12 relative h-[32rem]'>
          <Routes>
            <Route index element={<Hero />} />
            <Route path='/mint' element={<Mint />} />
            <Route path='/sellNFT' element={<SellNFT />} />
            <Route path='/audit' element={<Audit />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
