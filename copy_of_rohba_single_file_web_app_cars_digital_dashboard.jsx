import React, { useState } from 'react';

const App = () => {
  const [role, setRole] = useState(null);
  const [password, setPassword] = useState('');
  const [images, setImages] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);

  const passwords = {
    owner: 'owner123',
    admin: 'admin123',
    client: 'client123'
  };

  const handleLogin = (selectedRole) => {
    if (password === passwords[selectedRole]) {
      setRole(selectedRole);
    } else {
      alert('كلمة المرور غير صحيحة');
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const fileURLs = files.map(file => URL.createObjectURL(file));
    setUploadedImages([...uploadedImages, ...fileURLs]);
  };

  const renderDashboard = () => {
    return (
      <div>
        <h2>لوحة تحكم ({role})</h2>
        <input type="file" accept="image/*" multiple onChange={handleImageUpload} />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
          {uploadedImages.map((src, index) => (
            <img key={index} src={src} alt={`upload-${index}`} style={{ width: '150px', borderRadius: '8px' }} />
          ))}
        </div>
      </div>
    );
  };

  if (!role) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>ROHBA Web App</h1>
        <p>اختر الدور وأدخل كلمة المرور للدخول:</p>
        <div style={{ margin: '10px' }}>
          <button onClick={() => handleLogin('owner')}>تسجيل دخول كـ Owner</button>
          <button onClick={() => handleLogin('admin')}>تسجيل دخول كـ Admin</button>
          <button onClick={() => handleLogin('client')}>تسجيل دخول كـ Client</button>
        </div>
        <input
          type="password"
          placeholder="ادخل كلمة المرور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      {renderDashboard()}
      <a href={window.location.href} target="_blank" rel="noopener noreferrer">
        الرابط النهائي للاستخدام
      </a>
    </div>
  );
};

export default App;
