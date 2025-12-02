import React, { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  const fetchUsers = async () => {
    try {
      const res = await fetch(`https://reqres.in/api/users?page=${page}`);
      const data = await res.json();
      setUsers(data.data);
    } catch (err) {
      console.error('Failed to fetch users:', err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [page]);

  const styles = {
    container: {
      padding: 16
    },
    heading: {
      fontSize: 22,
      marginBottom: 12
    },
    userCard: {
      padding: 8,
      border: '1px solid #ddd',
      marginBottom: 8
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Users Listing Page</h1>

      {users.map(user => (
        <div key={user.id} style={styles.userCard}>
          <strong>
            {user.first_name} {user.last_name}
          </strong>
          <div>{user.email}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
<button
    style={styles.deletebtn}
    onClick ={() => handledelete(user.id)}
    > </button>


