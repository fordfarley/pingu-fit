import styled from "styled-components";
import { Medium } from "@/components/layout/FontScale";

export const TrainingWrapper = styled.div`
  background-color: ${({ theme: { colors } }) => `${colors.neutral_25}`};
  border-radius: 8px;
  width:46%;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 6px 6px 5px 0px rgba(0, 0, 0, 0.08);
  gap:5px;
`;

export const TrainingsList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  align-items:flex-start;
  overflow: scroll;
  height: 90%;
  gap: 25px;
  padding: 15px;
`;

export const BadgeContinue = styled(Medium)<{newTrain?:boolean}>`
  background-color: ${({  newTrain, theme: { colors } }) => newTrain ? `${colors.primary_50}` : `${colors.bgBlue}`};
  color: ${({ theme: { colors } }) => `${colors.neutral_25}`};
  width:fit-content;
  padding:5px;
`;