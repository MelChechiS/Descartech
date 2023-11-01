import Toolbar from "../../components/Toolbar/index";
import styles from "../Sobre/Sobre.module.scss";
import Footer from "../../components/Footer";
import Harry from "../../assets/desenvolvedores/harrytcc.webp";
import Mel from "../../assets/desenvolvedores/mel.webp"

export default function Inicial() {
  return (
    <body>
      <header>
        <Toolbar />
      </header>
      <div className={styles.projeto}>
        <h1 className={styles.projeto__h1}>Sobre o projeto da Descartech</h1>
        <p className={styles.projeto__p}>
          Esse site é nosso projeto de Trabalho de Conclusão do Curso, desenvolvido durante o curso de Desenvolvimento de Sistemas na ETEC "Cidade do Livro".
          <br></br>
          Para o desenvolvimento do trabalho, foram utilizados componentes e habilidades adquiridas durante as aulas nesses três anos de formação.
        </p>

      </div>
      <div className={styles.desenvolvedores}>
        <h1 className={styles.desenvolvedores__h1}>Desenvolvedores do projeto.</h1>
      </div>
      <div className={styles.sobre}>
        <h3 className={styles.sobre__h3}>Harry Zardo</h3>
        <img src={Harry} className={styles.sobre__img}></img>

      </div>








      <footer>
        <Footer />
      </footer>
    </body>
  )
};
