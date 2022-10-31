import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

// import {Form, Formik} from 'formik';

const SecondPage = () => {

  const [wname, setWname] = useState();
  const [urlname, setUrlname] = useState();




  return (
    <div className='main-second'>
      {/* <h1>Welcome! First thing first</h1> */}
      <form className=''>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Workspace Name</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Eden"
            onChange={(e) => setWname(e.target.value)} />
        </div>

        <label for="basic-url">Workspace URL</label>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon3">www.eden.com/</span>
          </div>
          <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder="Example"
            onChange={(e) => setUrlname(e.target.value)}
          />
        </div>

      </form>
    </div>
  )
}

export default SecondPage