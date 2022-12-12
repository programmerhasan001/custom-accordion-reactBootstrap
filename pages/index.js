import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Home.module.css";
import Accordion from "../components/Accordion";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Accordion</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h2 className="text-center my-4 border-bottom border-5 pb-3">
          Custom Accordion
        </h2>
        <Accordion />
      </main>
    </div>
  );
}
