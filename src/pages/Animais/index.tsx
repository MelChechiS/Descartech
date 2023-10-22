import Toolbar from "../../components/Toolbar";
import styles from "./Animais.module.scss";
import TodosAnimais from "../../dados/animaisAll";
import Footer from "../../components/Footer";


export default function Animais() {
  return (
    <div className={styles.back}>
      <Toolbar />


      <div className={styles.dispBox}>
        <h1 className={styles.dispBox__text}> Formulário para o Descarte: </h1>
      </div>

      <div className={styles.inputGroup}>
                <div className={styles.inputBox}>
                  <label htmlFor="nome" className={styles.inputBox__label}>
                    {" "}
                    Nome{" "}
                  </label>
                  <input
                    id="nome"
                    type="text"
                    name="nome"
                    placeholder="Digite seu nome"
                    required
                    className={styles.inputBox__input}
                  ></input>
                </div>

                <div className={styles.inputBox}>
                  <label htmlFor="sobrenome" className={styles.inputBox__label}>
                    {" "}
                    Sobrenome{" "}
                  </label>
                  <input
                    id="sobrenome"
                    type="text"
                    name="sobrenome"
                    placeholder="Digite seu sobrenome"
                    required
                    className={styles.inputBox__input}
                  ></input>
                </div>

                <div className={styles.inputBox}>
                  <label htmlFor="cpf" className={styles.inputBox__label}>
                    {" "}
                    Cpf{" "}
                  </label>
                  <input
                    id="cpf"
                    type="text"
                    name="cpf"
                    placeholder="Digite seu cpf"
                    required
                    className={styles.inputBox__input}
                  ></input>
                </div>

                <div className={styles.inputBox}>
                  <label htmlFor="email" className={styles.inputBox__label}>
                    {""}
                    Email{""}
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Digite seu email"
                    required
                    className={styles.inputBox__input}
                  ></input>
                </div>

                <div className={styles.inputBox}>
                  <label htmlFor="number" className={styles.inputBox__label}>
                    {" "}
                    Telefone{" "}
                  </label>
                  <input
                    id="number"
                    type="text"
                    name="number"
                    placeholder="(xx) xxxxx-xxxx"
                    required
                    className={styles.inputBox__input}
                  ></input>
                </div>

                <div className={styles.inputBox}>
                  <label htmlFor="city" className={styles.inputBox__label}>
                    {" "}
                    Cidade{" "}
                  </label>
                  <input
                    id="city"
                    type="text"
                    name="city"
                    placeholder="Digite sua Cidade"
                    required
                    className={styles.inputBox__input}
                  ></input>
                </div>

                <div className={styles.inputBox}>
                  <label htmlFor="city" className={styles.inputBox__label}>
                    {" "}
                    Cidade{" "}
                  </label>
                  <input
                    id="city"
                    type="text"
                    name="city"
                    placeholder="Digite sua Cidade"
                    required
                    className={styles.inputBox__input}
                  ></input>
                </div>

                <div className={styles.inputBox}>
                  <label htmlFor="city" className={styles.inputBox__label}>
                    {" "}
                    Cidade{" "}
                  </label>
                  <input
                    id="city"
                    type="text"
                    name="city"
                    placeholder="Digite sua Cidade"
                    required
                    className={styles.inputBox__input}
                  ></input>
                </div>

                <div className={styles.inputBox}>
                  <label htmlFor="city" className={styles.inputBox__label}>
                    {" "}
                    Cidade{" "}
                  </label>
                  <input
                    id="city"
                    type="text"
                    name="city"
                    placeholder="Digite sua Cidade"
                    required
                    className={styles.inputBox__input}
                  ></input>
                </div>

                <div className={styles.inputBox}>
                  <label htmlFor="city" className={styles.inputBox__label}>
                    {" "}
                    Cidade{" "}
                  </label>
                  <input
                    id="city"
                    type="text"
                    name="city"
                    placeholder="Digite sua Cidade"
                    required
                    className={styles.inputBox__input}
                  ></input>
                </div>

                
                <div>
                  </div></div>
              <div>
        
    
      </div>

        <Footer/>
    </div>
  );
}
