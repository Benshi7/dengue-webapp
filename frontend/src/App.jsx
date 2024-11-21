import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

const App = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div>
      {isRegistering ? (
        <RegisterForm switchToLogin={() => setIsRegistering(false)} />
      ) : (
        <LoginForm switchToRegister={() => setIsRegistering(true)} />
      )}
    </div>
  );
};

export default App;