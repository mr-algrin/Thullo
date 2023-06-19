import styled from "styled-components";
import {Property} from 'csstype';
import React, {CSSProperties} from "react";

interface BoxBaseProps{
    flex: Property.Flex;
    flexDirection?: Property.FlexDirection;
    justifyContent?: Property.JustifyContent;
    alignItems?: Property.AlignItems;
    padding?: number;
    style?: CSSProperties;
}

interface BoxProps extends BoxBaseProps {
    children: React.ReactNode | React.ReactNode[]
}

const BoxBase = styled.div<BoxBaseProps>`
  padding: ${props => props.padding}px;
  display: flex;
  flex: ${props => props.flex};
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
`

const Box = (props: BoxProps) => {
    const {children, ...other} = props;

    return (
        <BoxBase {...other}>
            {children}
        </BoxBase>
    )
}

Box.defaultProps = {
    flexDirection: "column",
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 'auto',
    padding: 0,
}

export default Box;