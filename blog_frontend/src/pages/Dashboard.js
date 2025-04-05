export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <p style={{ fontSize: '24px' }}>Welcome {user.email}</p>
      <img
        // src={`http://localhost:5000/uploads/${user.profileImage}`}
        alt="Profile"
        style={{
          marginTop: '16px',
          borderRadius: '50%',
          width: '150px',
          height: '150px',
          objectFit: 'cover'
        }}
      />
    </div>
  );
}
