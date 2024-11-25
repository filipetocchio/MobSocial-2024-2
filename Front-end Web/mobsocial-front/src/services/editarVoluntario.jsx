import axios from "axios";
import { toast } from "react-toastify";

const EditarVoluntarioService = async (data, token) => {
  try {
    const response = await axios.put(
      "http://localhost:8001/api/v1/TbUsuarioVoluntario/1",
      JSON.stringify(data),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = response.data;
    toast.success("Dados atualizados com sucesso!");
    return { status: response.status, data: result };
  } catch (error) {
    console.error("Erro na requisição", error);
    toast.error("Erro ao atualizar dados!");
    return { status: error.response ? error.response.status : 500, data: null };
  }
};

export default EditarVoluntarioService;