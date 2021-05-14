import React, { useState, useContext } from "react";
import { FirebaseContext } from '../components/Firebase';

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
            <form onSubmit={handleSubmit}>
                <input name="email" value={formValues.email} placeholder="email" type="email" onChange={handleInputChange} />
                <input name="password" value={formValues.password } placeholder="password" type="password" onChange={handleInputChange} />
                <button type="submit">Login</button>
            </form>
        </section>);
}

export default LoginPage;
