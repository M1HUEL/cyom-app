import styles from "../styles/modules/Home.module.scss";

import Header from "../components/Header";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cyom - Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.home}>
        <Header />
      </div>
    </>
  );
}
