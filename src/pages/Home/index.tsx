// Importando Componentes da Página:

import Toolbar from "../../components/Toolbar";
import styles from "./Home.module.scss";
import Banner from "../../assets/banner.png";
import Footer from "../../components/Footer";

// Criação da Função "Home":

export default function Home() {
  return (
    <body>
      <header>
        <Toolbar />
      </header>
      <div className={styles.back}>
        <div className={styles.bannerBox}>
          <img src={Banner} alt="Banner de Descarte" className={styles.bannerBox__img} />
          <div className={styles.bannerBox__text}>
            <h1 className={styles.h1}>Lixo Eletrônico</h1>
          </div>
        </div>

        <div className={styles.informContainer}>
          <div className={styles.informBox}>
            <h1 className={styles.informBox__title}> O que é Lixo Eletrônico?</h1>
            <h3 className={styles.informBox__subtitle}>
              Lixo eletrônico, também conhecido como "e-lixo" ou "resíduos eletrônicos", refere-se a equipamentos eletrônicos descartados, danificados ou obsoletos, que incluem dispositivos como computadores, smartphones, tablets, televisores, aparelhos domésticos e outros componentes eletrônicos.
              Esses produtos contêm substâncias tóxicas, como chumbo, mercúrio e cádmio, que podem ser prejudiciais ao meio ambiente e à saúde humana se não forem descartados adequadamente.
              O descarte inadequado de lixo eletrônico é um problema crescente, levando a poluição ambiental e a perda de recursos valiosos.
              Portanto, a reciclagem e a gestão responsável de lixo eletrônico são essenciais para mitigar esses impactos negativos.
            </h3>
            <br></br>
            <h1 className={styles.informBox__title}> Processo do Lixo Eletrônico</h1>
            <h3 className={styles.informBox__subtitle}>
              <li>
                Coleta - Os dispositivos eletrônicos obsoletos ou danificados são coletados em centros de reciclagem, locais de coleta de eletrônicos ou por empresas especializadas.
              </li>
              <br></br>
              <li>
                Triagem - Os eletrônicos são separados por tipo e condição, identificando aqueles que podem ser reutilizados, reciclados ou que precisam de tratamento especial devido a substâncias tóxicas.
              </li>

              <br></br>
              <li>
                Desmontagem: Os dispositivos são desmontados para separar componentes, como placas de circuito, baterias e fios, que podem ser reciclados separadamente.
              </li>
              <br></br>
              <li>
                Reciclagem: Os materiais recicláveis, como metais preciosos, plásticos e vidros, são processados e enviados para serem reutilizados na fabricação de novos produtos eletrônicos.
              </li>
              <br></br>
              <li>
                Tratamento de substâncias perigosas: Componentes com substâncias tóxicas, como mercúrio e chumbo, são tratados de forma segura para evitar a contaminação do meio ambiente.
              </li>
              <br></br>
              <li>
                Recondicionamento: Dispositivos eletrônicos em boas condições podem ser recondicionados e revendidos ou doados.
              </li>
              <br></br>
              <li>
                Destinação final: Os resíduos finais são encaminhados para aterros sanitários apropriados ou incinerados de forma controlada, quando não podem ser reciclados.
              </li>
            </h3>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </body>
  );
}
