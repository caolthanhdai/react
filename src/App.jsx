import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);    // lưu danh sách users
  const [loading, setLoading] = useState(true); // trạng thái loading
  const [error, setError] = useState(null);     // lỗi (nếu có)

  useEffect(() => {
    // gọi API khi component mount
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Lỗi khi fetch API");
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data);       // cập nhật state với dữ liệu từ API
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // [] để chỉ chạy 1 lần sau render đầu tiên

  if (loading) return <p>Đang tải...</p>;
  if (error) return <p>Lỗi: {error}</p>;

  return (
    <div>
      <h1>Danh sách Ugit sers</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

