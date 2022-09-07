import { Button } from "bootstrap";
import React, { useState } from "react";

const AddBook = () => {
  const [title, settitle] = useState();
  const [author, setAuthor] = useState();
  const [status, setStatus] = useState();
  const [flag, setFlag] = useState();

  return (
    <div>
      <form>
        <div class="mb-3">
          <label for="exampleInputTitle" class="form-label">
            Book Title
          </label>
          <input
            type="text"
            placeholder="BookTitle"
            class="form-control"
            id="Title"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputAuthor" class="form-label">
            Book Author
          </label>
          <input
            type="text"
            placeholder="BookAuthor"
            class="form-control"
            id="Author"
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        </div>
        <button disabled={flag}
        variant="success"
        onClick={(e)=>{
            setStatus("Available");
            setFlag(true);
        }}
        >
            Available
        </button>
        <button
        variant="success"
        onClick={(e)=>{
            setStatus("Not Available");
            setFlag(true);
        }}
        >
           "Not Available"
           </button>
        </buttonGroup >
        
        
            <div>
                <button variant="primary" type="submit">
                    Add/Update
                </button>

            </div>
        
        
      </form>
    </div>
    
  );
};

export default AddBook;
