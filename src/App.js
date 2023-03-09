import Navbar from './components/Navbar';
import './App.css';
import Home from './Home';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import CreateBlog from './createBlog';
import BlogDetails from './BlogDetails';
import ErrorPage from './ErrorPage';

function App() {
  // const name="raj";
  // const num=40;
  // const arr=[10,20,30];
  return (
    <Router>

    <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/create" element={ <CreateBlog/> } />
            <Route path="/blogs/:id" element={ <BlogDetails/> } />
            <Route path="*" element={ <ErrorPage/> } />
           
          </Routes>
          
        </div>
    </div>

    </Router>
    
  );
}

export default App;
