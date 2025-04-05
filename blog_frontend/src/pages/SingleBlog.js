import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api';

export default function SingleBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    API.get(`/blogs/${id}`).then(res => setBlog(res.data));
  }, [id]);

  if (!blog) return null;

  return (
    <div style={{ padding: '24px' }}>
      <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>{blog.title}</h2>
      <img
        // src={`http://localhost:5000/uploads/${blog.image}`}
        alt={blog.title}
        style={{ width: '100%', maxWidth: '600px', marginTop: '16px', borderRadius: '8px' }}
      />
      <p style={{ marginTop: '16px', fontSize: '16px', lineHeight: '1.6' }}>{blog.description}</p>
    </div>
  );
}
