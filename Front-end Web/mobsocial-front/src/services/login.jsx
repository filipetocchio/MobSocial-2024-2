import React from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const LoginService = async (data, token) => {
  try {
    const response = await axios.post(
      "http://localhost:8001/api/v1/loginVoluntario",
      JSON.stringify(data),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = response.data;
    const token = result.data.accessToken;
    console.log(result);
    console.log("Data:", data);

    if (result) {
      localStorage.setItem("token", result.data.accessToken);
      console.log("Token armazenado", result.data.accessToken);
      localStorage.setItem("name", result.username);

      if (result.data.isOng) {
        console.log("Login para ONG");
      } else if (result.data.isVoluntario) {
        console.log("Login para Voluntário");
      }

      toast({
        position: "top-right",
        title: result.message,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Usuário ou senha inválidos",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  } catch (error) {
    console.error("Erro na requisição", error);
  }
}

export default LoginService;
