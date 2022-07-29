import Head from "next/head";
import Layout, { siteTitle } from "../../components/Layout";
import Link from "next/link";
import styles from "./feed.module.css";
import DropDown from "../../components/FeedDropdown";
export default function Home() {
  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
      </Layout>
      <section className={styles.header}>
        <DropDown />
        <h3>This is the Feed</h3>
        <p>Map Goes here</p>
      </section>
    </>
  );
}
