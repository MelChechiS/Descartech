import Toolbar from "../../components/Toolbar/index";
import styles from "./Inicial.module.scss";
import { Link } from "react-router-dom";
import Ellipse from "../../assets/components_img/Ellipse 1.png";

export default function Inicial() {
  return (
    <body>
      <header>
        <Toolbar />
      </header>
      <div>
        <div className={styles.house}>
          <h1 className={styles.house__text}>
            Descarte sustentável e seguro.
            <br></br>
            <br></br>
            Use Descartech!
          </h1>


            <img
              className={styles.house__ellipse}
              src={Ellipse}
              alt="ellipse da page"
            ></img>

            <div className={styles.button_containe}>
              <Link to={"/cadastro"}>
                <button className={styles.green_button}>Cadastra-se</button>
              </Link>
              <Link to={"/login"}>
                <button className={styles.green_button}>Já Tenho Conta</button>
              </Link>
            </div>
          </div>

          <div></div>
        </div>
    </body>
  );
}
