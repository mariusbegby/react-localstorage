import { Link } from 'react-router-dom';

export default function Login({
    login,
    setLogin,
    user,
    userExists,
    setUserExists
}) {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        setLogin((prev) => ({ ...prev, [inputName]: inputValue }));
    };

    const handleClick = () => {
        login.username === user.username
            ? setUserExists(true)
            : setUserExists(false);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Brukernavn:</label>
                <input
                    id='username'
                    type='text'
                    name='username'
                    placeholder='ola'
                    onChange={handleChange}></input>

                <label htmlFor='password'>Passord:</label>
                <input
                    id='password'
                    type='password'
                    name='password'
                    placeholder='********'
                    onChange={handleChange}></input>

                <button type='submit' onClick={handleClick}>
                    Logg inn
                </button>
            </form>

            {userExists === false ? (
                <p>
                    Brukeren finnes ikke,{' '}
                    <Link to='register'>registrer her</Link>.
                </p>
            ) : null}
        </>
    );
}
