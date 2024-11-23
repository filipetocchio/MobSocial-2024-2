import React from 'react'
import axios from 'axios'

const getUserById = async (id, setData) => {
    try {
        const response = await axios.get(`http://localhost:8001/api/v1/TbUsuarioVoluntario/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*', // Permite todas as origens
                // Adicione outros cabeçalhos de autorização se necessário
            }
        });

        if (response.status !== 200) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = response.data;
        console.log(result);
        setData(result.isVoluntario);
        return result;

    } catch (error) {
        console.error("Erro na requisição", error);
    }
}

export default getUserById