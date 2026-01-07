import { useState } from "react";
import Login from "./components/Login";
import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";

function App() {
  const [loggedIn, setLoggedIn] = useState(
    !!localStorage.getItem("token")
  );
  const [refreshKey, setRefreshKey] = useState(0);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  };

  const refreshStudents = () => {
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <div className="container">
      <h2>Student Management System</h2>

      {!loggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <button onClick={logout}>Logout</button>

          <AddStudent onAdded={refreshStudents} />

          <StudentList refreshKey={refreshKey} />
        </>
      )}
    </div>
  );
}

export default App;
