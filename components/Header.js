import Head from "next/head";
import styles from "./header.module.css";
import Link from "next/link";
export const siteTitle = "Los Puebls";

export default function Header() {
  return (
    <>
      <Head>
        <link rel="icon" href="../public/favicon.ico" />
        <meta
          name="description"
          content="Magical Towns (Pueblos Magicos) of Mexico. Find your next destination"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.container}>
        <h1 className={styles.header}>
          <Link href={"/"}>Pueblos Magicos de Mexico </Link>
        </h1>
      </header>
    </>
  );
}
