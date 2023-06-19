import styled from "styled-components";
import React from "react";

export const UnstyledButton = styled.button`
  cursor: pointer;
  padding: 0;
  margin: 0;
  border: none;
  background: transparent;
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
  font-family: inherit;
  line-height: inherit;
`


interface ButtonBaseProps {
    variant: 'filled' | 'outlined'
}

const ButtonBase = styled(UnstyledButton)<ButtonBaseProps>`
    
`


interface ButtonProps extends ButtonBaseProps {
    children: string
}


const ButtonBase = styled("button")`
    
`


const Button: React.FC<ButtonProps> = (props) => {
    const {
        children
    } = props;

    return (
        <ButtonBase>
            {children}
        </ButtonBase>
    )
}

export default Button;