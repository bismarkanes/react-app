import styled from 'styled-components';

const width = 16;

const Progress = styled.div`
position: fixed;
width: ${width}px;
height: ${width}px;
border-radius: ${props => width / 2}px;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: #a5a5a5;
box-shadow: 0 0 0.2rem 0.2rem #bfbfbf;
`;

export default Progress;
