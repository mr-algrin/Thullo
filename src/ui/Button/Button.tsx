import styled from "styled-components";
import {ButtonBase, ButtonBaseProps} from "./ButtonBase";


export interface ButtonProps extends ButtonBaseProps {
    fullWidth?: boolean;
}

const Button = styled(ButtonBase)<ButtonProps>`
    width: ${props => props.fullWidth ? '100%' : 'fit-content'};
`

Button.defaultProps = {
    fullWidth: false,
}

export default Button;

// const Button: React.FC<ButtonProps> = (props) => {
//     const {
//         children,
//         ...other
//     } = props;
//
//     return (
//         <ButtonComponent {...other}>
//             {children}
//         </ButtonComponent>
//     )
// }
//
// Button.defaultProps = {
//     ...ButtonBaseDefaultValue
// }
//
// export default Button;