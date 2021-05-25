import React, { useState, useContext } from "react";
import { FirebaseContext } from '../components/Firebase';
import {Form, Input, Button, ErrorMessage} from "../components/common";

const LoginPage = () => {
    const { firebase } = useContext(FirebaseContext);
    const [formValues, setFormValues] = useState({ email: '', password: ''});
    const [errorMessage, setErrorMessage] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        firebase.login(formValues).catch((error) => {
            setErrorMessage(error.message);
        });
    }

    function handleInputChange(e) {
        e.persist();
        setErrorMessage('');
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
                { !!errorMessage &&
                    <ErrorMessage>
                        {errorMessage}
                    </ErrorMessage>
                }
                <Button type="submit" block={true}>Login</Button>
            </Form>
        </section>);
}

export default LoginPage;
