import styled from "styled-components";

export const ExercisesList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  gap:10px;
  padding:30px 0;
  width:100%;
  flex-grow:1;
`;

// border:${({ theme: { colors } }) => `1px solid ${colors.neutral_400}`};
//   border-radius:${({ theme: { borderRadius } }) => borderRadius.boxes};
// box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.08);
export const ExerciseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom:${({ theme: { colors } }) => `1px solid ${colors.neutral_400}`};
  padding:10px;
  width:90%;
  
`;

export const SeriesWrapper = styled.div`
    width:25%;
    text-align:center;
    background-color:${({ theme: { colors } }) => colors.bgBlue};
    color:${({ theme: { colors } }) => colors.neutral_25};

`;

export const Animation = styled.div<{ route: string }>`
  width: 120px;
  height: 120px;
  background-image: ${({ route }) => `url("${route}")`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  mix-blend-mode: multiply;
`;