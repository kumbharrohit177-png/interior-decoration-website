import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useAuth } from '../context/AuthContext';
import { FaUser, FaEnvelope, FaPhone, FaLock, FaCamera, FaSave } from 'react-icons/fa';

const Profile = () => {
  const { user, loading, updateProfile, updatePassword, uploadAvatar } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    phone: ''
  });
  
  // Update profile data when user loads
  useEffect(() => {
    if (user) {
      setProfileData({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        phone: user.phone || ''
      });
    }
  }, [user]);
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [message, setMessage] = useState({ type: '', text: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleProfileChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  const handlePasswordChange = (e) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value
    });
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const result = await updateProfile(profileData);
      if (result.success) {
        setMessage({ type: 'success', text: 'Profile updated successfully!' });
      } else {
        setMessage({ type: 'error', text: result.error });
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'Failed to update profile' });
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setMessage({ type: 'error', text: 'Passwords do not match' });
      return;
    }

    if (passwordData.newPassword.length < 6) {
      setMessage({ type: 'error', text: 'Password must be at least 6 characters' });
      return;
    }

    setIsLoading(true);

    try {
      const result = await updatePassword(passwordData.currentPassword, passwordData.newPassword);
      if (result.success) {
        setMessage({ type: 'success', text: 'Password updated successfully!' });
        setPasswordData({
          currentPassword: '',
          newPassword: '',
          confirmPassword: ''
        });
      } else {
        setMessage({ type: 'error', text: result.error });
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'Failed to update password' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleAvatarChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      setMessage({ type: 'error', text: 'File size must be less than 5MB' });
      return;
    }

    setIsLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const result = await uploadAvatar(file);
      if (result.success) {
        setMessage({ type: 'success', text: 'Avatar updated successfully!' });
      } else {
        setMessage({ type: 'error', text: result.error });
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'Failed to upload avatar' });
    } finally {
      setIsLoading(false);
    }
  };

  if (loading) {
    return (
      <Container>
        <LoadingMessage>Loading...</LoadingMessage>
      </Container>
    );
  }

  if (!user) {
    return (
      <Container>
        <LoadingMessage>Please log in to view your profile.</LoadingMessage>
      </Container>
    );
  }

  return (
    <Container>
      <ProfileHeader>
        <h1>My Profile</h1>
        <p>Manage your account settings and preferences</p>
      </ProfileHeader>

      <ProfileContent>
        <Sidebar>
          <TabButton
            active={activeTab === 'profile'}
            onClick={() => setActiveTab('profile')}
          >
            <FaUser /> Profile Information
          </TabButton>
          <TabButton
            active={activeTab === 'password'}
            onClick={() => setActiveTab('password')}
          >
            <FaLock /> Change Password
          </TabButton>
        </Sidebar>

        <MainContent>
          {message.text && (
            <Message type={message.type}>
              {message.text}
            </Message>
          )}

          {activeTab === 'profile' && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Section>
                <SectionTitle>
                  <h2>Profile Information</h2>
                </SectionTitle>

                <AvatarSection>
                  <AvatarPreview>
                    {user?.avatar ? (
                      <img src={`http://localhost:5000${user.avatar}`} alt="Avatar" />
                    ) : (
                      <FaUser />
                    )}
                  </AvatarPreview>
                  <AvatarUpload>
                    <input
                      type="file"
                      id="avatar"
                      accept="image/*"
                      onChange={handleAvatarChange}
                      style={{ display: 'none' }}
                    />
                    <label htmlFor="avatar">
                      <FaCamera /> Change Avatar
                    </label>
                  </AvatarUpload>
                </AvatarSection>

                <Form onSubmit={handleProfileSubmit}>
                  <FormRow>
                    <FormGroup>
                      <Label>
                        <FaUser /> First Name
                      </Label>
                      <Input
                        type="text"
                        name="firstName"
                        value={profileData.firstName}
                        onChange={handleProfileChange}
                        required
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label>
                        <FaUser /> Last Name
                      </Label>
                      <Input
                        type="text"
                        name="lastName"
                        value={profileData.lastName}
                        onChange={handleProfileChange}
                        required
                      />
                    </FormGroup>
                  </FormRow>

                  <FormGroup>
                    <Label>
                      <FaEnvelope /> Email
                    </Label>
                    <Input
                      type="email"
                      value={user?.email || ''}
                      disabled
                      style={{ opacity: 0.6 }}
                    />
                    <HelperText>Email cannot be changed</HelperText>
                  </FormGroup>

                  <FormGroup>
                    <Label>
                      <FaPhone /> Phone Number
                    </Label>
                    <Input
                      type="tel"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleProfileChange}
                      placeholder="+1 234 567 8900"
                    />
                  </FormGroup>

                  <SubmitButton type="submit" disabled={isLoading}>
                    <FaSave /> {isLoading ? 'Saving...' : 'Save Changes'}
                  </SubmitButton>
                </Form>
              </Section>
            </motion.div>
          )}

          {activeTab === 'password' && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Section>
                <SectionTitle>
                  <h2>Change Password</h2>
                </SectionTitle>

                <Form onSubmit={handlePasswordSubmit}>
                  <FormGroup>
                    <Label>
                      <FaLock /> Current Password
                    </Label>
                    <Input
                      type="password"
                      name="currentPassword"
                      value={passwordData.currentPassword}
                      onChange={handlePasswordChange}
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label>
                      <FaLock /> New Password
                    </Label>
                    <Input
                      type="password"
                      name="newPassword"
                      value={passwordData.newPassword}
                      onChange={handlePasswordChange}
                      required
                      minLength={6}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label>
                      <FaLock /> Confirm New Password
                    </Label>
                    <Input
                      type="password"
                      name="confirmPassword"
                      value={passwordData.confirmPassword}
                      onChange={handlePasswordChange}
                      required
                      minLength={6}
                    />
                  </FormGroup>

                  <SubmitButton type="submit" disabled={isLoading}>
                    <FaLock /> {isLoading ? 'Updating...' : 'Update Password'}
                  </SubmitButton>
                </Form>
              </Section>
            </motion.div>
          )}
        </MainContent>
      </ProfileContent>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.colors.light};
  padding: 40px 20px;
