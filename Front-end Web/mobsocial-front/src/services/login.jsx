import React from "react";
import axios from "axios";

const LoginService = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/v1/login",
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
    console.log(result);
    console.log("Data:", data);

    if (result) {
      localStorage.setItem("token", result.data.accessToken);
      console.log("Token armazenado", result.data.accessToken);
      localStorage.setItem("name", result.username);
      toast({
        position: "top-right",
        title: result.message,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      router.push("/");
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
