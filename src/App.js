import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './components/Login';
import Register from './components/Register';
import { useEffect, useState } from 'react';

function App() {
    const [user, setUser] = useState({ username: 'ola', password: 'nordmann' });

    useEffect(() => {
        localStorage.setItem('User', JSON.stringify(user));
    }, [user]);
    console.log(localStorage);
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Login />} />
                <Route path='register' element={<Register />} />
            </Route>
        </Routes>
    );
}

export default App;
