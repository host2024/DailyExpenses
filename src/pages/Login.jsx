import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, InputGroup, Button, ToggleButton } from '../components/LoginsStyled';

function Login() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    return (
        <Container>
            <InputGroup>
                <label htmlFor="id">아이디</label>
                <input type="text" placeholder="아이디 입력" onChange={(e) => setId(e.target.value)} />
            </InputGroup>
            <InputGroup>
                <label htmlFor="password">비밀번호</label>
                <input type="password" placeholder="비밀번호 입력" onChange={(e) => setPassword(e.target.value)} />
            </InputGroup>
            <Button>로그인</Button>

            <ToggleButton
                onClick={() => {
                    navigate('/member');
                }}
            >
                회원가입
            </ToggleButton>
        </Container>
    );
}

export default Login;
