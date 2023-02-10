import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from 'themes/colors';

const P = styled.p`
  color: ${props => props.color || colors.defaultText};
  text-shadow: ${props => props.textShadow || (props.useTextShadow ? '-1px 2px #3c3c3c, 0 1px #3c3c3c, 1px 0 #3c3c3c, 0 -1px #3c3c3c' : 'initial')};
  letter-spacing: ${props => props.letterSpacing || 'initial'};
  text-align: ${props => props.align || 'initial'};
  font-weight: ${props => props.fontWeight || 'normal'};
  font-style: ${props => props.fontStyle || 'normal'};
`;

P.propTypes = {
  textShadow: PropTypes.string,
  color: PropTypes.string,
  letterSpacing: PropTypes.string,
  useTextShadow: PropTypes.bool,
  align: PropTypes.string,
};

export const Normal = styled(P)`
  font-size: 12px;
`;

export const Large = styled(P)`
  font-size: 18px;
`;

export const ExtraLarge = styled(P)`
  font-size: 24px;
`;

export const ExtraLarger = styled(P)`
  font-size: 36px;
`;
