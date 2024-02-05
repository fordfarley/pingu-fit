"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoMdArrowBack } from "react-icons/io";

import Layout from "@/components/layout/Layout";
import { Big, Medium } from "@/components/layout/FontScale";
import Button from "@/components/atoms/Button";
import BadgeTitle from "@/components/atoms/BadgeTitle";
import {
  TrainingsList,
  TrainingWrapper,
  MuscleAnimation,
  BadgeContinue,
} from "@/styles/pages/trainings";

import { trainings } from "@/data/trainings";
import Training from "@/data/types/training";
import { parseDate } from "@/utilities/dateServices";

const Trainings = () => {
  const [current, setCurrent] = useState(null);
  const [lastExercise, setLastExercise] = useState(null);
  const router = useRouter();

  useEffect(() => {
    let session = localStorage.getItem("session");
    let exercises = localStorage.getItem("exercises");
    let last = exercises ? JSON.parse(exercises)[0] : null;
    let savedSession = session ? JSON.parse(session) : {};
    savedSession.id = parseInt(savedSession.id);
    let today = parseDate(new Date());
    if (savedSession.date === today) {
      setCurrent(savedSession.id)
      setLastExercise(last);
    };
  }, []);

  const handleClean = () => {
    localStorage.setItem("session", JSON.stringify({}));
  };

  const handleRedirect = (index:number) =>{
      handleClean();
      router.push(`/trainings/${index}`);
  }

  const handleContinue = () =>{
    router.push(`/exercise/${lastExercise}`);
  }

  return (
    <Layout noPadding>
      <BadgeTitle>
        <Big center light noMargin>
          Trainings
        </Big>
      </BadgeTitle>
      <TrainingsList>
        {current!==null && 
          <TrainingWrapper onClick={handleContinue}>
            <MuscleAnimation route={trainings[current].image} />
            {trainings[current].name.toUpperCase()}
              <BadgeContinue noMargin center>
                CONTINUAR
              </BadgeContinue>
      
          </TrainingWrapper>
        }
        {trainings.map((elem: Training, index: number) => (
            <TrainingWrapper onClick={()=>handleRedirect(index)}>
              <MuscleAnimation route={elem.image} />
              {elem.name.toUpperCase()}
              {current === index && (
                <BadgeContinue noMargin center newTrain>
                  NUEVO ENTRENO
                </BadgeContinue>
              )}
            </TrainingWrapper>
        ))}
      </TrainingsList>
      <Link href="/" style={{width:"70%"}}>
                <Button
                  btnType="tertiary"
                  minWidth="90%"
                  style={{ display: "flex", gap: "10px", margin:"10px 0" }}
                >
                  <IoMdArrowBack color="white" size={20} />
                  {` USUARIOS`}
                </Button>
              </Link>
    </Layout>
  );
};

export default Trainings;
