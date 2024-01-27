import styled from "styled-components";
import { RoundedButton } from "@/components/atoms/RoundedButton";

export const ChangeButton = styled(RoundedButton)`
    position:absolute;
    top: 32px;
    right: 10px;
    box-shadow: -4px 4px 5px 0px rgba(0,0,0,0.09);
    z-index:9;
`;

export const ExercisesMenu = styled.div<{ isOpen: boolean; height: string }>`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    position: fixed;
    top: ${({ height }) => height};
    right: ${({ isOpen }) => (isOpen ? '0' : '-104%')};
    height: 100%;
    width: 100%;
    transition: ${({ theme: { transition } }) =>
        `all ${transition.duration} ${transition.timingFunction}`};
    background-color:${({ theme: { colors } }) => `${colors.neutral_25}`};
    color:${({ theme: { colors } }) => `${colors.neutral_900}`};
    box-shadow: -11px 0px 5px 0px rgba(0,0,0,0.09);
    z-index: 8;
`;