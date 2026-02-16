import React from "react";

interface Props {
  field: any;
  value: string;
  onChange: (name: string, value: string) => void;
  error?: string;
}

export default function FieldRenderer({ field, value, onChange, error }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;

    // numeric-only for phone
    if (field.numeric) {
      val = val.replace(/\D/g, ""); // remove any non-digit characters
      val = val.slice(0, 10);       // max 10 digits
    }

    onChange(field.name, val);
  };

  return (
    <div className="mb-3">
      <label className="form-label">{field.label}</label>
      <input
        type={field.type}
        value={value || ""}
        onChange={handleChange}
        className={`form-control ${error ? "is-invalid" : ""}`}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
}
