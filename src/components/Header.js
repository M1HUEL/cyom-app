import styles from "../styles/modules/Header.module.scss";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.headerLeft}>
          <h1 className={styles.headerTitle}>Cyom</h1>
        </div>
        <div className={styles.headerRight}>
          <a className={styles.navigationItem}>Noticias</a>
          <a className={styles.navigationItem}>Información</a>
          <a className={styles.navigationItem}>Blog</a>
          <a className={styles.navigationButton}>Temas Relevantes</a>
        </div>
      </div>
    </div>
  );
}
