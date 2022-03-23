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
        {/* Home Page Route */}
        <Route path="/" element={<Login />} />

        {/* Login page Route */}
        <Route path="/login" element={<Login />} />

        {/* Logout page  Route*/}
        <Route path="/logout" element={<Logout />} />

        {/* Blogs page  Route*/}
        <Route path="/blogs" element={<Blogs />} />

        {/* Add-Blogs page  Route*/}
        <Route path="/add-blog" element={<AddBlog />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
