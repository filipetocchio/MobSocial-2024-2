import React from "react";
import { Input as MuiInput } from "@mui/material";

const Input = ({
  id,
  type = "text",
  value,
  label,
  onChange,
  placeholder,
  error,
  errorMessage,
  focusedInput,
  setFocusedInput,
  style,
  multiline,
}) => {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={id} className="text-[#A3A3A3] text-lg w-full self-start">
        {label}
      </label>
      <div className="flex flex-col items-center w-full">
        {error && <span className="text-red-500 h-8">{errorMessage}</span>}
        <MuiInput
          id={id}
          inputProps={{
            style: {
              color: "#A3A3A3",
              fontWeight: "bold",
              textIndent: "12px",
              width: '100%',
              ...style,
            },
          }}
          type={type}
          className={`bg-[#1E1E1E] border-2 ${
            error ? "border-red-500" : "border-[#A3A3A3]"
          } rounded-lg w-full h-auto`}
          required
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disableUnderline={focusedInput !== id}
          onFocus={() => setFocusedInput(id)}
          onBlur={() => setFocusedInput(null)}
          multiline={multiline}
          rows={multiline ? 4 : 1}
        />
      </div>
    </div>
  );
};

export default Input;