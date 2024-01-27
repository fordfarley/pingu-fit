import React from "react";
import { useState } from "react";
import Button from "@/components/atoms/Button";

import { IoIosArrowDown } from "react-icons/io";
import { TipsMenu, TipsWrapper, StyledSH } from "./styles";

const Tips = ({tips}:{tips:string[]}) => {
  const [tipsIsOpen, setTipsIsOpen] = useState(false);
  return (
    <>
      <TipsMenu isOpen={tipsIsOpen}>
        <IoIosArrowDown size={30} onClick={() => setTipsIsOpen(false)} />
        <StyledSH center>Recuerda:</StyledSH>
        <TipsWrapper>
            {tips.map(elem => (
                <div>{elem}</div>
            ))}
        </TipsWrapper>
        <Button minWidth="80%">
          Cerrar
        </Button>
      </TipsMenu>
      <Button
        minWidth="132px"
        btnType="secondary"
        onClick={() => setTipsIsOpen(true)}
      >
        Consejos
      </Button>
    </>
  );
};

export default Tips;
