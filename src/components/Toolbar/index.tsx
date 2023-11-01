import styles from "./Toolbar.module.scss";
import logo from "../../assets/components_img/logo.png";
import { GoPerson } from "react-icons/go";
import { Link } from "react-router-dom";

export default function Toolbar() {
  return (
    <header className={styles.toolbar}>
      <div className={styles.start}>
        <Link to="/">
        <img src={logo} alt="Logo Descartech" className={styles.start__logo} />
        </Link>
          <h1>Descartech</h1>
      </div>
      <div></div>

      <div className={styles.middle}></div>

      <div className={styles.end}>
        <div className={styles.end__searchBox}>

        <Link to={"/home"} >
            <button className={styles.end__searchButton}>
              <p>Home</p>
            </button>
          </Link>
          <br></br>
        <Link to={"/formulario"} >
            <button className={styles.end__searchButton}>
              <p>Descartar </p>
            </button>
          </Link>
          <br></br>
        <Link to={"/doacoes"} >
            <button className={styles.end__searchButton}>
              <p className={styles.p}>Doações</p>
            </button>
          </Link>
          <br></br>
          <Link to={"/sobre"}>
            <button className={styles.end__searchButton}>
              <GoPerson size={"35px"} />
            </button>
          </Link>

        </div>
      </div>
    </header>
  );
}
