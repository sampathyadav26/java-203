import {
  collection,
  deleteDoc,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";

function List() {
  const [products, setProducts] = useState([]);
  const boardsCollection = collection(db, "boards");
  collection(db, "boards");
  const fetchData = async () => {
    const datas = await getDocs(boardsCollection);
    setProducts(datas.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    fetchData();
  }, []);
  const deleteData = async (id) => {
    const boardsCollection = doc(db, "boards", id);
    await deleteDoc(boardsCollection);
    fetchData();
  };

  const editdata = async (id) => {
    const boardsCollection = doc(db, "boards", id);
    await updateDoc(boardsCollection);
  };
  return (
    <div className="container">
      <center>
        <h1> Product List</h1>
      </center>

      <div className="card">
        <div className="container">
          <div>
            <table class="table table-success table-striped-columns">
              <thead>
                <tr>
                  <td>Age</td>
                  <td>Name</td>
                  <td>Salary</td>

                  <center>
                    <td colSpan={2}>Action</td>
                  </center>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => {
                  return (
                    <tr key={product.id}>
                      <td>{product.age}</td>
                      <td>{product.name}</td>
                      <td>{product.salary}</td>

                      <center>
                        <td>
                          <button
                            onClick={editdata}
                            className="btn btn-primary"
                            style={{ margin: "10px" }}
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => deleteData(product.id)}
                            className="btn btn-danger"
                          >
                            Delete
                          </button>
                        </td>
                      </center>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default List;
