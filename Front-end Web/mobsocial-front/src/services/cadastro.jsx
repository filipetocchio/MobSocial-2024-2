import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const CadastrarService = async (data, token) => {
    try {
        const response = await axios.post("http://localhost:8000/api/v1/TbUsuario", data, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*', // Permite todas as origens
                // Adicione outros cabeçalhos de autorização se necessário
            }
        });

        if (response.status !== 201) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = response.data;
        const token = result.data.accessToken
        console.log(result);
        return result;

    } catch (error) {
        if (error.response && error.response.status === 409) {
            toast.error("Usuário já existe!");
        throw error;
    }
};
}

export default CadastrarService;