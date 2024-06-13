import { useState } from 'react';
import { Container, InputGroup, Button } from '../components/ProfuileStyled';
import { updateProfile } from '../lib/api/auth';
import { useNavigate } from 'react-router-dom';

export default function Profile({ user, setUser }) {
    const [nickname, setNickname] = useState('');
    const [avatar, setAvatar] = useState(null);
    const navigate = useNavigate();

    const updateFile = async () => {
        const formData = new FormData();
        formData.append('nickname', nickname);
        formData.append('avatar', avatar);
        const response = await updateProfile(formData);
        if (response.success) {
            setUser({ ...user, nickname: response.nickname, avatar: response.avatar });
            navigate('/');
        }
    };

    return (
        <Container>
            <h2>프로필 수정</h2>
            <InputGroup>
                <label htmlFor="nickname">닉네임</label>
                <input
                    type="text"
                    placeholder="닉네임"
                    minLength="1"
                    maxLength="10"
                    onChange={(e) => setNickname(e.target.value)}
                />
            </InputGroup>
            <InputGroup>
                <label htmlFor="avatar">아바타 이미지</label>
                <input type="file" accept="image/*" onChange={(e) => setAvatar(e.target.files[0])} />
            </InputGroup>
            <Button onClick={updateFile}>프로필 업데이트</Button>
        </Container>
    );
}
