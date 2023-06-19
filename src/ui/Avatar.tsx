import styled, {css} from "styled-components";
import React from "react";

interface AvatarWrapperProps {
    size?: 'small' | 'medium' | 'large';
}

interface AvatarProps extends AvatarWrapperProps {
    children?: string;
    src?: string;
    alt?: string;
    onClick?: () => void
}

const AvatarWrapper = styled.div<AvatarWrapperProps>`
  cursor: pointer;
  border-radius: 8px;
  background: #e5e5e5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  color: grey;

  ${({size = 'medium'}) => ({
    small: css`
      width: 28px;
      height: 28px;
    `,
    medium: css`
      width: 32px;
      height: 32px;
    `,
    large: css`
      width: 36px;
      height: 36px;
    `
  }[size])}
`


const Avatar = (props: AvatarProps) => {

    const {isAvatar, label} = React.useMemo(() => {
        if (props.src)
            return {isAvatar: true, label: ""};
        else if (typeof props.children === "string" && props.children.length)
            return {isAvatar: false, label: props.children[0]}
        else return {isAvatar: false, label: "U"}
    }, [props]);

    if (isAvatar) {
        return (
            <AvatarWrapper size={props.size}>
                <img
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 'inherit'
                    }}
                    src={props.src}
                    alt={props.alt}
                />
            </AvatarWrapper>
        )
    }

    return (
        <AvatarWrapper size={props.size}>
            {label}
        </AvatarWrapper>
    )
}

Avatar.defaultProps = {
    size: 'medium',
}

export default Avatar;