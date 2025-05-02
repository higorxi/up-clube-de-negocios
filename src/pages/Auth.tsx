import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import AuthLayout from '../layout/AuthLayout';

const AuthPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [view, setView] = useState<'login' | 'register'>('login');

  useEffect(() => {
    if (location.pathname === '/register') {
      setView('register');
    } else {
      setView('login');
    }
  }, [location.pathname]);

  const handleViewChange = (newView: 'login' | 'register') => {
    setView(newView);
    navigate(`/${newView}`);
  };

  return (
    <div className="bg-burgundy-dark">
    <AuthLayout currentView={view} onViewChange={handleViewChange}>
      {view === 'login' ? (
        <LoginForm onRegisterClick={() => handleViewChange('register')} />
      ) : (
        <RegisterForm onLoginClick={() => handleViewChange('login')} />
      )}
    </AuthLayout>
    </div>
  );
};

export default AuthPage;
