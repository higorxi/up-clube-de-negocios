import React from 'react';
import { LogIn, UserPlus } from 'lucide-react';

interface AuthLayoutProps {
  children: React.ReactNode;
  currentView: 'login' | 'register';
  onViewChange: (view: 'login' | 'register') => void;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ 
  children, 
  currentView, 
  onViewChange 
}) => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-full max-w-5xl flex rounded-lg overflow-hidden shadow-xl">
        {/* Left panel - Navigation */}
        <div className="bg-brown w-full max-w-xs p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-white text-2xl font-bold mb-10 text-center">
              Bem-vindo ao UP Connection
            </h2>
            
            {/* Navigation buttons */}
            <div className="space-y-4">
              <button 
                onClick={() => onViewChange('login')}
                className={`w-full flex items-center p-4 rounded-lg transition-colors duration-200 ${
                  currentView === 'login' 
                    ? 'bg-amber-500 text-burgundy font-medium' 
                    : 'text-white hover:bg-brown-lighter'
                }`}
              >
                <LogIn className="w-5 h-5 mr-3" /> 
                <div className="text-left">
                  <div className="font-medium">Login</div>
                  <div className="text-xs opacity-80">Acesse sua conta</div>
                </div>
              </button>
              
              <button 
                onClick={() => onViewChange('register')}
                className={`w-full flex items-center p-4 rounded-lg transition-colors duration-200 ${
                  currentView === 'register' 
                    ? 'bg-amber-500 text-burgundy font-medium' 
                    : 'text-white hover:bg-brown-lighter'
                }`}
              >
                <UserPlus className="w-5 h-5 mr-3" /> 
                <div className="text-left">
                  <div className="font-medium">Cadastro</div>
                  <div className="text-xs opacity-80">Crie sua conta</div>
                </div>
              </button>
            </div>
          </div>
          
          {/* Footer */}
          <div className="text-white text-xs opacity-70 text-center mt-8">
            © 2025 UP Connection. Todos os direitos reservados.
          </div>
        </div>
        
        {/* Right panel - Form content */}
        <div className="bg-dark-burgundy flex-1 p-8 relative overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;