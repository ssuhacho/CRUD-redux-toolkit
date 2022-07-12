import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "../../components/TextField";
import Button from "../../components/Button";

const EditUser = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: '',
        email: ''
    });

    const handleEditUser = () =>{
        setValues({name:'', email:''});
        console.log(values);
        navigate('/');
    }

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Name"
        value= {values.name}
        onChange={(e)=> setValues({ ...values, name: e.target.value })}
        inputProps={{ type: "text", placeholder: "Suha Cho" }}
      />
      <br />
      <TextField
        label="Email"
        value= {values.email}
        onChange={(e)=> setValues({ ...values, email: e.target.value })}
        inputProps={{ type: "email", placeholder: "scho4@mail.com" }}
      />
      <Button onClick={handleEditUser}>Edit</Button>
    </div>
  );
}

export default EditUser