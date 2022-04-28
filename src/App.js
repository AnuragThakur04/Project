import './App.css';
import Home from './Home';
import Book from './Book';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'



function App() {
  return (
   <div>
   <Router>
     <Routes>
       <Route element={<Home/>} path="/"/>
          <Route element={<Book/> } path="/book" />
     </Routes>
   </Router>
   </div>
  );
}

export default App;
