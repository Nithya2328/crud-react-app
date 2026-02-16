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

  // Load initial data for edit
  useEffect(() => {
    if (initial) {
      setForm(initial);
    }
  }, [initial]);

  const handleChange = (name: string, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Validate required fields
    const missingFields = userFormSchema
      .filter((f) => f.required)
      .filter((f) => !(form as any)[f.name] || (form as any)[f.name].trim() === "");

    if (missingFields.length > 0) {
      alert(`Please fill: ${missingFields.map((f) => f.label).join(", ")}`);
      return;
    }

    // ✅ Validate phone number length if numeric
    const phoneField = userFormSchema.find((f) => f.name === "phone");
    if (phoneField && (form as any).phone && (form as any).phone.length !== 10) {
      alert("Phone number must be exactly 10 digits");
      return;
    }

    // Submit the form
    onSubmit(form);

    // Reset form if not editing
    if (!initial) {
      setForm({} as User);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "400px" }}>
      {userFormSchema.map((field) => (
        <FieldRenderer
          key={field.name}
          field={field}
          value={(form as any)[field.name]}
          onChange={handleChange}
        />
      ))}

      <button type="submit" className="btn btn-primary w-100">
        {initial ? "Update User" : "Save"}
      </button>
    </form>
  );
}
