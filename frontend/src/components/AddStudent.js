import API from "../services/api";
import { useState } from "react";

function AddStudent({onAdded}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

   const addStudent = async () => {
    await API.post("/students", { name, email, course });
    onAdded(); // 🔥 refresh list
  };

  return (
  <div>
    <h3>Add Student</h3>

    <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
    <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
    <input placeholder="Course" onChange={(e) => setCourse(e.target.value)} />

    <button onClick={addStudent}>Add</button>
  </div>
);

}

export default AddStudent;
