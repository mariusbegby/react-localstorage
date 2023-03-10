import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './components/Login';
import Register from './components/Register';
import Welcome from './components/Welcome';
import { useEffect, useState } from 'react';

function App() {
    const savedUser = () => {
        const saved = localStorage.getItem('User');
        const initialValue = JSON.parse(saved);
        return initialValue || '';
    };

    const [login, setLogin] = useState({ username: '', password: '' });

    const [userExists, setUserExists] = useState();

    // State for registered user
    const [user, setUser] = useState(savedUser);

    useEffect(() => {
        localStorage.setItem('User', JSON.stringify(user));
    }, [user]);

    console.log(user);

    return (
        <Routes>
            <Route element={<Layout />}>
                <Route
                    index
                    element={
                        !userExists ? (
                            <Login
                                login={login}
                                setLogin={setLogin}
                                user={user}
                                userExists={userExists}
                                setUserExists={setUserExists}
                            />
                        ) : (
                            <Welcome user={user} />
                        )
                    }
                />
                <Route
                    path='register'
                    element={<Register user={user} setUser={setUser} />}
                />
            </Route>
        </Routes>
    );
}

export default App;
