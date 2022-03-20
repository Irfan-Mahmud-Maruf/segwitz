import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./components/Login/Login"
import Blogs from "./components/Blog/Blogs"
import AddBlog from "./components/Blog/AddBlog"
import Logout from './components/Logout/Logout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/add-blog" element={<AddBlog />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
