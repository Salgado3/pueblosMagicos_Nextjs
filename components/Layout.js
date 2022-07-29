import Header from "./Header";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Jim";
export const siteTitle = "Los Puebls";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <main>{children}</main>
    </div>
  );
}
