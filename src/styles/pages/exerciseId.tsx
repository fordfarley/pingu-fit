import styled from "styled-components";
import { Big, SuperHero } from "@/components/layout/FontScale";

export const Animation = styled.div<{ route: string }>`
  width: 320px;
  height: 320px;
  background-image: ${({ route }) => `url("${route}")`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  mix-blend-mode: multiply;
`;

export const ExerciseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-bottom: 20px;
  gap: 20px;
  position: relative;
`;

export const MiddleWrapper = styled.div`
  display: flex;
  max-width: 48%;
  align-items: flex-start;
`;

export const FullWrapper = styled.div<{ gap?: string; margin?: string }>`
  width: 80%;
  display: flex;
  gap: ${({ gap }) => (gap ? gap : "30px")};
  justify-content: space-between;
  margin: ${({ margin }) => (margin ? margin : null)};
`;

export const WButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// background:linear-gradient(0deg, #032520 0%, #042940 100%);
// color:${({ theme: {colors} }) => (colors.neutral_25)};
export const WButton = styled(WButtonWrapper)`
  height: 35px;
  width: 35px;
  border: 1px solid #042940;
  border-radius: 50%;
  color: #042940;
  font-weight: normal;
`;

export const WButtonAlt = styled(WButton)``;

export const WDisplay = styled.div`
  flex-grow: 1;
`;

export const StyledSH = styled(SuperHero)<{color?:string, center?:boolean}>`
  display: flex;
  align-items: center;
  justify-content: ${({ center }) => (center ? "center" : null)};
  color: ${({ color }) => (color ? color : null)};
`;

export const SeriesWrapper = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  gap: 10px;
  justify-content: center;
`;

export const WeightWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 0 25px 0;
  border: 1px solid #042940;
  border-radius: 8px;
`;
