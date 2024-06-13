import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Login from './pages/Login';
import Member from './pages/Member';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import { useEffect, useState } from 'react';
import { getUserInfo } from './lib/api/auth';

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        getUserInfo().then((res) => {
            if (res) {
                setUser({
                    userId: res.id,
                    nickname: res.nickname,
                    avatar: res.avatar,
                });
            }
        });
    }, []);

    console.log('현재:', user);
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route index element={<Home />} />
                        <Route path="/detail/:id" element={<Detail />} />
                        <Route path="/login" element={<Login setUser={setUser} />} />
                        <Route path="/member" element={<Member />} />
                    </Routes>
                </BrowserRouter>
            </Provider>
        </>
    );
}

export default App;
