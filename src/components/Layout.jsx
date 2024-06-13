import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getUserInfo } from '../lib/api/auth';
import {
    Navbar,
    NavItems,
    NavItem,
    UserProfile,
    UserAvatar,
    UserName,
    LogoutButton,
    PageContainer,
} from './LayoutStyled';

export default function Layout({ user, setUser }) {
    const navigate = useNavigate();

    useEffect(() => {
        getUserInfo().then((res) => {
            if (res) {
                setUser({
                    userId: res.id,
                    nickname: res.nickname,
                    avatar: res.avatar,
                });
            } else {
                Logout();
            }
        });
    }, []);

    const Logout = () => {
        setUser(null);
        navigate('/Login');
        localStorage.clear();
    };

    return (
        <>
            <Navbar>
                <NavItems>
                    <NavItem to="/">Home</NavItem>
                    <NavItem to="profile">내 프로필</NavItem>
                </NavItems>
                <UserProfile>
                    {user && (
                        <>
                            <UserAvatar src={user.avatar} alt="User Avatar" />
                            <UserName>{user.nickname}</UserName>
                            <LogoutButton onClick={Logout}>로그아웃</LogoutButton>
                        </>
                    )}
                </UserProfile>
            </Navbar>
            <PageContainer>
                <Outlet />
            </PageContainer>
        </>
    );
}
