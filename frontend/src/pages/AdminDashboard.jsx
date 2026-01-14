import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { FaUsers, FaProjectDiagram, FaConciergeBell, FaCalendarCheck, FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const AdminDashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState(null);
  const [projects, setProjects] = useState([]);
  const [services, setServices] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user && ['admin', 'super_admin'].includes(user.role)) {
      fetchDashboardData();
    }
  }, [user]);

  const fetchDashboardData = async () => {
    try {
      const [statsRes, projectsRes, servicesRes, bookingsRes] = await Promise.all([
        axios.get('/admin/dashboard'),
        axios.get('/admin/projects'),
        axios.get('/admin/services'),
        axios.get('/bookings')
      ]);

      setStats(statsRes.data.data.stats);
      setProjects(projectsRes.data.data);
      setServices(servicesRes.data.data);
      setBookings(bookingsRes.data.data);
    } catch (err) {
      console.error('Error fetching dashboard data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (type, id) => {
    if (!window.confirm(`Are you sure you want to delete this ${type}?`)) return;

    try {
      await axios.delete(`/admin/${type}s/${id}`);
      fetchDashboardData();
    } catch (err) {
      alert('Failed to delete');
    }
  };

  if (!user || !['admin', 'super_admin'].includes(user.role)) {
    return (
      <Container>
        <ErrorMessage>Access denied. Admin privileges required.</ErrorMessage>
      </Container>
    );
  }

  if (loading) {
    return <Container><LoadingMessage>Loading...</LoadingMessage></Container>;
  }

  return (
    <Container>
      <Header>
        <h1>Admin Dashboard</h1>
        <p>Manage your website content and users</p>
      </Header>

      <Tabs>
        <Tab active={activeTab === 'overview'} onClick={() => setActiveTab('overview')}>
          Overview
        </Tab>
        <Tab active={activeTab === 'projects'} onClick={() => setActiveTab('projects')}>
          Projects
        </Tab>
        <Tab active={activeTab === 'services'} onClick={() => setActiveTab('services')}>
          Services
        </Tab>
        <Tab active={activeTab === 'bookings'} onClick={() => setActiveTab('bookings')}>
          Bookings
        </Tab>
      </Tabs>

      {activeTab === 'overview' && stats && (
        <OverviewTab>
          <StatsGrid>
            <StatCard>
              <IconWrapper color="#667eea">
                <FaProjectDiagram />
              </IconWrapper>
              <StatValue>{stats.projects}</StatValue>
              <StatLabel>Projects</StatLabel>
            </StatCard>
            <StatCard>
              <IconWrapper color="#764ba2">
                <FaConciergeBell />
              </IconWrapper>
              <StatValue>{stats.services}</StatValue>
              <StatLabel>Services</StatLabel>
            </StatCard>
            <StatCard>
              <IconWrapper color="#f59e0b">
                <FaUsers />
              </IconWrapper>
              <StatValue>{stats.users}</StatValue>
              <StatLabel>Users</StatLabel>
            </StatCard>
            <StatCard>
              <IconWrapper color="#10b981">
                <FaCalendarCheck />
              </IconWrapper>
              <StatValue>{stats.bookings}</StatValue>
              <StatLabel>Bookings</StatLabel>
            </StatCard>
          </StatsGrid>

          <RecentBookings>
            <h2>Recent Bookings</h2>
            {bookings.slice(0, 5).map(booking => (
              <BookingItem key={booking._id}>
                <div>
                  <strong>{booking.user?.firstName} {booking.user?.lastName}</strong>
                  <span>{booking.service}</span>
                </div>
                <StatusBadge status={booking.status}>{booking.status}</StatusBadge>
              </BookingItem>
            ))}
          </RecentBookings>
        </OverviewTab>
      )}

      {activeTab === 'projects' && (
        <TableTab>
          <TableHeader>
            <h2>Projects</h2>
            <AddButton><FaPlus /> Add Project</AddButton>
          </TableHeader>
          <Table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Featured</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map(project => (
                <tr key={project._id}>
                  <td>{project.title}</td>
                  <td>{project.category}</td>
                  <td>{project.featured ? 'Yes' : 'No'}</td>
                  <td>
                    <ActionButton><FaEdit /></ActionButton>
                    <ActionButton danger onClick={() => handleDelete('project', project._id)}>
                      <FaTrash />
                    </ActionButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableTab>
      )}

      {activeTab === 'services' && (
        <TableTab>
          <TableHeader>
            <h2>Services</h2>
            <AddButton><FaPlus /> Add Service</AddButton>
          </TableHeader>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map(service => (
                <tr key={service._id}>
                  <td>{service.name}</td>
                  <td>{service.description?.substring(0, 50)}...</td>
                  <td>
                    <ActionButton><FaEdit /></ActionButton>
                    <ActionButton danger onClick={() => handleDelete('service', service._id)}>
                      <FaTrash />
                    </ActionButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableTab>
      )}

      {activeTab === 'bookings' && (
        <TableTab>
          <TableHeader>
            <h2>All Bookings</h2>
          </TableHeader>
          <Table>
            <thead>
              <tr>
                <th>User</th>
                <th>Service</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map(booking => (
                <tr key={booking._id}>
                  <td>{booking.user?.firstName} {booking.user?.lastName}</td>
                  <td>{booking.service}</td>
                  <td>{new Date(booking.date).toLocaleDateString()}</td>
                  <td>
                    <StatusBadge status={booking.status}>{booking.status}</StatusBadge>
                  </td>
                  <td>
                    <ActionButton><FaEdit /></ActionButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableTab>
      )}
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.colors.light};
  padding: 40px 20px;
`;

const Header = styled.div`
  max-width: 1200px;
  margin: 0 auto 30px;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    color: ${props => props.theme.colors.dark};
    margin-bottom: 10px;
  }

  p {
    color: ${props => props.theme.colors.textLight};
  }
`;

const Tabs = styled.div`
  max-width: 1200px;
  margin: 0 auto 30px;
  display: flex;
  gap: 10px;
  border-bottom: 2px solid #e5e7eb;
`;

const Tab = styled.button`
  padding: 15px 30px;
  background: ${props => props.active ? props.theme.colors.primary : 'transparent'};
  color: ${props => props.active ? 'white' : props.theme.colors.dark};
  border: none;
  border-radius: 8px 8px 0 0;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.active ? props.theme.colors.primary : props.theme.colors.light};
  }
`;

const OverviewTab = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
`;

const StatCard = styled(motion.div)`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  text-align: center;
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  background: ${props => props.color}20;
  color: ${props => props.color};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin: 0 auto 15px;
`;

const StatValue = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.dark};
  margin-bottom: 5px;
`;

const StatLabel = styled.div`
  color: ${props => props.theme.colors.textLight};
  font-size: 1rem;
`;

const RecentBookings = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);

  h2 {
    margin-bottom: 20px;
    color: ${props => props.theme.colors.dark};
  }
`;

const BookingItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #e5e7eb;

  &:last-child {
    border-bottom: none;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  strong {
    color: ${props => props.theme.colors.dark};
  }

  span {
    color: ${props => props.theme.colors.textLight};
    font-size: 0.9rem;
  }
`;

const StatusBadge = styled.span`
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  background: ${props => {
    switch(props.status) {
      case 'confirmed': return '#d1fae5';
      case 'pending': return '#fef3c7';
      case 'cancelled': return '#fee2e2';
      default: return '#e5e7eb';
    }
  }};
  color: ${props => {
    switch(props.status) {
      case 'confirmed': return '#065f46';
      case 'pending': return '#92400e';
      case 'cancelled': return '#991b1b';
      default: return '#374151';
    }
  }};
`;

const TableTab = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`;

const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h2 {
    color: ${props => props.theme.colors.dark};
  }
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead {
    background: ${props => props.theme.colors.light};
  }

  th {
    padding: 15px;
    text-align: left;
    font-weight: 600;
    color: ${props => props.theme.colors.dark};
  }

  td {
    padding: 15px;
    border-top: 1px solid #e5e7eb;
  }

  tbody tr:hover {
    background: ${props => props.theme.colors.light};
  }
`;

const ActionButton = styled.button`
  padding: 8px 12px;
  margin-right: 5px;
  background: ${props => props.danger ? '#fee2e2' : props.theme.colors.light};
  color: ${props => props.danger ? '#dc2626' : props.theme.colors.dark};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.danger ? '#dc2626' : props.theme.colors.primary};
    color: white;
  }
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 100px 20px;
  font-size: 1.2rem;
  color: ${props => props.theme.colors.textLight};
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 100px 20px;
  font-size: 1.2rem;
  color: #dc2626;
  background: white;
  border-radius: 12px;
  max-width: 600px;
  margin: 50px auto;
`;

export default AdminDashboard;
