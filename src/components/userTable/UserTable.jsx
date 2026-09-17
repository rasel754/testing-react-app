import { useEffect, useState } from "react";

export const dummyUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', age: 28 },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 34 },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 45 },
  { id: 4, name: 'Alice Williams', email: 'alice@example.com', age: 23 }
];

function UserTable({ users = dummyUsers } = {}) {
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])
  return (
    <div style={{ marginTop: '20px' }}>
      <h2 style={{ marginBottom: '10px' }}>User Table</h2>
      <table border="1" cellPadding="8" cellSpacing="0" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody data-testid='users'>
          {(users || dummyUsers).map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {
        showMessage && (
          <p data-testid="loaded-msg" style={{ marginTop: '10px', color: 'green' }}>Table loaded successfully</p>
        )
      }
    </div>
  );
}

export default UserTable;
