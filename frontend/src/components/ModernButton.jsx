import styled from 'styled-components';

export const ModernButton = styled.button`
  padding: 14px 28px;
  background: ${props => {
    if (props.variant === 'outline') return 'transparent';
    if (props.variant === 'ghost') return 'transparent';
    return props.theme.gradients.primary;
  }};
  color: ${props => {
    if (props.variant === 'outline' || props.variant === 'ghost') {
      return props.theme.colors.primary;
    }
    return 'white';
  }};
  border: ${props => {
    if (props.variant === 'outline') return `2px solid ${props.theme.colors.primary}`;
    return 'none';
  }};
  border-radius: ${props => props.theme.borderRadius.lg};
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${props => {
    if (props.variant === 'outline' || props.variant === 'ghost') return 'none';
    return props.theme.shadows.md;
  }};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => {
      if (props.variant === 'outline' || props.variant === 'ghost') {
        return props.theme.shadows.md;
      }
      return props.theme.shadows.colored;
    }};

    &::before {
      width: 300px;
      height: 300px;
    }

    ${props => props.variant === 'outline' && `
      background: ${props.theme.gradients.primary};
      color: white;
      border-color: ${props.theme.colors.primary};
    `}

    ${props => props.variant === 'ghost' && `
      background: rgba(102, 126, 234, 0.1);
    `}
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

export const ModernCard = styled.div`
  background: white;
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.padding || '24px'};
  box-shadow: ${props => props.theme.shadows.lg};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.xl};
  }
`;

export const GlassCard = styled.div`
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.padding || '24px'};
  box-shadow: ${props => props.theme.shadows.lg};
  transition: all 0.3s ease;
`;

export default ModernButton;
