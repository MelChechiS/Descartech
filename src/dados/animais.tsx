import chuvisco from "../assets/animais/chuvisco.jpg";
import princesa from "../assets/animais/princesa.jpg";
import nescau from "../assets/animais/nescau.jpg";

const dados = [
    {
        id: 1,
        nomeAnimal: "Nescau",
        fotoAnimal: nescau,
        sexo: "M",
        idade: 0.3,
        porte: "Grande",
        cidade: "Macatuba",
        situacaoAnimal: "Bom estado"
      },
      {
        id: 2,
        nomeAnimal: "Princesa",
        fotoAnimal: princesa,
        sexo: "F",
        idade: 1,
        porte: "Grande",
        cidade: "Lençóis Paulista",
        situacaoAnimal: "Possui um grau médio de obesidade"
      },
      {
        id: 3,
        nomeAnimal: "Chuvisco",
        fotoAnimal: chuvisco,
        sexo: "M",
        idade: 5,
        porte: "Pequeno",
        cidade: "Bauru",
        situacaoAnimal: "Bom estado, porém possui cegueira em seu olho direito"
      }
]

export default dados;