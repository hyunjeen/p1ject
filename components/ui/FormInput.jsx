import { useState } from "react";
import classes from "./FormInput.module.css";
import { Box } from "@mui/material";
import { Search } from "@mui/icons-material";

const FormInput = (props) => {
  const { placeholder, type } = props;
  const [formActive, setFormActive] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setFormActive(false);
    console.log("http", inputValue);
    setInputValue("");
  };

  return (
    <form
      onSubmit={submitHandler}
      onBlur={() => setFormActive(false)}
      onFocus={() => setFormActive(true)}
      className={`${classes.form} ${formActive && classes.active}`}
    >
      <input
        value={inputValue}
        className={`${classes.input} bg-gray-100 focus:bg-white text-black`}
        type={type ? type : "text"}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={placeholder ? placeholder : "검색어를 입력하세요"}
      />
      <Box
        onClick={submitHandler}
        sx={{
          display: "flex",
          alignItems: "center",
          pr: "5px",
        }}
      >
        <Search sx={{ color: "black" }}></Search>
      </Box>
    </form>
  );
};

export default FormInput;
