async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) throw new Error('Failed to fetch users');
    return res.json();
  }
  
  export default async function UsersPage() {
    const users = await getUsers();
    return (
      <div>
        <h1>Server-Side Rendered Users</h1>
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <tbody>

                {users.map((user) => (
                <tr key={user.id}>
                    <td >{user.id}</td>
                    <td >{user.name}</td>
                    <td >{user.email}</td>
                    <td >{user.username}</td>
                </tr>
                ))}
                </tbody>

            </table>
      </div>
    );
  }