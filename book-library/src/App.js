import logo from './logo.svg';
import './App.css';
import { BooksProvider } from './BooksContext';
import Books from './components/Books';
import BookDetails from './components/BookDetails';
import NotFound from './components/NotFound';
import SecretBooks from './components/SecretBooks';
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';

function App() {
  return (
    <BooksProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Books></Books>} />
          <Route path="/books" element={<Navigate to="/" replace />} />
          <Route path="/books/:bookId" element={<BookDetails />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/secret" element={<PrivateRoute Component={SecretBooks} />} />
        </Routes>
      </Router>
    </BooksProvider>
  );
}

export default App;