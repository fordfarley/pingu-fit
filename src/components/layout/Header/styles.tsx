import styled from 'styled-components';

export const Wrapper = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    height:80px;
    padding:${({ theme: { layoutPadding } }) => `0 ${layoutPadding.mobile}`};
    background-color:${({ theme: { colors } }) => `${colors.neutral_900}`};
`;

export const Burger = styled.button<{
    burgerColor: string;
    isOpen: boolean;
    onClick: CallableFunction;
  }>`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    align-items: center;
    border: none;
    background-color: transparent;
  
    div {
      width: 30px;
      height: 3px;
      background-color: ${({ burgerColor }) => burgerColor};
      border-radius: 10px;
      transform-origin: 1px;
      transition: ${({ theme: { transition } }) =>
        `all ${transition.duration} ${transition.timingFunction}`};
  
      &:nth-child(1) {
        transform: ${({ isOpen }) =>
          isOpen ? 'translateX(4px) rotate(45deg)' : 'rotate(0)'};
      }
  
      &:nth-child(2) {
        transform: ${({ isOpen }) =>
          isOpen ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
      }
  
      &:nth-child(3) {
        transform: ${({ isOpen }) =>
          isOpen ? 'translateX(4px) rotate(-45deg)' : 'rotate(0)'};
      }
    }
  `;

export const Menu = styled.div<{ isOpen: boolean; height: string }>`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    position: fixed;
    top: ${({ height }) => height};
    right: ${({ isOpen }) => (isOpen ? '0' : '-102%')};
    height: 100%;
    width: 100%;
    transition: ${({ theme: { transition } }) =>
        `all ${transition.duration} ${transition.timingFunction}`};
    background-color:${({ theme: { colors } }) => `${colors.neutral_900}`};
    color:${({ theme: { colors } }) => `${colors.neutral_white}`};
    z-index: 10;
`;