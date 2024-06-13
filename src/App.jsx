import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Login from './pages/Login';
import Member from './pages/Member';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import { useState } from 'react';

function App() {
    const [user, setUser] = useState(null);

    console.log('현재:', user);
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
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
