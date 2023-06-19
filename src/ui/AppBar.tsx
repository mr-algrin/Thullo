import React from "react";
import styled from "styled-components";


const AppBarBase = styled.div`
  padding: 0 30px;
  height: 48px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05);
  background: #FFFFFF;
  display: flex;
  align-items: center;
`;

interface AppBarProps {
    children?: React.ReactNode | React.ReactNode[]
}

const AppBar: React.FC<AppBarProps> = ({children}) => {

    return (
        <AppBarBase>
            {children}
        </AppBarBase>
    )
}

export default AppBar;