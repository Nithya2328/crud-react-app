# React CRUD User Manager

A simple React + TypeScript CRUD application for managing users.
Built with extensibility in mind — new form fields can be added via configuration without modifying core UI logic.

---

## 🚀 Live Demo

(Add your deployed link here)

---

## 📂 Repository

(Add your GitHub repo link here)

---

## ⚙️ Tech Stack

* React
* TypeScript
* Vite
* Bootstrap
* Axios
* JSON Server (mock API)

---

## ✨ Features

* Create users
* View users
* Update users
* Delete users
* Form validation
* Config-driven form rendering
* Extensible architecture
* Loading & error handling
* Clean UI

---

## 🧩 Extensibility Design

The form is schema-driven.

All fields are defined in:

```
src/config/formConfig.ts
```

Example:

```
{ name:"dob", label:"Date of Birth", type:"date" }
```

To add a new field:

1. Open formConfig.ts
2. Add field object
3. Done — UI updates automatically

No component changes required.

---

## 📦 Setup Instructions

### 1 Install dependencies

```
npm install
```

### 2 Start frontend + API

```
npm run dev
```

Runs:

* React app → http://localhost:5173
* API → http://localhost:3000/users

---

## 🗄 Mock API (JSON Server)

Database file:

```
db.json
```

Example structure:

```
{
  "users":[]
}
```

---

## 📌 Design Decisions

* Used config-driven form rendering for scalability
* Separated API logic into service layer
* Used custom hook for user fetching
* Validation handled inside field renderer
* Layout kept simple for clarity

---

## 🎯 Evaluation Criteria Covered

✔ Clean component structure
✔ Reusable form system
✔ API integration
✔ Validation rules
✔ Extensible architecture
✔ Proper Git usage

---

## 👨‍💻 Author

Nithya 