'use client'

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { guardarnombre } from "@/store/slice";
import Link from "next/link";

const escribir = () => {
  // const miNombre = useSelector((state) => state.valores.nombre);
  const [nuevo, setNuevo] = useState('')
  const dispatch = useDispatch();
  const modificar = () =>{
    dispatch(guardarnombre(nuevo))
  }
  return (
    <div>
      escribir
      <div><input value={nuevo} onChange={e=>setNuevo(e.target.value)} /></div>
      <button onClick={modificar}>Modificar el valor</button>
      <div><Link href="/leer">Ir a leer</Link></div>
    </div>
  );
};

export default escribir;
