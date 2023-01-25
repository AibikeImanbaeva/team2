import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { useAuth } from "../contexts/AuthContextProvider";
import IconButton from "@mui/material/IconButton";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";


import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";


const RegistrationPage = () => {
  const { handleRegister, error, setError } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [passConfirm, setPassConfirm] = useState("");
  const [secretWord, setSecretWord] = useState("")
  // const [executor, setExecutor] = useState("");

  // const { handleRegister } = useAuth();

  
  function handleSave() {
    if (
      !name.trim() ||
      !lastName.trim() ||
      !username.trim() ||
      !pass.trim() ||
      !passConfirm.trim() || 
      !secretWord.trim()
      )
      {
      alert("Some inputs are empty!");
    } else {
      console.log("HELLO", passConfirm);
      let formData = new FormData();
      formData.append("name", name);
      formData.append("last_name", lastName);
      formData.append("username", username);
      formData.append("password", pass);
      formData.append("password2", passConfirm);
      formData.append("secret_word", secretWord)

      console.log(formData);
      handleRegister(formData, navigate);
    }
  }
  function cleanRegister() {
    setName("");
    setLastName("");
    setUsername("");
    setPass("");
    setPassConfirm("");
    secretWord("")
  }

  useEffect(() => {
    setError(false);
  }, []);

  /////////////////////
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setPass(event.target.value);
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  //////////////
  const [values2, setValues2] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChangee = (prop) => (event) => {
    setValues2({ ...values2, [prop]: event.target.value });
    setPassConfirm(event.target.value);
  };

  const handleClickShowPassworde = () => {
    setValues2({
      ...values2,
      showPassword: !values2.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  /////////////////////

  return (
    <>
      <div className="register_main">
        <div className="register_form">
          <h2 className="register_form_title">Sign Up</h2>

          <TextField
            sx={{ marginBottom: "10px", width: "50%" }}
            id="outlined-textarea"
            label="Имя"
            placeholder="Placeholder"
            multiline
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            sx={{ marginBottom: "6px", width: "50%" }}
            id="outlined-textarea"
            label="Фамилие"
            placeholder="Placeholder"
            multiline
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <TextField
            sx={{ marginBottom: "10px", width: "50%" }}
            id="outlined-textarea"
            label="Логин"
            placeholder="Placeholder"
            multiline
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            sx={{ marginBottom: "10px", width: "50%" }}
            id="outlined-textarea"
            label="Секретное слово"
            placeholder="you're secret word"
            multiline
            value={secretWord}
            onChange={(e) => setSecretWord(e.target.value)}
          />

          <FormControl sx={{ m: 1, width: "50%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Пароль
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: "50%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Подтверждение
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values2.showPassword ? "text" : "password"}
              value={values2.password}
              onChange={handleChangee("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassworde}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values2.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          


          <button className="custom-btn btn-4" onClick={handleSave}>
            <span>Подтвердить</span>
          </button>
          <div onClick={() => navigate("/login")}>
            {" "}
            Вы уже зарегистрированы?
          </div>
          <div onClick={() => navigate("/")}>
            {" "}
            Вернуться на главную страницу
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationPage;
