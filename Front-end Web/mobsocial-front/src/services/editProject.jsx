import axios from 'axios';

const editONG = async (voluntarioId, data) => {
  try {
    console.log("Enviando dados para atualização:", data); 
    const response = await axios.put(`https://mobsocial-2024-2.onrender.com/api/v1/TbProjeto/${voluntarioId}`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const result = response.data
    console.log("Resposta do servidor:", response.data); 
    return { ...data, ...result, nome: data.nome };
  } catch (error) {
    console.error('Erro ao atualizar o projeto:', error);
    throw error;
  }
};

const getProject = async (data) => {
  try {
    const response = await axios.get(`https://mobsocial-2024-2.onrender.com/api/v1/TbProjeto`);
    data(response.data)
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar projeto:', error);
    throw error;
  }
}

export { editONG, getProject };