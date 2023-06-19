import styled from "styled-components";

interface CardProps {
    variant?: 'standard' | 'bordered'
}

export const Card = styled.div<CardProps>`
  border-radius: 12px;
  background: #ffffff;
  padding: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: ${props => props.variant === 'standard' ? 'none' : '1px solid rgba(224, 224, 224, 1)'};
`

Card.defaultProps = {
    variant: 'standard'
}