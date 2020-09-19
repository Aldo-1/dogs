import React from "react";
import { Link } from "react-router-dom";

import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";

function LoginForm() {
  const username = useForm();
  const password = useForm();

  function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      fetch("https://www.dogsapi.origamid.dev/json/jwt-auth/v1/token", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          return json;
        });
    }
  }
  return (
    <section>
      Login form
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />

        <Button>Entrar</Button>
      </form>
      <Link to="criar">Cadastro</Link>
    </section>
  );
}

export default LoginForm;
