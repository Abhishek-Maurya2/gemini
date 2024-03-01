import Link from "next/link";
import styles from "./Navbar.module.css";
import { FiSearch } from "react-icons/fi"

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <p className={styles.title}>Company</p>
      <div className={styles.searchBox}>
        <input type="text" placeholder="Search..." className={styles.search} />
        <button className={styles.searchButton}>
          <FiSearch />
        </button>
      </div>
      <div>
        <Link className={styles.links} href="/">
          Home
        </Link>
        <Link className={styles.links} href="/about">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
