import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      if (onSearch) {
        onSearch(query);
      } else {
        navigate(`/search?q=${encodeURIComponent(query)}`);
      }
    }
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        placeholder="Search projects, services..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <SearchButton type="submit">
        <FaSearch />
      </SearchButton>
    </SearchForm>
  );
};

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  background: white;
  border-radius: 25px;
  padding: 8px 8px 8px 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 500px;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 8px 0;

  &::placeholder {
    color: #9ca3af;
  }
`;

const SearchButton = styled.button`
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.secondary};
    transform: scale(1.05);
  }
`;

export default SearchBar;
