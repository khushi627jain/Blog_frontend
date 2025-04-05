import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <div style={navbarStyle}>
      <div style={linkGroupStyle}>
        <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
        <Link to="/blogs" style={linkStyle}>Blogs</Link>
        <Link to="/add-blog" style={linkStyle}>Add Blog</Link>
      </div>
      <button onClick={handleLogout} style={logoutButtonStyle}>Logout</button>
    </div>
  );
};

const navbarStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '16px',
  backgroundColor: '#f7fafc',
  marginBottom: '16px',
};

const linkGroupStyle = {
  display: 'flex',
  gap: '16px',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#2b6cb0',
  fontSize: '16px',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
};

const logoutButtonStyle = {
  backgroundColor: '#e53e3e',
  color: '#fff',
  padding: '8px 16px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default Navbar;
