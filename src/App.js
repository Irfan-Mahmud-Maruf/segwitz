import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import AddBlog from "./components/Blog/AddBlog";
import Blogs from "./components/Blog/Blogs";
import Login from "./components/Login/Login";
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
