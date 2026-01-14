import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { FaHome, FaUser, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';

const Navigation = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Safely get auth values
  const isAuthenticated = auth?.isAuthenticated || false;
  const user = auth?.user || null;
  const logout = auth?.logout || (async () => {});
  
  // Don't render until auth is initialized
  if (auth?.loading) {
    return (
      <Nav>
        <Container>
          <Logo to="/">Interior Design</Logo>
        </Container>
      </Nav>
    );
  }

  const handleLogout = async () => {
    await logout();
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  return (
    <Nav>
      <Container>
        <Logo to="/">Interior Design</Logo>
        
        <DesktopMenu>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          
          {isAuthenticated ? (
            <>
              <NavLink to="/profile">Profile</NavLink>
              {['admin', 'super_admin'].includes(user?.role) && (
                <NavLink to="/admin">Admin</NavLink>
              )}
              <UserMenu>
                <UserInfo>
                  <FaUser />
                  <span>{user && user.firstName ? user.firstName : 'User'}</span>
                </UserInfo>
                <LogoutButton onClick={handleLogout}>
                  <FaSignOutAlt /> Logout
                </LogoutButton>
              </UserMenu>
            </>
          ) : (
            <AuthButtons>
              <LoginButton to="/login">Login</LoginButton>
              <RegisterButton to="/register">Sign Up</RegisterButton>
            </AuthButtons>
          )}
        </DesktopMenu>

        <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </Container>

      {isMobileMenuOpen && (
        <MobileMenu
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <MobileNavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>
            <FaHome /> Home
          </MobileNavLink>
          <MobileNavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>
            About
          </MobileNavLink>
          <MobileNavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </MobileNavLink>
          
          {isAuthenticated ? (
            <>
              <MobileNavLink to="/profile" onClick={() => setIsMobileMenuOpen(false)}>
                <FaUser /> Profile
              </MobileNavLink>
              {['admin', 'super_admin'].includes(user?.role) && (
                <MobileNavLink to="/admin" onClick={() => setIsMobileMenuOpen(false)}>
                  Admin
                </MobileNavLink>
              )}
              <MobileLogoutButton onClick={handleLogout}>
                <FaSignOutAlt /> Logout
              </MobileLogoutButton>
            </>
          ) : (
            <>
              <MobileNavLink to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                Login
              </MobileNavLink>
              <MobileNavLink to="/register" onClick={() => setIsMobileMenuOpen(false)}>
                Sign Up
              </MobileNavLink>
            </>
          )}
        </MobileMenu>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: ${props => props.theme.shadows.md};
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-decoration: none;
`;

const DesktopMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  padding: 8px 12px;
  border-radius: ${props => props.theme.borderRadius.md};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    width: 80%;
    height: 2px;
    background: ${props => props.theme.gradients.primary};
    transition: transform 0.3s ease;
  }

  &:hover {
    color: ${props => props.theme.colors.primary};
    background: rgba(102, 126, 234, 0.05);

    &::before {
      transform: translateX(-50%) scaleX(1);
    }
  }
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

const LoginButton = styled(Link)`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  font-weight: 600;
  padding: 10px 24px;
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.borderRadius.lg};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: transparent;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: ${props => props.theme.gradients.primary};
    transition: width 0.3s ease;
    z-index: -1;
  }

  &:hover {
    color: white;
    border-color: ${props => props.theme.colors.primary};
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.md};

    &::before {
      width: 100%;
    }
  }
`;

const RegisterButton = styled(Link)`
  background: ${props => props.theme.gradients.primary};
  color: white;
  text-decoration: none;
  font-weight: 600;
  padding: 10px 24px;
  border-radius: ${props => props.theme.borderRadius.lg};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${props => props.theme.shadows.md};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.colored};

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

const UserMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${props => props.theme.colors.dark};
  font-weight: 500;
`;

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: 2px solid #dc2626;
  color: #dc2626;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: #dc2626;
    color: white;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.dark};
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  flex-direction: column;
  background: white;
  border-top: 1px solid #e5e7eb;
  padding: 20px;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileNavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${props => props.theme.colors.dark};
  text-decoration: none;
  font-weight: 500;
  padding: 12px 0;
  border-bottom: 1px solid #e5e7eb;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const MobileLogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  background: transparent;
  border: none;
  color: #dc2626;
  text-align: left;
  font-weight: 500;
  padding: 12px 0;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #b91c1c;
  }
`;

export default Navigation;
