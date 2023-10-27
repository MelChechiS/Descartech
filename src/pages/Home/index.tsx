// Importando Componentes da Página:

import Toolbar from "../../components/Toolbar";
import styles from "./Home.module.scss";
import Banner from "../../assets/eletrônicos/banner.png";
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
              <br></br>
              <br></br>
              Esses produtos contêm substâncias tóxicas, como chumbo, mercúrio e cádmio, que podem ser prejudiciais ao meio ambiente e à saúde humana se não forem descartados adequadamente.
              <br></br>
              <br></br>
              O descarte inadequado de lixo eletrônico é um problema crescente, levando a poluição ambiental e a perda de recursos valiosos.
              Portanto, a reciclagem e a gestão responsável de lixo eletrônico são essenciais para mitigar esses impactos negativos.
            </h3>


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


            <h1 className={styles.informBox__title}>A falta de coleta do lixo eletrônico.</h1>
            <h3 className={styles.informBox__subtitle}>
            No Brasil há uma lei que determina que os fabricantes são os responsáveis por receber de volta os produtos eletrônicos que venderam e que serão descartados. Esse processo é chamado de logística reversa.
            <br></br>
            <br></br>
            Contudo, a logística reversa ainda é um grande desafio para o Brasil. Em primeiro lugar, porque os custos do processo de coleta, separação e destinação do lixo às empresas de reciclagem acabam sendo empurrados do fabricante para o vendedor e consequentemente para o consumidor final, quando na realidade essa deveria ser uma responsabilidade compartilhada entre todos os atores da PNRS.
            <br></br>
            <br></br>
            Em segundo lugar, porque ainda há a falta de esclarecimento para que as pessoas façam o descarte de forma responsável. E isso envolve a compreensão da separação correta de materiais até o conhecimento de postos de coleta para a entrega do lixo reciclável. E assim, milhões de toneladas de lixo continuam sendo descartadas de forma incorreta no país.
            <br></br>
            <br></br>
            </h3>


            <h1 className={styles.informBox__title}>Como descartar eletrodomésticos?</h1>
            <h3 className={styles.informBox__subtitle}>
            Você já entendeu que é importante descartar eletrodomésticos da forma correta, mas como seria isso? Primeiramente, deve-se salientar que o descarte desse tipo de lixo deve ser feito de forma organizada.
            <br></br>
            <br></br>
            Sendo assim, se houver partes quebradas e pontiagudas, por exemplo, vale embrulhar esses cacos e sinalizar para quem ninguém se machuque. Além disso, se ainda possui a caixa do produto, é ideal que se desfaça desse lixo também.
            <br></br>
            <br></br>
            Portanto, guarde as partes quebradas a serem descartadas na caixa e procure por um local de coleta. Esse é o primeiro passo, mas ainda é necessário dar destino ao restante do material, sempre de forma segura e sem prejudicar o meio ambiente.
            <br></br>
            <br></br>
            Como os eletrodomésticos precisam de alguns cuidados específicos, algumas fazem coletas para residências e também empresariais em São Paulo. O lado positivo é que elas são autorizadas para o serviço e você pode conferir a lista delas no site da prefeitura de sua cidade.
            <br></br>
            <br></br>
            Imagina que fazer isso sem ajuda profissional exige no mínimo que você tenha um veículo que possa carregar o seu eletrodoméstico. Depois, precisa saber onde realizar o descarte, já que esse tipo de resíduo não pode ser colocado em latas de lixo ou semelhantes.
            <br></br>
            <br></br>
            Em muitos casos os condomínios já oferecem parcerias para que os moradores possam ter o descarte de eletrodomésticos facilitados. Assim, as empresas vão até o local e recolhe o resíduo, economizando tempo e dinheiro.
            <br></br>
            <br></br>
            Entretanto, é claro que não é qualquer empresa que pode fazer isso. Ao acessar a lista das empresas autorizadas na sua cidade, verifique também o trabalho delas e procure recomendações positivas.
            <br></br>
            <br></br>
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
