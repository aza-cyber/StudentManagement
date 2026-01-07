import { useEffect, useState } from "react";
import API from "../services/api";

function StudentList({ refreshKey }) {
  const [students, setStudents] = useState([]);

  // Fetch students from backend
  const loadStudents = async () => {
    try {
      const res = await API.get("/students");
      setStudents(res.data);
    } catch (error) {
      console.error("Error loading students", error);
    }
  };

  // Delete a student
  const deleteStudent = async (id) => {
    try {
      await API.delete(`/students/${id}`);
      loadStudents(); // refresh list after delete
    } catch (error) {
      console.error("Error deleting student", error);
    }
  };

  // Load students on page load & when refreshKey changes
  useEffect(() => {
    loadStudents();
  }, [refreshKey]);

  return (
    <div>
      <h3>Students List</h3>

      {students.length === 0 && <p>No students yet</p>}

      {students.map((student) => (
        <div
          key={student.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "8px",
            padding: "6px",
            borderBottom: "1px solid #ddd",
          }}
        >
          <span>
            <strong>{student.name}</strong> — {student.course}
          </span>

          <button onClick={() => deleteStudent(student.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default StudentList;
