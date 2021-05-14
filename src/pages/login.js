import React, {useState} from "react";
import { useAuth } from '../components/Firebase';
import Layout from "../components/Layout";

const LoginPage = () => {
    const { firebase } = useAuth();
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
    return (<Layout>
        <form onSubmit={handleSubmit}>
            <input name="email" value={formValues.email} placeholder="email" type="email" onChange={handleInputChange} />
            <input name="password" value={formValues.password } placeholder="password" type="password" onChange={handleInputChange} />
            <button type="submit">Login</button>
        </form>
    </Layout>);
}

export default LoginPage;
