import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Login from './pages/Login';
import Member from './pages/Member';
import Profile from './pages/Profile';
import { Provider } from 'react-redux';
import store from './redux/store';
import Layout from './components/Layout';
import './App.css';
function App() {
    const [user, setUser] = useState(null);

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout user={user} setUser={setUser} />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/detail/:id" element={<Detail />} />
                        <Route path="/member" element={<Member />} />
                        <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
                    </Route>
                    <Route path="/login" element={<Login setUser={setUser} />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
