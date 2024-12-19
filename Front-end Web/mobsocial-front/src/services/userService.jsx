import React from 'react'
import axios from 'axios'

const getUserById = async (id, setData) => {
    try {
        const response = await axios.get(`https://mobsocial-2024-2.onrender.com/api/v1/TbUsuarioONG/${id}`, {
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
        setData(result);
        return result;

    } catch (error) {
        console.error("Erro na requisição", error);
    }
}

const getUserByIdVoluntario = async (id, setData) => {
    try {
        const response = await axios.get(`https://mobsocial-2024-2.onrender.com/api/v1/TbUsuarioVoluntario/${id}`, {
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
        setData(result);
        return result;

    } catch (error) {
        console.error("Erro na requisição", error);
    }
}

export { getUserById, getUserByIdVoluntario }