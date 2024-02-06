import styled from "styled-components";
import { Big, Large ,SuperHero } from "@/components/layout/FontScale";

export const TipsMenu = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: ${({ isOpen }) => (isOpen ? "80px" : "101vh")};
  right: 0;
  height: 100%;
  width: 100%;
  transition: ${({ theme: { transition } }) =>
    `all ${transition.duration} ${transition.timingFunction}`};
  background-color: ${({ theme: { colors } }) => `${colors.neutral_25}`};
  color: ${({ theme: { colors } }) => `${colors.neutral_900}`};
  box-shadow: 0px -12px 5px 0px rgba(0, 0, 0, 0.09);
  border-radius: ${({ theme: { borderRadius } }) => `${borderRadius.boxes}`};
  z-index: 9;
  padding-top: 10px;
  padding-bottom: 130px;
  gap:10px;
`;

export const StyledSH = styled(Big)`
  color: ${({ theme: { colors } }) => `${colors.neutral_25}`};
  background-color: ${({ theme: { colors } }) => `${colors.bgBlue}`};
  width:80%;
`;

export const StyledRemember = styled(Big)`
  color: ${({ theme: { colors } }) => `${colors.neutral_white}`};
  background-color: ${({ theme: { colors } }) => `${colors.neutral_400}`};
  padding:5px 0;
  margin-top:20px;
  width:70%;
`;

export const TipsWrapper = styled.div`
  flex-grow:1;
  width:88%;
  padding:${({ theme: { spacing } }) => `${spacing._04}`};
  font-size: ${({ theme: { fontScale } }) => `${fontScale.big.size}`};
  overflow:scroll;
`;