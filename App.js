<PUT_YOUR_CODE_HERE>import React, { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState("");

  const users = {
    owner: "owner123",
    admin: "admin123",
    client: "client123"
  };

  const handleLogin = (username, password) => {
    if (users[username] && users[username] === password) {
      setUser(username);
      setRole(username);
    } else {
      alert("خطأ في اسم المستخدم أو كلمة المرور");
    }
  };

  if (!user) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>ROHBA 🚗</h1>
        <h3>تسجيل الدخول</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin(e.target.username.value, e.target.password.value);
          }}
        >
          <input name="username" placeholder="Username" />
          <input name="password" type="password" placeholder="Password" />
          <button type="submit">دخول</button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>مرحباً {role} 👋</h1>
      {role === "owner" || role === "admin" ? (
        <div>
          <h2>لوحة التحكم</h2>
          <p>إضافة سيارات / منتجات / خدمات هنا...</p>
        </div>
      ) : (
        <div>
          <h2>مرحبا بك عميل ROHBA</h2>
          <p>تصفح السيارات والمنتجات المعروضة</p>
        </div>
      )}
    </div>
  );
}

export default App;
import React, { useState } from "react";