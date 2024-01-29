"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { getTraining } from "@/data/exercises";
import { trainings, getExercisesIds, getExercisesSeries } from "@/data/trainings";
import { Big, SuperHero } from "@/components/layout/FontScale";
import BadgeTitle from "@/components/atoms/BadgeTitle";
import Button from "@/components/atoms/Button";
import {
  Animation,
  ExerciseWrapper,
  ExercisesList,
  SeriesWrapper,
} from "@/styles/pages/trainingIndex";
import { useRouter } from "next/router";

import { IoMdArrowBack } from "react-icons/io";
import { FaPlay } from "react-icons/fa6";

const TrainingIndex = () => {
  const [index, setIndex] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    //@ts-ignore
    setIndex(router.query.trainingIndex);
  }, [router]);

  let training = index ? trainings[index] : null;
  let exercisesIds = training !== null ? getExercisesIds(training) : null;
  let exercisesSeries = training !== null ? getExercisesSeries(training) : null;
  let trainingExercises =
    exercisesIds && exercisesIds.length > 0 ? getTraining(exercisesIds) : null;

  const handleStart = () => {
    localStorage.setItem("exercises", JSON.stringify(exercisesIds));
    localStorage.setItem("series", JSON.stringify(exercisesSeries));
    localStorage.setItem("session", JSON.stringify({}));
  };

  return (
    <Layout noPadding>
      {index &&
        training !== null &&
        exercisesIds &&
        exercisesIds.length > 0 &&
        trainingExercises!==null &&
        trainingExercises.length > 0 && (
          <div
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
              alignItems: "center",
              height: "100%",
            }}
          >
            <BadgeTitle>
              <Big center noMargin light>
                {training.name}
              </Big>
            </BadgeTitle>
            <ExercisesList>
              {training.exercises.map((elem, index) => {
                return (
                  <ExerciseWrapper>
                    {/* @ts-ignore */}
                    <Animation route={trainingExercises[index].image} />
                    <div style={{ display: "flex", width: "100%" }}>
                      <div style={{ flexGrow: "1" }}>
                      {/* @ts-ignore */}
                        <Big noMargin>{trainingExercises[index].name}</Big>
                      </div>
                      <SeriesWrapper>{`${training?.exercises[index].series} SERIES`}</SeriesWrapper>
                    </div>
                  </ExerciseWrapper>
                );
              })}
            </ExercisesList>
            <div
              style={{
                display: "flex",
                width: "80%",
                gap: "10px",
                margin: "20px 0",
              }}
            >
              <Link href="/trainings">
                <Button
                  btnType="tertiary"
                  minWidth="49%"
                  style={{ display: "flex", gap: "10px" }}
                >
                  <IoMdArrowBack color="white" size={20} />
                  {` SESIONES`}
                </Button>
              </Link>
              <Link href={`/exercise/${exercisesIds[0]}`}><Button
                minWidth="49%"
                onClick={handleStart}
                style={{ display: "flex", gap: "10px" }}
              >
                EMPEZAR
                <FaPlay />
              </Button>
              </Link>
            </div>
          </div>
        )}
    </Layout>
  );
};

export default TrainingIndex;
