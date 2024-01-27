import React from "react";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import exercises from "@/data/exercises";
import { Big, SuperHero } from "@/components/layout/FontScale";
import BadgeTitle from "@/components/atoms/BadgeTitle";
import Button from "@/components/atoms/Button";
import {
  Animation,
  ExerciseWrapper,
  MiddleWrapper,
  FullWrapper,
  WButton,
  WButtonAlt,
  WDisplay,
  StyledSH,
  SeriesWrapper,
  WeightWrapper
} from "@/styles/pages/exerciseId";
import { VerticalLine } from "@/components/atoms/VerticalLine";
import ExchangeMenu from "@/components/molecules/ExchangeMenu";
import { MdSkipNext } from "react-icons/md";
import { TbRotateClockwise2 } from "react-icons/tb";
import Tips from "@/components/molecules/Tips";

const Exercise = () => {
  const movement = exercises[0];
  
  const [weight, setWeight] = useState(50);

  const handleWeight = (increment: number) => {
    let newWeight = weight + increment;
    if (newWeight < 0) newWeight = 0;
    setWeight(newWeight);
  };

  return (
    <Layout noPadding>
      <ExerciseWrapper>
        <BadgeTitle>
          <Big center noMargin light>
            {movement.name}
          </Big>
        </BadgeTitle>
        <ExchangeMenu />
        
        <Animation route={movement.image} />
        <FullWrapper>
          <MiddleWrapper>
            <Big right noMargin>{`ÚLTIMO PESO`}</Big>
            <VerticalLine />
            <StyledSH bold noMargin>50 <Big noMargin>Kg</Big></StyledSH>
          </MiddleWrapper>
          <MiddleWrapper>
            <Tips tips={movement.tips} />
          </MiddleWrapper>
        </FullWrapper>
        <SeriesWrapper>
          <Big right noMargin style={{ width: "auto" }}>{`SERIES: `}</Big>
          <div style={{ display: "flex" }}>
            <SuperHero bold noMargin>1</SuperHero>
            <SuperHero noMargin color="neutral_400">/4</SuperHero>
          </div>
        </SeriesWrapper>
        <WeightWrapper>
          <Big noMargin style={{ width: "auto", marginTop:"-12px", backgroundColor: '#F8F9FA', padding:'0 8px' }}>
                  PESO DE LA SERIE:
          </Big>  
          <FullWrapper gap="10px" style={{width:'95%'}}>
            <WButton onClick={() => handleWeight(-5)}>-5</WButton>
            <WButtonAlt onClick={() => handleWeight(-1)}>-</WButtonAlt>
            <WDisplay>
              <StyledSH center noMargin bold color='#042940'>
                {weight}
                <Big noMargin style={{ width: "auto" }}>Kg</Big>
              </StyledSH>
            </WDisplay>
            <WButtonAlt onClick={() => handleWeight(1)}>+</WButtonAlt>
            <WButton onClick={() => handleWeight(5)}>+5</WButton>
          </FullWrapper>
        </WeightWrapper>
        <FullWrapper gap="10px">
          <Button btnType="secondary" minWidth="48%">
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              Posponer
              <TbRotateClockwise2 size={30} />
            </div>
          </Button>
          <Button btnType="tertiary" minWidth="48%">
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              Saltar
              <MdSkipNext size={30} />
            </div>
          </Button>
        </FullWrapper>
        <Button minWidth="80%" margin="-8px 0 0 0">
          Hecho
        </Button>
      </ExerciseWrapper>
    </Layout>
  );
};

export default Exercise;
