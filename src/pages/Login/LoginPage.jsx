import { useState } from "react";

export default function LoginPage({setUser}) {
    const [formState, setFormState] = useState({
        username: "",
    })
    function handleChange(evt) {
        setFormState({
            username: evt.target.value,
        });
    }
    function handleSubmit(evt) {
        evt.preventDefault();
        setUser(formState.username)
    }
    return (
        <main>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input value={formState.username} onChange={handleChange} type="text" name="username" id="username" required/>
                &nbsp;
                <button type="submit">Login</button>
            </form>
        </main>
    )
}