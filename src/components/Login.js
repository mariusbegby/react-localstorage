export default function Login() {
    return (
        <form>
            <label htmlFor='username'>Brukernavn:</label>
            <input id='username' type='text' placeholder='Ola Nordmann'></input>
            
            <label htmlFor='password'>Passord:</label>
            <input id='password' type='password' placeholder='********'></input>

            <button type='submit'>Logg inn</button>
        </form>
    );
}
