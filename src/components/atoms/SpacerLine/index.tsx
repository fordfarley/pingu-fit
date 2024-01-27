import styled from 'styled-components';

const SpacerLine = styled.div<{space:string}>`
    width:100%;
    border-top:solid 1px black;
    margin:${({ space }) => `${space} 0`};
`;

export default SpacerLine;