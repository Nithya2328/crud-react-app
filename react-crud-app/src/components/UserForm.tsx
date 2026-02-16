import { useState, useEffect } from "react";
import { userFormSchema } from "../config/formConfig";
import FieldRenderer from "./FieldRenderer";
import type { User } from "../types/user";

interface Props {
  onSubmit: (user: User) => void;
  initial?: User;
}

export default function UserForm({ onSubmit, initial }: Props) {
  const [form, setForm] = useState<User>({} as User);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (initial) setForm(initial);
  }, [initial]);

  const handleChange = (name: string, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // clear error
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    // Required fields
    userFormSchema.forEach((field) => {
      if (field.required && (!(form as any)[field.name] || (form as any)[field.name].trim() === "")) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });

    // Phone validation
    if ((form as any).phone && (form as any).phone.length !== 10) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit(form);

    if (!initial) setForm({} as User);
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "400px" }}>
      {userFormSchema.map((field) => (
        <FieldRenderer
          key={field.name}
          field={field}
          value={(form as any)[field.name]}
          onChange={handleChange}
          error={errors[field.name]}
        />
      ))}

      <button type="submit" className="btn btn-primary w-100 mt-3">
        {initial ? "Update User" : "Save"}
      </button>
    </form>
  );
}
