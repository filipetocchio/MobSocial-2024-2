import React from 'react'
import axios from "axios";

const CadastrarService = async (data) => {
    try {
        const response = await axios.post("http://localhost:8000/api/v1/TbUsuario", data);

        if (response.status !== 200) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
        
        const result = response.data
        console.log(result);
        console.log("Data:", data);
        return result;

    } catch (error) {
        console.error("Erro no cadastro!", error);
        throw error;
    }
}

export default CadastrarService