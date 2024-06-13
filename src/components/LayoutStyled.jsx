import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.nav`
    background-color: #333;
    color: white;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: calc(100% - 2rem);
    top: 0;
    z-index: 1000;
    max-width: 1240px;
`;

export const NavItems = styled.div`
    display: flex;
    align-items: center;
`;

export const NavItem = styled(Link)`
    color: white;
    margin: 0 10px;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

export const UserProfile = styled.div`
    display: flex;
    align-items: center;
`;

export const UserAvatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 10px;
    margin-right: 10px;
`;

export const UserName = styled.span`
    color: white;
    margin-right: 20px;
`;

export const LogoutButton = styled.button`
    padding: 8px 12px;
    background-color: #ff4d4d;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #cc0000;
    }
`;

export const PageContainer = styled.div`
    padding: 6rem 2rem;
`;
