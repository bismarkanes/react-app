import styled from 'styled-components';

const ViewShadow = styled.div`
  flex: 1;
  margin: ${(props) => props.margin }};
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
`;

export default ViewShadow;
