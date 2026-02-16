import { useState, useEffect } from "react";
import { userFormSchema } from "../config/formConfig";
import FieldRenderer from "./FieldRenderer";
import type { User } from "../types/user";

interface Props{
  onSubmit:(user:User)=>void;
  initial?:User;
}

export default function UserForm({onSubmit,initial}:Props){

  const [form,setForm]=useState<User>({} as User);

  // ⭐ IMPORTANT FIX
  useEffect(()=>{
    if(initial){
      setForm(initial);
    }
  },[initial]);

  const handleChange=(name:string,value:string)=>{
    setForm(prev=>({...prev,[name]:value}));
  };

  const handleSubmit=(e:any)=>{
    e.preventDefault();
    onSubmit(form);
    setForm({} as User);
  };

  return(
    <form onSubmit={handleSubmit}>
      {userFormSchema.map(field=>(
        <FieldRenderer
          key={field.name}
          field={field}
          value={(form as any)[field.name]}
          onChange={handleChange}
        />
      ))}
      <button className="btn btn-primary">
        {initial ? "Update User" : "Save"}
      </button>
    </form>
  );
}
