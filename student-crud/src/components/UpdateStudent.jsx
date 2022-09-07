import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StudentService from "../services/StudentService";

const UpdateStudent = () => {
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [course, setCourse] = useState();
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    StudentService.getStudent(params.id).then((res) => {
      setId(res.data.id);
      setName(res.data.name);
      setCourse(res.data.course);
      console.log(res.data.id + " " + res.data.name + " " + res.data.course);
    });
  }, []);
  const handleAddUpdate = (e) => {
    e.preventDefault();
    StudentService.updateStudent(id, { id, name, course }).then((res) => {
      console.log(res.data);
    });
    navigate("/list");
  };

  return (
    <div className="container">
      <h1 className="heading-style">Update Student</h1>
      <hr />
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputId" className="form-label">
            Id
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputId"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputCourse" className="form-label">
            Course
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputCourse"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
        </div>

        <button onClick={handleAddUpdate} className="btn btn-info">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateStudent;
