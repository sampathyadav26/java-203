import { collection, getDocs, onSnapshot,doc, deleteDoc} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from "../FireBaseConfig";

function List() {
    const [products, setProducts] = useState([]);
    const ref = collection(db, "products");
    const fetchData = async () => {
        const datas = await getDocs(ref);
        setProducts(datas.docs.map((doc) => ({ ...doc.data(), pid: doc.id })));
    }
    useEffect(() => {
        fetchData();
    }, [])



    const deletes = async(id) => {
       const data= doc(db,'products',id)
        await deleteDoc(data)
        fetchData();

    }
    const edit = (id) => {
        alert("edited succesfully");


    }
    return (
        <div className='container'>
            <h1> Product List</h1>
            <hr />
            <div className='container'>
                <div >
                    <table className='table table-hover'>
                        <thead>
                            <tr>
                                <td>pdtId</td>
                                <td>pdtName</td>
                                <td>pdtQty</td>
                                <td>pdtPrice</td>
                                <td>Actions</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map(product => {
                                    return (
                                        <tr key={product.pid}>
                                            <td>{product.id}</td>
                                            <td>{product.name}</td>
                                            <td>{product.qty}</td>
                                            <td>{product.price}</td>
                                            <td><button onClick={edit} className="btn btn-primary" style={{ margin: "10px" }} >Edit</button>
                                                <button onClick={()=>{deletes(product.pid)}} className="btn btn-danger" >Delete</button>
                                            </td>


                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default List
