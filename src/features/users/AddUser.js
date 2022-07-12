import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid4 } from "uuid";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { addUser } from "./userSlice";

const AddUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: '',
        email: ''
    });

    const handleAddUser = () =>{
        setValues({name:'', email:''});
        dispatch(addUser({
          id: uuid4(),
          name: values.name,
          email: values.email
        }));
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
      <Button onClick={handleAddUser}>Submit</Button>
    </div>
  );
};

export default AddUser;
