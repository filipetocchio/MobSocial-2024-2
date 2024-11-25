import axios from 'axios';

const editONG = async (voluntarioId, data) => {
  try {
    const response = await axios.put(`http://localhost:8001/api/v1/TbUsuarioONG/${voluntarioId}`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const result = response.data
    if (response.status == 200) {
      window.location.href = "/DashboardONG"
    }
    return result;
  } catch (error) {
    console.error('Erro ao atualizar o projeto:', error);
    throw error;
  }
};

const getProject = async (data) => {
  try {
    const response = await axios.get(`http://localhost:8001/api/v1/TbProjeto`);
    const result = response.data;
    data(result)
    return result;
  } catch (error) {
    console.error('Erro ao buscar projeto:', error);
    throw error;
  }
}

export { editONG, getProject };