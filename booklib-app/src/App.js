import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {ContextProvider} from './context';
import Header from '../src/components/Header/Header'
import BookList from './components/Booklist/Booklist';
import BookDetails from '../src/components/BookDetails/BookDetails'
import CartList from './components/CartList/CartList';
import Home from '../src/pages/Home/Home'
import About from '../src/pages/About/About'

function App() {
  return (
    <ContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<BookList />} />
          <Route path='/About' element={<About />} />
          <Route path='/book/:id' element={<BookDetails />} />
          <Route path='/cart' element={<CartList />} />
        </Routes>
      </Router>
    </ContextProvider>
  );
}

export default App;
