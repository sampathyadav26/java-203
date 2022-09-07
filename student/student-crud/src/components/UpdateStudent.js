import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//use useParams
import { useParams } from "react-router-dom";
import StudentService from "../services/StudentService";
function UpdateStudent() {
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [course, setCourse] = useState();
  const params = useParams();
  const [student, setStudent] = useState({ id: "", name: "", course: "" });
  let navigate = useNavigate();
  useEffect(() => {
    StudentService.getStudent(params.id).then((res) => {
      let sobj = res.data;
      setStudent(sobj);
    });
  }, []);
  const update = () => {
    alert(id + " " + name + " " + course);
    const updateObject = {
      id: id,
      name: name,
      course: course,
    };
    alert("Calling update student method...." + JSON.stringify(updateObject));
    StudentService.updateStudent(params.id, updateObject).then((res) => {
      console.log(res.data);
    });
    navigate("/list");
  };
  return (
    <div>
      <h1>Update Student</h1>
      <hr />
      <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputId" className="form-label">
              Student Id
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputId"
              value={student.id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Student Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              value={student.name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Student Course
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              name="course"
              id="exampleCourse"
              value={student.course}
              onChange={(e) => setCourse(e.target.value)}
            >
              <option>Open this select menu</option>
              <option value="Reactjs">Reactjs</option>
              <option value="Java">Java</option>
              <option value="Testing">Testing</option>
            </select>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => update()}
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateStudent;
