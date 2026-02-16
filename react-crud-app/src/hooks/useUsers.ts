import { useEffect, useState } from "react";
import * as api from "../api/userService";
import type { User } from "../types/user";

export const useUsers = () => {
  const [users,setUsers]=useState<User[]>([]);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState("");

  const fetchUsers = async ()=>{
    try{
      setLoading(true);
      const res = await api.getUsers();
      setUsers(res.data);
    }catch{
      setError("Failed to load users");
    }finally{
      setLoading(false);
    }
  };

  useEffect(()=>{ fetchUsers() },[]);

  return { users,loading,error,fetchUsers };
};
