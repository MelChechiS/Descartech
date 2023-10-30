import React, { useState } from "react";
import endImg from "../../../assets/components_img/icone_usuario.png";
import styles from "./ImageInput.module.scss"
import { IoIosAdd } from "react-icons/io";

function App() {

  const [image, setImage] = useState('');

  const uploadImage = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
  }

  return (
    <div>

      <form onSubmit={uploadImage}>
      <div className={styles.box}>
        <label className={styles.imageBox} htmlFor="image-file">
          {image ? <img src={URL.createObjectURL(image)} alt="Imagem" className={styles.imageActive} /> : <img src={endImg} alt="Imagem" className={styles.imageNotActive} />}
        </label>

          <label htmlFor="image-file" className={styles.button}>
            <IoIosAdd size={"25px"}/>
          </label>

      </div>
        <input type="file" name="image-file" id="image-file" onChange={e => setImage(e.target.files[0])} className={styles.imageInput}/>
      </form>
    </div>
  );
}

export default App;

// https://www.youtube.com/watch?v=rlHLlhjb2p8
