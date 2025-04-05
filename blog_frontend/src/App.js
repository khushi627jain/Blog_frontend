import { Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Blogs from './pages/Blogs';
import BlogForm from './pages/BlogForm';
import SingleBlog from './pages/SingleBlog';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/add-blog" element={<BlogForm />} />
        <Route path="/edit-blog/:id" element={<BlogForm />} />
        <Route path="/blogs/:id" element={<SingleBlog />} />
      </Routes>
    </>
  );
}

export default App;
