import styles from "./Header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <button>Tu logo</button>
      <nav className={styles.nav}>
        <ul>
          <li>About me</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
