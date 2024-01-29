'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link";
import {trainings} from "@/data/trainings"
import Training from "@/data/types/training";



const Trainings = () => {
  const handleClean = () =>{
    localStorage.setItem("session", JSON.stringify({}));
  }

  return (
    <Layout>
    <div>Trainings</div>
    {trainings.map((elem:Training,index:number) => (
        <Link href={`/trainings/${index}`}>{elem.name}</Link>
    ))}
    </Layout>
  )
}

export default Trainings        