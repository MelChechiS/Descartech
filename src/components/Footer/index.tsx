import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.back}>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.cardTitle}>
            <h1 className={styles.cardTitle__title}> Entre em Contato:</h1>
          </div>
          <div className={styles.cardText}>
            <h1 className={styles.cardText__text}>
Harry Zardo | (14) 98826-5711 ou garryzardo@gmail.com
<br></br>
Melany Chechi | (14) 98803-2407 ou melanychechi222@gmail.com
            </h1>
          </div>
          </div>
        </div>
    </footer>
  );
}
