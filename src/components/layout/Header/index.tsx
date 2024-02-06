// import React from 'react'
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Button from "@/components/atoms/Button";
import { Wrapper, Burger, Menu } from "./styles";
import { Large } from "../FontScale";
import Link from "next/link";
import { finishTraining } from "@/utilities/storageManagement";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTraining, setHasTraining] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let exercises = localStorage.getItem("exercises");
    let savedExercises = exercises ? JSON.parse(exercises) : null;
    if (savedExercises && savedExercises.length > 0) {
      setHasTraining(true);
    }
  }, []);

  const handleFinish = () => {
    finishTraining();
    router.push("/trainings/end");
  };

  return (
    <Wrapper>
      <Link href="/">
        <Image src="/Logo.png" width={195} height={65} alt="logo" />
      </Link>
      <Burger
        isOpen={isOpen}
        burgerColor="white"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div />
        <div />
        <div />
      </Burger>
      <Menu isOpen={isOpen} height={"80px"}>
        <Large center light>
          Menu
        </Large>

        {hasTraining && (
          <Button
            btnType="primary"
            minWidth="90%"
            style={{ display: "flex", gap: "10px", margin: "10px 0" }}
            onClick={handleFinish}
          >
            {`FINALIZAR ENTRENO`}
          </Button>
        )}
      </Menu>
    </Wrapper>
  );
};

export default Header;
