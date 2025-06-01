import React from "react";
import { useEffect, useState } from "react";
export default function App11() {
  useEffect(() => {
    console.log("Component Mounted");
    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  return (
    <div>
      <h1 style={{ color: "#1278a49c" }}>App11</h1>
      <h2>useEffect hook and Component Life Cycle</h2>
    </div>
  );
}