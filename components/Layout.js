import Header from "./Header";
import Footer from "./Footer";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main_Container}>{children}</main>
      <Footer />
    </div>
  );
}
