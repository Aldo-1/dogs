import React from "react";
import { Link } from "react-router-dom";

import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";

import { UserContext } from "../../UserContext";

function LoginForm() {
  const username = useForm();
  const password = useForm();

  const context = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      context.userLogin(username.value, password.value);
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
