import Head from "next/head";
import { siteTitle } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <h3>Welcome:</h3>
        <p>
          Mexico has a rich and colorful history with various climates and
          terrains. The Pueblos Magicos are Magical towns located all over
          Mexico. However, many people are unaware that these towns exist. For
          that reason, I've created a web app that will show you the true beauty
          of Mexico and hopefully encourage you to visit one (or many) of these
          Pueblos! I hope you enjoy and happy exploring!
        </p>
        <Link href={"/feed"}>Start Exploring</Link>
      </section>
    </>
  );
}
