import styled from "styled-components";

export const RoundedButton = styled.div<{size?:number}>`
  display:flex;
  justify-content:center;
  align-items:center;
  background: ${({theme: {ctas: { primary }}}) => primary.background};
  width: ${({size}) => size ? `${size}px` : '60px'};
  height: ${({size}) => size ? `${size}px` : '60px'};
  border-radius:50%;
`;