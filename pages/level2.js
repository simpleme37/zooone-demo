import { useState } from "react";
import Head from "next/head";
import styles from "../styles/level.module.css";
import Level from "../components/level";

export default function level2() {
  return (
    <>
      <Head>
        <title>Level 2</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Level level="level2"></Level>
    </>
  );
}
