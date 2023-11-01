import Toolbar from "../../components/Toolbar/index";
import styles from "../Sobre/Sobre.module.scss";
import Footer from "../../components/Footer";
import Harry from "../../assets/desenvolvedores/harrytcc.jpg.webp";
import Mel from "../../assets/desenvolvedores/mel.webp"

export default function Inicial() {
  return (
    <body>
      <header>
        <Toolbar />
      </header>
      <div className={styles.sobre}>
        <h1 className={styles.sobre__h1}>Desenvolvedores do projeto.</h1>
        <h3 className={styles.sobre__h3}>Harry Zardo</h3>
        <img src={Mel} className={styles.sobre__img}></img>

      </div>








      <footer>
        <Footer />
      </footer>
    </body>
  )
};
