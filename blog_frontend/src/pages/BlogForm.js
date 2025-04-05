import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import API from '../api';

export default function BlogForm() {
  const { id } = useParams();
  const [form, setForm] = useState({ title: '', description: '', file: null });
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      API.get(`/blogs/${id}`).then(res =>
        setForm({ title: res.data.title, description: res.data.description })
      );
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append('title', form.title);
    fd.append('description', form.description);
    if (form.file) fd.append('image', form.file);

    if (id) {
      await API.put(`/blogs/${id}`, fd);
    } else {
      await API.post('/blogs', fd);
    }
    navigate('/blogs');
  };

  return (
    <div style={{ maxWidth: '500px', margin: '40px auto' }}>
      <form onSubmit={handleSubmit}>
        <div style={formGroupStyle}>
          <input
            type="text"
            placeholder="Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            style={inputStyle}
            required
          />
        </div>
        <div style={formGroupStyle}>
          <textarea
            placeholder="Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            style={textareaStyle}
            required
          />
        </div>
        <div style={formGroupStyle}>
          <input
            type="file"
            onChange={(e) => setForm({ ...form, file: e.target.files[0] })}
            style={inputStyle}
          />
        </div>
        <button type="submit" style={buttonStyle}>
          {id ? 'Update' : 'Create'} Blog
        </button>
      </form>
    </div>
  );
}

const formGroupStyle = {
  marginBottom: '16px',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  fontSize: '16px',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

const textareaStyle = {
  ...inputStyle,
  height: '100px',
  resize: 'vertical',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#3182ce',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '16px',
};
