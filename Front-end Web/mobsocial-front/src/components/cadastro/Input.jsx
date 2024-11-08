
import React from "react";
import { Input as MuiInput } from "@mui/material";

const Input = ({
  id,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  errorMessage,
  focusedInput,
  setFocusedInput,
}) => {
  return (
    <div className="flex flex-col items-center w-full">
      {error && <span className="text-red-500 h-8">{errorMessage}</span>}
      <MuiInput
        id={id}
        inputProps={{
          style: {
            color: "#A3A3A3",
            fontWeight: "bold",
            textIndent: "12px",
          },
        }}
        type={type}
        className={`bg-[#1E1E1E] border-2 ${
          error ? "border-red-500" : "border-[#A3A3A3]"
        } rounded-lg w-[75%] h-12`}
        required
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disableUnderline={focusedInput !== id}
        onFocus={() => setFocusedInput(id)}
        onBlur={() => setFocusedInput(null)}
      />
    </div>
  );
};

export default Input;