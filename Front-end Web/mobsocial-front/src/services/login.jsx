import React from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginService = async (data, token) => {
  try {
    const response = await axios.post(
      "https://mobsocial-2024-2.onrender.com/api/v1/loginVoluntario",
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
    console.log("Data:", data);

    if (result) {
      localStorage.setItem("token", result.data.accessToken);
      localStorage.setItem("user", JSON.stringify(result));
      localStorage.setItem("userId", result.data.id);
      result.data.isOng = false;
      localStorage.setItem("isOng", result.data.isOng)
      console.log(window.localStorage.getItem("isOng"));
        window.location.href = "/";

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
    return { status: response.status, data: result }; // Return status and data
  } catch (error) {
    console.error("Erro na requisição", error);
    return { status: error.response ? error.response.status : 500, data: null }; // Return error status
  }
};

const LoginService2 = async (data, token) => {
  try {
    const response = await axios.post(
      "http://localhost:8001/api/v1/loginONG",
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
      console.log("Token armazenadoo", localStorage.getItem("token"));
      localStorage.setItem("user", JSON.stringify(result)); // Store all user data
      localStorage.setItem("userId", result.data.id);
      result.data.isOng = true;
      window.location.href = "/";

      localStorage.setItem("isOng", result.data.isOng)

      console.log(localStorage.getItem("userId"));


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
    return { status: response.status, data: result }; // Return status and data
  } catch (error) {
    console.error("Erro na requisição", error);
    return { status: error.response ? error.response.status : 500, data: null }; // Return error status
  }
};

export { LoginService, LoginService2 };
