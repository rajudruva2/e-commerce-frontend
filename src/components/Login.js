import React, { useState } from 'react';

function Login({ setLoggedIn }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = (e) => {
    e.preventDefault();

    if (username && password) {
      setLoggedIn(true);
    }
  };

  return (
    <div className="login-container">

      <form className="login-form" onSubmit={login}>

        <h2>Druv Collections Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;
