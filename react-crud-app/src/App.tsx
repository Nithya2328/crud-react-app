import { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import type { User } from "./types/user";

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [editing, setEditing] = useState<User | null>(null);

  // Save or update a user
  const saveUser = (data: User) => {
    if (editing) {
      setUsers((prev) =>
        prev.map((u) => (u.id === editing.id ? { ...u, ...data } : u))
      );
      setEditing(null);
    } else {
      setUsers((prev) => [...prev, { ...data, id: Date.now() }]);
    }
  };

  // Delete a user
  const removeUser = (id: number) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  return (
    <div className="container mt-5 d-flex flex-column align-items-center">
      <h2>User Manager</h2>
      <UserForm onSubmit={saveUser} initial={editing || undefined} />
      <UserList users={users} onDelete={removeUser} onEdit={setEditing} />
    </div>
  );
}
