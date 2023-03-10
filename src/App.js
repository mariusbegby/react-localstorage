import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './components/Login';
import Register from './components/Register';

function App() {
    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Login />} />
                    <Route path='register' element={<Register />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