`;

const ProfileHeader = styled.div`
  max-width: 1200px;
  margin: 0 auto 40px;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    color: ${props => props.theme.colors.dark};
    margin-bottom: 10px;
  }

  p {
    color: ${props => props.theme.colors.textLight};
    font-size: 1.1rem;
  }
`;

const ProfileContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: row;
    overflow-x: auto;
  }
`;

const TabButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 20px;
  background: ${props => props.active ? props.theme.colors.primary : 'white'};
  color: ${props => props.active ? 'white' : props.theme.colors.dark};
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;

  &:hover {
    background: ${props => props.active ? props.theme.colors.primary : props.theme.colors.light};
  }
`;

const MainContent = styled.div`
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Section = styled.div``;

const SectionTitle = styled.div`
  margin-bottom: 30px;

  h2 {
    font-size: 1.8rem;
    color: ${props => props.theme.colors.dark};
  }
`;

const AvatarSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #e5e7eb;
`;

const AvatarPreview = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${props => props.theme.colors.light};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  svg {
    font-size: 2.5rem;
    color: ${props => props.theme.colors.textLight};
  }
`;

const AvatarUpload = styled.div`
  label {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    background: ${props => props.theme.colors.primary};
    color: white;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${props => props.theme.colors.dark};
  font-weight: 500;

  svg {
    color: ${props => props.theme.colors.primary};
  }
`;

const Input = styled.input`
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const HelperText = styled.span`
  font-size: 0.85rem;
  color: ${props => props.theme.colors.textLight};
`;

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Message = styled.div`
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 20px;
  background: ${props => props.type === 'success' ? '#d1fae5' : '#fee2e2'};
  color: ${props => props.type === 'success' ? '#065f46' : '#dc2626'};
`;

const LoadingMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  font-size: 1.2rem;
  color: ${props => props.theme.colors.textLight};
`;

export default Profile;
