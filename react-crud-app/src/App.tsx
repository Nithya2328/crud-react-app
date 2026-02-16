import { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import { useUsers } from "./hooks/useUsers";
import * as api from "./api/userService";
import type { User } from "./types/user";

export default function App(){
  const {users,loading,error,fetchUsers}=useUsers();
  const [editing,setEditing]=useState<User|null>(null);

  const saveUser= async(data:User)=>{
    if(editing){
      await api.updateUser(editing.id!,data);
      setEditing(null);
    }else{
      await api.createUser(data);
    }
    fetchUsers();
  };

  const removeUser=async(id:number)=>{
    await api.deleteUser(id);
    fetchUsers();
  };

  if(loading) return <p>Loading...</p>;
  if(error) return <p>{error}</p>;

  return(
    <div className="container mt-4">
      <h2>User Manager</h2>
      <UserForm onSubmit={saveUser} initial={editing||undefined}/>
      <UserList users={users} onDelete={removeUser} onEdit={setEditing}/>
    </div>
  );
}
