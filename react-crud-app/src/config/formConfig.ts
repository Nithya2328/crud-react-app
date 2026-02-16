export const userFormSchema = [
  { name: "firstName", label: "First Name", type: "text", required: true },
  { name: "lastName", label: "Last Name", type: "text", required: true },
  { name: "phone", label: "Phone Number", type: "tel", required: true, numeric: true, maxLength:10 },
  { name: "email", label: "Email Address", type: "email", required: true },
  { name:"dob", label:"Date of Birth", type:"date" }

];
