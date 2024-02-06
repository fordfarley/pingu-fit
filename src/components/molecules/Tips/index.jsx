import React from "react";
import { useState } from "react";
import Button from "@/components/atoms/Button";
import Exercise from "@/data/types/exercise";
import muscles from "@/data/muscles";
import { Big, Large } from "@/components/layout/FontScale";

import { IoIosArrowDown } from "react-icons/io";
import { TipsMenu, TipsWrapper, StyledSH, StyledRemember } from "./styles";
import { VerticalLine } from "@/components/atoms/VerticalLine";

const Tips = ({exercise}) => {
  const [tipsIsOpen, setTipsIsOpen] = useState(false);
  let {muscle, musclePart} = exercise;
  musclePart = muscles[muscle].parts[musclePart];
  muscle = muscles[muscle].name;
  
  return (
    <>
      <TipsMenu isOpen={tipsIsOpen}>
        <IoIosArrowDown size={30} onClick={() => setTipsIsOpen(false)} />
        <div style={{display:"flex", gap:"10px", justifyContent:'center', width:'80%'}}>
          <div style={{width:"50%"}}>
          <StyledSH center noMargin style={{width:"100%"}}> EJERCICIO </StyledSH>  
          <Big center noMargin>{exercise.name.toUpperCase()}</Big>
          </div>
          <VerticalLine />
          <div style={{width:"50%"}}>
            <StyledSH center noMargin style={{width:"100%"}}> MÚSCULO </StyledSH>  
            <Big center noMargin >{`${musclePart.toUpperCase()}`}</Big>
          </div>
        </div>
        <StyledRemember noMargin center style={{width:'80%'}}>Recuerda:</StyledRemember>
        <TipsWrapper>
            {exercise.tips.map(elem => (
                <div key={`${elem}`} style={{marginBottom:'15px'}}>{elem}</div>
            ))}
        </TipsWrapper>
        <Button minWidth="80%" onClick={() => setTipsIsOpen(false)}>
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
