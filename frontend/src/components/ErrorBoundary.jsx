import React from 'react';
import styled from 'styled-components';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorContent>
            <h1>Something went wrong</h1>
            <p>{this.state.error?.message || 'An unexpected error occurred'}</p>
            <button onClick={() => window.location.reload()}>
              Reload Page
            </button>
          </ErrorContent>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

const ErrorContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f9fa;
  padding: 20px;
`;

const ErrorContent = styled.div`
  text-align: center;
  max-width: 500px;

  h1 {
    color: #dc2626;
    margin-bottom: 15px;
  }

  p {
    color: #6b7280;
    margin-bottom: 20px;
  }

  button {
    padding: 10px 20px;
    background: #667eea;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;

    &:hover {
      background: #5568d3;
    }
  }
`;

export default ErrorBoundary;
