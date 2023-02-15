import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from 'themes/colors';

const P = styled.p`
  text-align: ${props => props.align || 'initial'};
`;

P.propTypes = {
  align: PropTypes.string,
};

export const TextNormal = styled(P)`
  font-style: normal;
  font-weight: 400;
  color: ${colors.defaultText};
`;

export const ExtraLarge = styled(TextNormal)`
  font-size: 1.4em;
`;

export const Text = styled(TextNormal)`
  font-size: 1em;
  letter-spacing: 0.05em;
  line-height: 1em;
`;

export const Alink = styled(TextNormal)`
  text-decoration: none;
`;

export const AlinkTab = styled(Alink).attrs(props => ({
  target: '_blank'
}))`
`;
