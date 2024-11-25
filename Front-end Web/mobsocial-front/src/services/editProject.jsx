import axios from 'axios';

const editONG = async (voluntarioId, data) => {
  try {
    const response = await axios.put(`http://localhost:8001/api/v1/TbUsuarioONG/${voluntarioId}`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const result = response.data;
    if (result) {
      window.location.href = "/DashboardONG"
    }
    return result;
  } catch (error) {
    console.error('Erro ao atualizar o projeto:', error);
    throw error;
  }
};

export default editONG;