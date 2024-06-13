import { Link, Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
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

const NavItems = styled.div`
    display: flex;
    align-items: center;
`;
