"use client";

import Hero from "../Hero";
import Archive from "../Archive";
import GetApp from "../GetApp";
import Matching from "../Matching";
import YouTube from "../YouTube";
import Stories from "../Stories";
import Feature from "../Feature";
import Ai from "../Ai";
import Navbar from "../Navbar";
import Search from "../Search";
import Details from "../Details";
import Pre from "../Pre";
import React from "react";


export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Archive />
      <GetApp />
      <Matching />
      <YouTube />
      <Stories />
      <Pre/>
      <Feature />
      <Ai />
      <Search />
      <Details />

    </div>
  );
}
