import React from "react";
import { useState } from "react";
import { TbArrowsExchange } from "react-icons/tb";
import { ExercisesMenu, ChangeButton } from "./styles";


const ExchangeMenu = () => {
  const [altIsOpen, setAltIsOpen] = useState(false);
  return (
    <>
      <ExercisesMenu isOpen={altIsOpen} height="122px">
        test
      </ExercisesMenu>
      <ChangeButton onClick={() => setAltIsOpen(!altIsOpen)}>
        <TbArrowsExchange size={30} />
      </ChangeButton>
    </>
  );
};

export default ExchangeMenu;
