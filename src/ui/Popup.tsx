import styled from "styled-components";
import React from "react";


const PopupBase = styled.div`
  border: 1px solid rgba(224, 224, 224, 1);
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 10px;
`

interface PopupProps {
    children: React.ReactNode | React.ReactNode []
}

const Popup = ({children}: PopupProps) => {

    return (
        <PopupBase>
            {children}
        </PopupBase>
    )
}

export default Popup;