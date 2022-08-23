import Footer from './components/Footer';
import Header from './components/Header';
import { Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' />
          <Route path='/mint' />
          <Route path='/' />
        </Routes>
      </Router>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
