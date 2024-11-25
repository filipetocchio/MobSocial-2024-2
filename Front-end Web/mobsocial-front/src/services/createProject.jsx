import axios from 'axios'

const createProject = async (projectData) => {
    try {
      const response = await axios.post("http://localhost:8001/api/v1/TbProjeto", projectData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = response.data;
      if (result) {
        window.location.href = "/DashboardONG"
      }
      return response.data;
    } catch (error) {
      console.error('Erro ao criar o projeto:', error);
      throw error;
    }
  };

  const getAllProject = async (data) => {
    try {
        const response = await axios.get("http://localhost:8001/api/v1/TbProjeto", {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        data(response.data)
    } catch (e) {
        console.log("Erro na requisição", e)
    }
  }

  export { getAllProject, createProject }