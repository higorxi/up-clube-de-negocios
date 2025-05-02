import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import FormInput from './ui/FormInput';


interface LoginFormProps {
  onRegisterClick: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onRegisterClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login with:', { email, password });
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-white text-2xl font-bold mb-2">Acesse sua conta</h1>
      <p className="text-gray-300 mb-8">Entre com suas credenciais para acessar</p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-white mb-2">Email</label>
          <FormInput
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
            icon={<Mail size={18} />}
            required
          />
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="password" className="block text-white">Senha</label>
            <a href="#" className="text-amber-500 text-sm hover:underline">
              Esqueceu a senha?
            </a>
          </div>
          <FormInput
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon={<Lock size={18} />}
            required
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-amber-500 text-burgundy py-3 px-4 rounded-md font-medium hover:bg-amber-400 transition-colors"
        >
          Entrar
        </button>
        
        <div className="text-center mt-6">
          <p className="text-gray-300">
            Não tem uma conta?{' '}
            <button
              type="button"
              onClick={onRegisterClick}
              className="text-amber-500 font-medium hover:underline"
            >
              Cadastre-se
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;