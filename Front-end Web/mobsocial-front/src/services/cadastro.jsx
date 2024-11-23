import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const CadastrarServiceVoluntario = async (data) => {
    try {
        const response = await axios.post("http://localhost:8001/api/v1/TbUsuarioVoluntario", data, {
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
        console.log(result);
        return result;

    } catch (error) {
        if (error.response && error.response.status === 409) {
            toast.error("Usuário já existe!");
        throw error;
    }
};
}

const CadastrarServiceONG = async (data) => {
    try {
        const response = await axios.post("http://localhost:8001/api/v1/TbUsuarioONG", data, {
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
        console.log(result);
        return result;
    } catch (error) {
        if (error.response && error.response.status === 409) {
            toast.error("Usuário já existe!");
        throw error;
}
}
}



export { CadastrarServiceVoluntario, CadastrarServiceONG };