import React from "react";
import { useState } from "react";
import { TbArrowsExchange } from "react-icons/tb";
import { Big, Large } from "@/components/layout/FontScale";
import {
  ExercisesMenu,
  ChangeButton,
  Animation,
  ExerciseWrapper,
  ExercisesList,
} from "./styles";
import Exercise from "@/data/types/exercise";
import { swapExercise } from "@/utilities/storageManagement";
import Link from "next/link";

const ExchangeMenu = ({
  disabled,
  substitutes,
  id,
}: {
  disabled?: boolean;
  substitutes: Exercise[];
  id: number;
}) => {
  const [altIsOpen, setAltIsOpen] = useState(false);
  const handleSwap = (newId: number) => {swapExercise(newId)};

  return (
    <>
      <ExercisesMenu isOpen={altIsOpen} height="122px">
        <ExercisesList>
          <Large center noMargin bold>
            SUSTITUTOS:
          </Large>
          <Big center style={{ margin: "-10px 0 10px 0" }}>
            (Trabajan la misma zona)
          </Big>
          {substitutes.map((elem) => {
            if (elem.id === id) return null;
            else
              return (
                <Link
                  href={`/exercise/${elem.id}`}
                  key={`subs-${elem.name}`}
                  onClick={() => {
                    handleSwap(elem.id);
                    setAltIsOpen(false);
                  }}
                >
                  <ExerciseWrapper>
                    <Animation route={elem.image} />
                    <Big noMargin center>
                      {elem.name.toUpperCase()}
                    </Big>
                  </ExerciseWrapper>
                </Link>
              );
          })}
        </ExercisesList>
      </ExercisesMenu>
      {!disabled && (
        <ChangeButton onClick={() => setAltIsOpen(!altIsOpen)}>
          <TbArrowsExchange size={30} />
        </ChangeButton>
      )}
    </>
  );
};

export default ExchangeMenu;
