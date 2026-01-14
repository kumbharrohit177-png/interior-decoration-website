import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './context/AuthContext';
import ErrorBoundary from './components/ErrorBoundary';
import App from './App.jsx';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

console.log('🚀 App starting...');

try {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  
  root.render(
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <AuthProvider>
            <App />
          </AuthProvider>
        </BrowserRouter>
      </ThemeProvider>
    </ErrorBoundary>
  );
  
  console.log('✅ App rendered successfully');
} catch (error) {
  console.error('❌ Error rendering app:', error);
}
