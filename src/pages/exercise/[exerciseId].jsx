"use client";
import React, { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { exercises, getSubstitutes, getExerciseById } from "@/data/exercises";
import { nextExercise, moveExercise } from "../../utilities/storageManagement";
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
  WeightWrapper,
} from "@/styles/pages/exerciseId";
import { VerticalLine } from "@/components/atoms/VerticalLine";
import ExchangeMenu from "@/components/molecules/ExchangeMenu";
import { MdSkipNext } from "react-icons/md";
import { TbRotateClockwise2 } from "react-icons/tb";
import Tips from "../../components/molecules/Tips";
import { useRouter } from "next/router";

const Exercise = () => {
  const [id, setId] = useState(null);
  const [weight, setWeight] = useState(50);
  const [serie, setSerie] = useState(1);
  const [series, setSeries] = useState();
  const [kgs, setKgs] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setId(router.query.exerciseId);
    let session = JSON.parse(localStorage.getItem("session"));
    setSerie(1);
    if (session[router.query.exerciseId])
      setKgs(session[router.query.exerciseId]);
    else setKgs([]);
    let sessionSeries = JSON.parse(localStorage.getItem("series"));
    if (sessionSeries && sessionSeries.length > 0) setSeries(sessionSeries[0]);
  }, [router]);
  
  let movement = id ? getExerciseById(id) : null;
  let substitutes = id ? getSubstitutes(movement.id) : null;

  const handleWeight = (increment) => {
    let newWeight = weight + increment;
    if (newWeight < 0) newWeight = 0;
    setWeight(newWeight);
  };

  const handleSkip = () => {
    if (serie + 1 > series) {
      let routeNext = nextExercise();
      router.push(routeNext);
    } else {
      setSerie(serie + 1);
    }
  };

  const handleMove = () => {
    let routeNext = moveExercise();
    router.push(routeNext);
  };

  const handleDone = () => {
    let session = localStorage.getItem("session");
    session = session ? JSON.parse(session) : {};
    let newKgs = kgs.slice();
    newKgs.push(weight);
    session[id] = newKgs;
    localStorage.setItem("session", JSON.stringify(session));
    setKgs(newKgs);
    handleSkip();
  };

  return (
    <Layout noPadding>
      {id && (
        <ExerciseWrapper>
          <BadgeTitle>
            <Big center noMargin light>
              {movement.name}
            </Big>
          </BadgeTitle>
          <ExchangeMenu
            disabled={serie !== 1}
            substitutes={substitutes}
            id={movement.id}
          />

          <Animation route={movement.image} />
          <FullWrapper>
            <MiddleWrapper>
              <Big right noMargin>{`ÚLTIMO PESO`}</Big>
              <VerticalLine />
              <StyledSH bold noMargin>
                {/* 50 <Big noMargin>Kg</Big> */}
              </StyledSH>
            </MiddleWrapper>
            <MiddleWrapper>
              <Tips exercise={movement} />
            </MiddleWrapper>
          </FullWrapper>
          <SeriesWrapper>
            <Big right noMargin style={{ width: "auto" }}>{`SERIES: `}</Big>
            <div style={{ display: "flex" }}>
              <SuperHero bold noMargin>
                {serie}
              </SuperHero>
              <SuperHero noMargin color="neutral_400">
                {`/${series}`}
              </SuperHero>
            </div>
          </SeriesWrapper>
          <WeightWrapper>
            <Big
              noMargin
              style={{
                width: "auto",
                marginTop: "-12px",
                backgroundColor: "#F8F9FA",
                padding: "0 8px",
              }}
            >
              PESO DE LA SERIE:
            </Big>
            <FullWrapper gap="10px" style={{ width: "95%" }}>
              <WButton onClick={() => handleWeight(-5)}>-5</WButton>
              <WButtonAlt onClick={() => handleWeight(-1)}>-</WButtonAlt>
              <WDisplay>
                <StyledSH center noMargin bold color="#042940">
                  {weight}
                  <Big noMargin style={{ width: "auto" }}>
                    Kg
                  </Big>
                </StyledSH>
              </WDisplay>
              <WButtonAlt onClick={() => handleWeight(1)}>+</WButtonAlt>
              <WButton onClick={() => handleWeight(5)}>+5</WButton>
            </FullWrapper>
          </WeightWrapper>
          <FullWrapper gap="10px">
            <Button
              btnType="secondary"
              minWidth="48%"
              disabled={serie !== 1}
              onClick={handleMove}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                Posponer
                <TbRotateClockwise2 size={30} />
              </div>
            </Button>
            <Button btnType="tertiary" minWidth="48%" onClick={handleSkip}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                Saltar
                <MdSkipNext size={30} />
              </div>
            </Button>
          </FullWrapper>
          <Button minWidth="80%" margin="-8px 0 0 0" onClick={handleDone}>
            Hecho
          </Button>
        </ExerciseWrapper>
      )}
    </Layout>
  );
};

export default Exercise;
