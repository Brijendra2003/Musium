import { useEffect, useState } from "react";
import Loading from "../Components/loading.jsx";
import Navigation from "./Navigation.jsx";

export default function AboutUS() {
  return (
    <>
      <Navigation aboutus={true} />
      <h1>about</h1>
    </>
  );
}
