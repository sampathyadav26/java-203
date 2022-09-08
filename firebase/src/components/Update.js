import React from 'react'

function Update() {

    const [id, setId] = useState();
    const [name, setName] = useState();
    const [qty, setQty] = useState();
    const [price, setprice] = useState();
    const ref = collection(db, "products");

    return (
        <div>
            <h1>Update Product</h1>
            <hr />
            <form>
                <div className="mb-3">
                    <label for="exampleInputid">Product Id</label>
                    <input
                        type="text"
                        className="form-control"
                        id="pid"
                        value={id}
                        onChange={(e) => setId(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputid">Product Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="pid"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputid">Product Qty</label>
                    <input
                        type="text"
                        className="form-control"
                        id="pid"
                        value={qty}
                        onChange={(e) => setQty(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputid">Product Price</label>
                    <input
                        type="text"
                        className="form-control"
                        id="pid"
                        value={price}
                        onChange={(e) => setprice(e.target.value)} />
                </div>

                <button className="btn btn-primary" onClick={addProduct}>Update</button>
            </form>
        </div>
    )
}

export default Update
