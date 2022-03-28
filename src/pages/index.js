import Head from "next/head";
import ThemeText from "../components/ThemeText";
import DogImage from "../components/DogImage";
import RenderImage from "../components/RenderImage";

export default function Index() {
  return (
    <>
      <Head>
        <title>Dog every 5 seconds</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <ThemeText /> */}
      <RenderImage />
      {/* <DogImage duration={5} /> */}
    </>
  );
}
