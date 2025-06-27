import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import FaceRecognition from '../components/FaceRecognition';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = () => {
    if (username === 'admin' && password === '1234') {
      setLoggedInUser(username);
    } else {
      alert('Credenciales inválidas');
    }
  };

  const handleFaceLogin = (user) => {
    setLoggedInUser(user);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto' }}>
      {loggedInUser ? (
        <h2>Bienvenido, {loggedInUser}</h2>
      ) : (
        <>
          <h2>Login de Empresa</h2>
          <Input label="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
          <Input label="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button text="Iniciar Sesión" onClick={handleLogin} />
          <hr />
          <FaceRecognition onLogin={handleFaceLogin} />
        </>
      )}
    </div>
  );
};

export default LoginPage;
