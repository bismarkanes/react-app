import styled from 'styled-components';

const ContainerRowFlex = styled.div`
  display: flex;
  justify-content: ${props => props.justify || 'space-between' };
  align-items: ${props => props.align || 'center'};
  width: ${props => props.width};
  height: ${props => props.height || 'initial'};
  margin-top:${props => props.top};
  margin-bottom: ${props => props.bottom ? props.bottom : 0};
  padding-left: ${props => props.paddingHorizontal ? props.paddingHorizontal : 0};
  padding-right: ${props => props.paddingHorizontal ? props.paddingHorizontal : 0};
  flex: ${props => props.flex || 'none'};
  background: ${props => props.background || 'initial'};
  background-color: ${props => props.backgroundColor || 'initial'};
  flex-wrap: ${props => props.wrap || 'initial'};
`;

export default ContainerRowFlex;
