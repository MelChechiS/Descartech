import Toolbar from "../../components/Toolbar/index";
import styles from "./Inicial.module.scss";
import { Link } from "react-router-dom";

export default function Inicial() {
    return (
        <body>
            <header>
                <Toolbar />
            </header>
            <div>
              <div className={styles.house}>
                <h1 className={styles.house__text}>Descarte sustentável e seguro.</h1>
                <h1 className={styles.house__text}>Use Descartech!</h1>
                
              </div>
                <div>
                    <Link to={"/cadastro"}>
                    <button className={styles.button}>Cadastra-se</button>
                    </Link>
                   <Link to={"/login"}>
                   <button className={styles.button}>Já tenho conta</button>
                   </Link>

                </div>
            </div>
        </body>
    )
}
