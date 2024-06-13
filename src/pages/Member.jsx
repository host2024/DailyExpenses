import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, InputGroup, ToggleButton, Button } from '../components/MemberStyled';
import { register } from '../lib/api/auth';

function Member() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');
    const navigate = useNavigate();

    const Login = async (e) => {
        e.preventDefault();

        // ID, 비밀번호, 닉네임 검증
        if (!id.trim()) {
            alert('회원가입 아이디 공백');
            return;
        }

        if (!password.trim()) {
            alert('비밀번호 공백');
            return;
        }

        if (!nickname.trim()) {
            alert('닉네임 공백');
            return;
        }

        const response = await register({ id: id, password: password, nickname: nickname });
        if (response) {
            confirm('가입 완료.');
            navigate('/login');
        }
    };

    return (
        <Container>
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
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    minLength={1}
                    maxLength={10}
                />
            </InputGroup>
            <ToggleButton onClick={Login}>회원가입</ToggleButton>

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
