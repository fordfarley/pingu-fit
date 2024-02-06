import { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import BadgeTitle from "@/components/atoms/BadgeTitle";
import { Big, Large } from "@/components/layout/FontScale";
import Button from "@/components/atoms/Button";
import {
  ExercisesList,
  ExerciseWrapper,
  SeriesWrapper,
  Animation,
} from "@/styles/pages/trainingIndex";

import { getSession } from "@/utilities/storageManagement";
import { exercises } from "@/data/exercises";

import { LuPartyPopper } from "react-icons/lu";

const End = () => {
  const [session, setSession] = useState<
    { id: string; series: number; maxWeight: number }[] | null
  >();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //@ts-ignore
    const savedSession = getSession();
    setSession(savedSession);
    setLoading(false);
  }, []);

  if (!loading) console.log(session);

  return (
    <Layout noPadding>
      {session !== null && session && !loading && (
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
              ENTRENAMIENTO FINALIZADO
            </Big>
          </BadgeTitle>
          <ExercisesList>
            {session.map((elem, index) => {
              return (
                <ExerciseWrapper>
                  {/* @ts-ignore */}
                  <div style={{ display: "flex", width: "100%" }}>
                    <div style={{ flexGrow: "1", marginRight:"20px" }}>
                      {/* @ts-ignore */}
                      <Big noMargin>{exercises[elem.id].name}</Big>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        minWidth: "70px",
                        alignItems: "center",
                        backgroundColor: "gray",
                        justifyContent: "center",
                        color:"white"
                      }}
                    >
                      {`${elem.maxWeight} KGs`}
                    </div>
                    <SeriesWrapper>{`${elem.series} SERIES`}</SeriesWrapper>
                  </div>
                </ExerciseWrapper>
              );
            })}
          </ExercisesList>
          {/* <LuPartyPopper size={50} color="#C59000"/> */}
          <div
            style={{
              display: "flex",
              width: "80%",
              gap: "10px",
              margin: "20px 0",
            }}
          >
            <Link href="/" style={{width:"100%"}}>
              <Button
                btnType="tertiary"
                style={{ display: "flex", gap: "10px" }}
                minWidth="80%"
              >
                {` VOLVER AL MENÚ`}
              </Button>
            </Link>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default End;
