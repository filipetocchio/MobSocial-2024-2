import axios from "axios";
import { toast } from "react-toastify";

const CadastrarService = async (data) => {
  try {
    const response = await axios.post("http://localhost:8000/api/v1/TbUsuario", data);

    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = response.data;
    console.log(result);
    console.log("Data:", data);
    return result;

  } catch (error) {
    if (error.response && error.response.status === 409) {
      toast.error("Usuário já existe!");
    } else {
      console.error("Erro no cadastro!", error);
      toast.error("Erro ao cadastrar usuário!");
    }
    throw error;
  }
};

export default CadastrarService;