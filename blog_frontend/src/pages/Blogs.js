import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../api';

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    API.get('/blogs').then(res => setBlogs(res.data));
  }, []);

  const deleteBlog = async (id) => {
    if (window.confirm('Delete blog?')) {
      await API.delete(`/blogs/${id}`);
      setBlogs(blogs.filter(b => b._id !== id));
    }
  };

  return (
    <div style={{ padding: '16px', overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={thStyle}>Title</th>
            <th style={thStyle}>Image</th>
            <th style={thStyle}>Description</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog._id}>
              <td style={tdStyle}>{blog.title}</td>
              <td style={tdStyle}>
                <img
                  // src={`http://localhost:5000/uploads/${blog.image}`}
                  alt="" width="60" />
              </td>
              <td style={tdStyle}>{blog.description.slice(0, 50)}...</td>
              <td style={tdStyle}>
                <Link to={`/blogs/${blog._id}`}>
                  <button style={buttonStyle}>View</button>
                </Link>
                <Link to={`/edit-blog/${blog._id}`}>
                  <button style={{ ...buttonStyle, backgroundColor: '#f0ad4e' }}>Edit</button>
                </Link>
                <button
                  style={{ ...buttonStyle, backgroundColor: '#d9534f' }}
                  onClick={() => deleteBlog(blog._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const thStyle = {
  textAlign: 'left',
  padding: '8px',
  borderBottom: '1px solid #ccc',
};

const tdStyle = {
  padding: '8px',
  borderBottom: '1px solid #eee',
  verticalAlign: 'middle',
};

const buttonStyle = {
  padding: '6px 12px',
  marginRight: '8px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};
