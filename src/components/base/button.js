import styled from 'styled-components';
import colors from 'themes/colors';

const Button = styled.button`
  color: ${props => props.color ? props.color : colors.defaultText};
  background-color: ${props => props.backgroundColor ? props.backgroundColor : colors.defaultButton}}
  border-radius: 0.2rem;
  border: 0.1rem solid grey;
  &:disabled {
    box-shadow: none;
    cursor: not-allowed;
  }
  &:active {
    color: ${colors.active};
  }
`;

export default Button;
