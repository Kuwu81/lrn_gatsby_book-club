import React, {useState} from "react";
import {Form, Input, Button} from "../components/common";


const Register = () => {
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    function handleInputChange(e) {
        setFormValues((currentValues) => ( {
            ...currentValues,
            [e.target.name]: e.target.value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formValues);
    }
    return <Form onSubmit={handleSubmit}>
        <Input name="email" value={formValues.email} onChange={handleInputChange} placeholder="email" type="email" required />
        <Input name="password" value={formValues.password} onChange={handleInputChange} placeholder="password" type="password" required minLength={3} />
        <Input name="confirmPassword" value={formValues.confirmPassword} onChange={handleInputChange} placeholder="confirm password" type="password" required minLength={3} />
        <Button type="submit" block>
            Register
        </Button>
    </Form>
}

export default Register;
