import Header from "../components/Header";

import Head from "next/head";
import Feed from "../components/Feed";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cyom - Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full h-full bg-neutral-50 font-thin">
        <Header />
        <Feed />
      </div>
    </>
  );
}
