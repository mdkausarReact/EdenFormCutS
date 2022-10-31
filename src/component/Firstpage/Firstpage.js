import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

// import {Form, Formik} from 'formik';

const Firstpage = () => {

  const [fname, setFname] = useState();
  const [dname, setDname] = useState();



  return (
    <div className='main-first'>
      {/* <h1>Welcome! First thing first</h1> */}
      <form className=''>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Full Name</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Steve Jobs"
            onChange={(e) => setFname(e.target.value)} />
        </div>
        <div className="form-group displayin">
          <label htmlFor="exampleInputPassword1">Display Name</label>
          <input type="text" className="form-control " id="exampleInputPassword1" placeholder="Steve"
            onChange={(e) => setDname(e.target.value)} />

        </div>

      </form>
    </div>
  )
}

export default Firstpage