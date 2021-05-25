import React, { useState, useContext } from "react";
import { FirebaseContext } from '../components/Firebase';
import {Form, Input, Button} from "../components/common";

const LoginPage = () => {
    const { firebase } = useContext(FirebaseContext);
    const [formValues, setFormValues] = useState({ email: '', password: ''});

    function handleSubmit(e) {
        e.preventDefault();
        firebase.login(formValues);
    }

    function handleInputChange(e) {
        e.persist();
        setFormValues((currentValues) => ({
            ...currentValues,
             [e.target.name]: e.target.value
        }));
    }
    return (
        <section>
            <Form onSubmit={handleSubmit}>
                <Input name="email" value={formValues.email} placeholder="email" type="email" onChange={handleInputChange} />
                <Input name="password" value={formValues.password } placeholder="password" type="password" onChange={handleInputChange} />
                <Button type="submit" block={true}>Login</Button>
            </Form>
        </section>);
}

export default LoginPage;
