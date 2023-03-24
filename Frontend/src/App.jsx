import './App.css';
import Header from './Components/Header';
import { Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import AddBook from './Components/AddBook';
import Books from './Components/Book/Books'
import BookDetail from './Components/Book/BookDetail'


function App() {
  return (
   <>
   <header>
   <Header/>
   </header>
   <main>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/add" element={<AddBook/>}/>
      <Route exact path="/books" element={<Books/>}/>
      <Route exact path="/books/:id" element={<BookDetail/>}/>
    </Routes>
   </main>
   </>
  );
}

export default App;
