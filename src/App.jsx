import { useState, useEffect } from "react";
import "./App.css";

function App() {

  const [employees, setEmployees] = useState([]);

  const [empID, setEmpID] = useState("");
  const [name, setName] = useState("");
  const [DOJ, setDOJ] = useState("");
  const [resign, setResign] = useState("");
  const [DOR, setDOR] = useState("");

  const [editId, setEditId] = useState(null);

  const fetchEmployees = () => {
    fetch("http://localhost:5000/employee")
      .then(res => res.json())
      .then(data => setEmployees(data));
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  // SAVE
  const saveEmployee = () => {

    const employeeData = { empID, name, DOJ, resign, DOR };

    fetch("http://localhost:5000/employee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(employeeData)
    })
      .then(res => res.json())
      .then(() => {
        fetchEmployees();
        clearForm();
      });
  };

  // DELETE
  const deleteEmployee = (id) => {
    fetch(`http://localhost:5000/employee/${id}`, {
      method: "DELETE"
    }).then(() => fetchEmployees());
  };

  // EDIT
  const editEmployee = (emp) => {

    setEditId(emp._id);

    setEmpID(emp.empID);
    setName(emp.name);
    setDOJ(emp.DOJ);
    setResign(emp.resign);
    setDOR(emp.DOR);
  };

  // UPDATE
  const updateEmployee = () => {

    const employeeData = { empID, name, DOJ, resign, DOR };

    fetch(`http://localhost:5000/employee/${editId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(employeeData)
    })
      .then(res => res.json())
      .then(() => {
        fetchEmployees();
        clearForm();
        setEditId(null);
      });
  };

  const clearForm = () => {
    setEmpID("");
    setName("");
    setDOJ("");
    setResign("");
    setDOR("");
  };

  return (
    <div className="container">

      <h1 className="title">Employee Management</h1>

      <div className="form-card">

        <input
          placeholder="Employee ID"
          value={empID}
          onChange={(e) => setEmpID(e.target.value)} required
        />

        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)} required
        />

        <input
          placeholder="Date of Joining"
          value={DOJ}
          onChange={(e) => setDOJ(e.target.value)} required
        />

        <input
          placeholder="Resign (Y/N)"
          value={resign}
          onChange={(e) => setResign(e.target.value)} required
        />

        <input
          placeholder="Date of Resign"
          value={DOR}
          onChange={(e) => setDOR(e.target.value)} required
        />

        <div>

          {editId ? (

            <button className="btn btn-primary" onClick={updateEmployee}>
              Update
            </button>

          ) : (

            <button className="btn btn-success" onClick={saveEmployee}>
              Save
            </button>

          )}

        </div>

      </div>


      <table className="employee-table">

        <thead>
          <tr>
            <th>Emp ID</th>
            <th>Name</th>
            <th>DOJ</th>
            <th>Resign</th>
            <th>DOR</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {employees.map(emp => (
            <tr key={emp._id}>
              <td>{emp.empID}</td>
              <td>{emp.name}</td>
              <td>{emp.DOJ}</td>
              <td>{emp.resign}</td>
              <td>{emp.DOR}</td>

              <td>
                <button
                  className="btn btn-warning me-2"
                  onClick={() => editEmployee(emp)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger"
                  onClick={() => deleteEmployee(emp._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default App;