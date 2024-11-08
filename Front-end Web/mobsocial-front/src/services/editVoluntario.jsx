import axios from 'axios';

const editVoluntario = async (voluntarioId, data) => {
  try {
    const response = await axios.put(`https://api.example.com/voluntarios/${voluntarioId}`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating volunteer data:", error);
    throw error;
  }
};

export default editVoluntario;