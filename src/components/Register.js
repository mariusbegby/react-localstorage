import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register({ user, setUser }) {
    const [complete, setComplete] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        setUser((prev) => ({ ...prev, [inputName]: inputValue }));
    };

    const handleClick = () => {
        user.password === user.confirmPassword
            ? setComplete(true)
            : console.log('passwords does not match');
    };

    return (
        <>
            {complete ? (
                <p>Bruker ble laget, <Link to='/'>logg inn</Link>.</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label htmlFor='username'>Lag et brukernavn:</label>
                    <input
                        id='username'
                        name='username'
                        placeholder='ola'
                        type='text'
                        onChange={handleChange}></input>

                    <label htmlFor='password'>Lag et passord:</label>
                    <input
                        id='password'
                        name='password'
                        placeholder='********'
                        type='password'
                        onChange={handleChange}></input>

                    <label htmlFor='confirmPassword'>Lag et passord:</label>
                    <input
                        id='confirmPassword'
                        name='confirmPassword'
                        placeholder='********'
                        type='password'
                        onChange={handleChange}></input>

                    <button type='submit' onClick={handleClick}>
                        Registrer
                    </button>
                </form>
            )}
        </>
    );
}
