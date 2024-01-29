'use client'
import React from "react";
import { useSelector } from "react-redux";

const leer = () => {
  const miNombre = useSelector((state) => state.valores.nombre);
  return (
    <div>
      leer
      <h2>{miNombre}</h2>
    </div>
  );
};

export default leer;
