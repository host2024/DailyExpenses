import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, InputGroup, ToggleButton, Button } from '../components/MemberStyled';

function Member() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');
    const navigate = useNavigate();

    const Login = (e) => {
        e.preventDefault();

        // ID 검증
        if (!id.trim()) {
            alert('회원가입 공백');
            return;
        }

        if (!password.trim()) {
            alert('비번 공백');
            return;
        }

        if (!user.trim()) {
            alert('닉네임 공백');
            return;
        }

        alert('회원가입 성공');
        navigate('/login');
    };

    return (
        <Container>
            <form onSubmit={Login}>
                <InputGroup>
                    <label htmlFor="id">회원가입 아이디</label>
                    <input
                        type="text"
                        placeholder="아이디 입력"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        minLength={4}
                        maxLength={10}
                    />
                </InputGroup>
                <InputGroup>
                    <label htmlFor="password">비밀번호</label>
                    <input
                        type="password"
                        placeholder="비밀번호 입력"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        minLength={4}
                        maxLength={15}
                    />
                </InputGroup>
                <InputGroup>
                    <label htmlFor="user">닉네임</label>
                    <input
                        type="text"
                        placeholder="닉네임 입력"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        minLength={1}
                        maxLength={10}
                    />
                </InputGroup>
                <ToggleButton type="submit">회원가입</ToggleButton>
            </form>
            <Button
                onClick={() => {
                    navigate('/login');
                }}
            >
                로그인
            </Button>
        </Container>
    );
}

export default Member;
