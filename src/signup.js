import React, { useState } from 'react';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para processar o envio do formulário de registro
    // Você pode fazer uma requisição HTTP aqui para enviar os dados de registro ao servidor
  };

  return (
    <div width="1920" className="sc-fzplWN kfFQf">
      {/* Conteúdo do formulário de registro */}
      <form onSubmit={handleSubmit}>
        {/* Campos de email e senha */}
        <input
          name="email"
          className="col"
          placeholder="E-mail"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          name="password"
          className="col"
          placeholder="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* Botão de envio */}
        <button type="submit">Entrar</button>
      </form>
      {/* Outros elementos do formulário de registro */}
      <a href="/esqueci-senha">Esqueceu sua senha?</a>
      <div width="1920" className="sc-fznZeY QZJYJ">
        <span>Ainda não tem uma conta? </span>
        <a href="/cadastro">Cadastre-se!</a>
      </div>
    </div>
  );
}

export default Signup;
