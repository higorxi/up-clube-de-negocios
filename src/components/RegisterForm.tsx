import React, { useState } from 'react';
import { User, Mail, Phone, Briefcase, Lock } from 'lucide-react';
import UserTypeSelector from './UserTypeSelector';
import FormInput from './ui/FormInput';

interface RegisterFormProps {
  onLoginClick: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onLoginClick }) => {
  const [userType, setUserType] = useState<'professional' | 'company'>('professional');
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    profession: '',
    password: '',
    confirmPassword: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Register as:', userType, formData);
  };

  // Step 1 - Choose user type and enter basic info
  if (step === 1) {
    return (
      <div className="max-w-2xl mx-auto">
        <h1 className="text-white text-2xl font-bold mb-2">Crie sua conta</h1>
        <p className="text-gray-300 mb-6">Escolha o tipo de cadastro</p>
        
        <UserTypeSelector 
          selectedType={userType} 
          onSelect={setUserType} 
        />
        
        <form className="mt-8 space-y-6">
          <div>
            <label htmlFor="name" className="block text-white mb-2">Nome Completo</label>
            <FormInput
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Seu nome completo"
              icon={<User size={18} />}
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-white mb-2">Email</label>
            <FormInput
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="seu@email.com"
              icon={<Mail size={18} />}
              required
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-white mb-2">Telefone</label>
            <FormInput
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(00) 00000-0000"
              icon={<Phone size={18} />}
              required
            />
          </div>
          
          <button
            type="button"
            onClick={() => setStep(2)}
            className="w-full bg-amber-500 text-burgundy py-3 px-4 rounded-md font-medium hover:bg-amber-400 transition-colors"
          >
            Continuar
          </button>
        </form>
      </div>
    );
  }
  
  // Step 2 - Profession and password details
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-white text-2xl font-bold mb-8">
        <button 
          onClick={() => setStep(1)} 
          className="text-gray-300 hover:text-white mr-2"
        >
          ←
        </button>
        Complete seu cadastro
      </h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="profession" className="block text-white mb-2">Profissão</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <Briefcase size={18} />
            </div>
            <select
              id="profession"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              className="bg-opacity-10 bg-white text-white block w-full pl-10 pr-10 py-3 border border-gray-600 rounded-md focus:ring-amber-500 focus:border-amber-500 appearance-none"
              required
            >
              <option value="" disabled>Selecione sua profissão</option>
              <option value="developer">Desenvolvedor</option>
              <option value="designer">Designer</option>
              <option value="manager">Gerente</option>
              <option value="other">Outro</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
        
        <div>
          <label htmlFor="password" className="block text-white mb-2">Senha</label>
          <FormInput
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            icon={<Lock size={18} />}
            required
          />
        </div>
        
        <div>
          <label htmlFor="confirmPassword" className="block text-white mb-2">Confirmar Senha</label>
          <FormInput
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            icon={<Lock size={18} />}
            required
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-amber-500 text-burgundy py-3 px-4 rounded-md font-medium hover:bg-amber-400 transition-colors"
        >
          Cadastrar como {userType === 'professional' ? 'Profissional' : 'Empresa'}
        </button>
        
        <div className="text-center mt-6">
          <p className="text-gray-300">
            Já tem uma conta?{' '}
            <button
              type="button"
              onClick={onLoginClick}
              className="text-amber-500 font-medium hover:underline"
            >
              Faça login
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;