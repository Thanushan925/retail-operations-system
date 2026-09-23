import { useEffect, useState } from "react";

type InventoryItem = {
  store: string;
  product: string;
  sku: string;
  category: string;
  quantity: number;
  price: string;
};

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  store: string | null;
};

function App() {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);
  const [usersLoading, setUsersLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/inventory")
      .then((response) => response.json())
      .then((data) => {
        setInventory(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setUsersLoading(false);
      })
      .catch(() => {
        setUsersLoading(false);
      });
  }, []);

  return (
    <main>
      <h1>Retail Operations System</h1>

      <h2>Inventory</h2>

      {loading ? (
        <p>Loading inventory...</p>
      ) : (
        <ul>
          <table>
            <thead>
              <tr>
                <th>Store</th>
                <th>Product</th>
                <th>SKU</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>

            <tbody>
              {inventory.map((item, index) => (
                <tr key={index}>
                  <td>{item.store}</td>
                  <td>{item.product}</td>
                  <td>{item.sku}</td>
                  <td>{item.category}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ul>
      )}

      <h2>Users</h2>

      {usersLoading ? (
        <p>Loading users...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Store</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.store ?? "All Stores"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}

export default App;