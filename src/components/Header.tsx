import React, { useState, useEffect } from "react";
import { Bell, MenuIcon } from "lucide-react";
import { User as UserType } from "../types";

interface HeaderProps {
  user: UserType;
  onMenuClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onMenuClick }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: "Nova mensagem de cliente",
      read: false,
      timestamp: new Date(),
    },
    {
      id: 2,
      message: "Seu pedido foi processado",
      read: false,
      timestamp: new Date(),
    },
  ]);

  // Função para formatar a data de uma maneira legível
  const formatDate = (date: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60)
    );

    if (diffInMinutes < 1) return "Agora";
    if (diffInMinutes < 60) return `${diffInMinutes} min atrás`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h atrás`;

    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Intl.DateTimeFormat("pt-BR", options).format(date);
  };

  // Fechar o dropdown quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        target &&
        !target.closest(".dropdown-container") &&
        !target.closest(".notifications-container")
      ) {
        setShowDropdown(false);
        setShowNotifications(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleNotificationClick = (notificationId: number) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === notificationId ? { ...notif, read: true } : notif
      )
    );
  };

  const greeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Bom dia!";
    if (hour < 18) return "Boa tarde!";
    return "Boa noite!";
  };

  return (
    <header className="bg-white shadow px-4 py-3 flex items-center justify-between lg:justify-end">
      <button className="lg:hidden text-primary-900" onClick={onMenuClick}>
        <MenuIcon className="w-6 h-6" />
      </button>
      <div className="flex-1">
        <p className="text-gray-500 text-sm">
          {greeting()} Pronto para gerenciar seu painel?
        </p>
      </div>

      <div className="flex items-center space-x-4">
        {/* Notificações */}
        <div className="relative notifications-container">
          <button
            className="h-10 w-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors relative"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <Bell className="h-5 w-5 text-gray-600" />
            {notifications.some((notif) => !notif.read) && (
              <span className="absolute top-1 right-1.5 h-2 w-2 bg-primary-600 rounded-full"></span>
            )}
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-60 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
              {notifications.length === 0 ? (
                <p className="px-4 py-2 text-sm text-gray-500">
                  Sem notificações
                </p>
              ) : (
                notifications.map((notif) => (
                  <div
                    key={notif.id}
                    className={`px-4 py-2 text-sm ${
                      notif.read ? "text-gray-500" : "font-medium"
                    } hover:bg-gray-100`}
                    onClick={() => handleNotificationClick(notif.id)}
                  >
                    <div>{notif.message}</div>
                    <div className="text-xs text-gray-400 mt-1">
                      {formatDate(notif.timestamp)}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        {/* Dropdown do Usuário */}
        <div className="relative dropdown-container">
          <button
            className="flex items-center hover:bg-gray-100 rounded-full p-1 transition-colors"
            onClick={() => setShowDropdown(!showDropdown)}
            aria-haspopup="true"
            aria-expanded={showDropdown ? "true" : "false"}
          >
            <div className="h-8 w-8 bg-secondary-500 text-primary-800 rounded-full flex items-center justify-center font-bold mr-1">
              {user.name.charAt(0)}
            </div>
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
              <div className="px-4 py-2 border-b border-gray-100">
                <p className="font-medium">{user.name}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-secondary-100 text-secondary-800 px-2 py-0.5 rounded text-xs font-medium">
                    Nível {user.level}
                  </span>
                  <span className="ml-2">{user.points} pontos</span>
                </div>
              </div>
              <a
                href="/perfil"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Perfil
              </a>
              <a
                href="/configuracoes"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Configurações
              </a>
              <a
                href="/logout"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-t border-gray-100"
              >
                Sair
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
