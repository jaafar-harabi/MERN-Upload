import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Axios from "axios"
import { useNavigate } from "react-router-dom"

const Register = () => {

  const [fname, setFName] = useState("");

  const [file, setFile] = useState("");

  const history = useNavigate();

  const setdata = (e) => {
    const { value } = e.target;
    setFName(value);
  }

  const setimgfile = (e) => {
    setFile(e.target.files[0])
  }


  const addUserData = async (e) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append("name", fname);
    formData.append("img", file);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }

    await Axios.post("http://127.0.0.1:3000/user/register/", formData, config).then(()=>{history("/")}).catch((err)=>{console.log(err)})
  
  }

  return (
    <>
      <div className="container mt-3">
        <h1>Upload Your Img Here</h1>

        <Form className='mt-3'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>UserName</Form.Label>
            <Form.Control type="text" name='fname' onChange={(e)=>{setdata(e)}} placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Select Your Image</Form.Label>
            <Form.Control type="file" onChange={setimgfile} name='photo' placeholder="" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={(e)=>{addUserData(e)} }>
            Submit
          </Button>
        </Form>
      </div>
    </>
  )
}

export default Register