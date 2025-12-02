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

  const handleDelete = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

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
    },
    deletebtn: {
      backgroundColor: '#f44336',
      color: '#fff',
      padding: '6px 8px',
      border: 'none',
      cursor: 'pointer',
      marginTop: 8
    },
    pagination: {
      marginTop: 12,
      display: 'flex',
      alignItems: 'center'
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
          <button
            style={styles.deletebtn}
            onClick={() => handleDelete(user.id)}
          >
            Delete
          </button>
        </div>
      ))}

      <div style={styles.pagination}>
        <button
          disabled={page <= 1}
          onClick={() => setPage(prev => Math.max(prev - 1, 1))}
        >
          Prev
        </button>
        <span style={{ margin: '0 8px' }}>Page {page}</span>
        <button onClick={() => setPage(prev => prev + 1)}>Next</button>
      </div>
    </div>
  );
}

export default App;
 






