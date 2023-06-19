import React from "react";
import styled, {css} from "styled-components";

import {UnstyledButton} from "./UnstyledButton";



export type ButtonBaseVariant = 'filled' | 'outlined' | 'text';

export type ButtonBaseColor = 'primary' | 'secondary' | 'danger' | 'default';

export type ButtonBaseSize = 'small' | 'medium' | 'large';

export interface ButtonBaseProps{
    children?: React.ReactNode;
    variant?: ButtonBaseVariant;
    color?: ButtonBaseColor;
    size?: ButtonBaseSize;
}

type ButtonBaseDefaults = {
    variant: ButtonBaseVariant,
    color: ButtonBaseColor,
    size: ButtonBaseSize
}

export const ButtonBaseDefaultValue: ButtonBaseDefaults = {
    color: 'primary',
    variant: "filled",
    size: "medium"
}

const ButtonColorMap: {[key in ButtonBaseColor]: string} = {
    primary: '#2F80ED',
    secondary: '#455A64',
    danger: '#D32F2F',
    default: '#c7c7c7'
}

export const ButtonBase = styled(UnstyledButton)<ButtonBaseProps>`
  min-width: 80px;
  border-radius: 8px;
  text-align: center;
  padding: 2px 10px;
  width: fit-content;
  box-shadow: ${props => props.variant === 'text' ? 'none' : '0 2px 3px rgba(51, 51, 51, 0.2)'};

  //base font styles
  font-style: normal;
  font-weight: 500;
  line-height: 10px;
  
  ${({size = ButtonBaseDefaultValue.size}) => ({
    small: css`
      height: 32px;
      max-height: 32px;
      font-size: 12px;
    `,
    medium: css`
      height: 36px;
      max-height: 36px;
      font-size: 14px;
    `,
    large: css`
      height: 40px;
      max-height: 40px;
      font-size: 16px;
    `
  }[size])}

  ${({variant = ButtonBaseDefaultValue.variant, color = ButtonBaseDefaultValue.color}) => ({
    filled: css`
      background: ${ButtonColorMap[color]};
      color: ${color === "default" ? "#000000" :"#ffffff"};
      &:hover {
        background: ${ButtonColorMap[color]}e0;
      }
    `,
    outlined: css`
      border: 1.5px solid ${ButtonColorMap[color]};
      color: ${ButtonColorMap[color]};
      &:hover{
        background: ${ButtonColorMap[color]}1a;
      }
    `,
    text: css`
      background: none;
      color: ${ButtonColorMap[color]};
      &:hover{
        background: ${ButtonColorMap[color]}1a;
      }
    `
  }[variant])}
`;
