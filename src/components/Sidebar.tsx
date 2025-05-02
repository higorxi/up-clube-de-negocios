import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Users,
  ShoppingBag,
  BookOpen,
  Gift,
  Settings,
  Home,
  Landmark,
  Calendar,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useSidebarStore } from "../store/sidebar";
import { cn } from "../lib/utils";

interface SidebarLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  isExpanded: boolean;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({
  to,
  icon,
  label,
  isActive,
  isExpanded,
}) => {
  return (
    <Link
      to={to}
      className={cn(
        "group flex items-center p-3 mb-1 rounded-md transition-all relative",
        isActive
          ? "bg-primary-700 text-white"
          : "text-white hover:bg-primary-700/30",
        !isExpanded && "justify-center"
      )}
    >
      {React.cloneElement(icon as React.ReactElement, {
        className: cn("h-5 w-5", isExpanded && "mr-3"),
      })}
      {isExpanded ? (
        <span>{label}</span>
      ) : (
        <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 whitespace-nowrap z-50 pointer-events-none">
          {label}
        </div>
      )}
    </Link>
  );
};

interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
  isExpanded: boolean;
}

const SidebarSection: React.FC<SidebarSectionProps> = ({
  title,
  children,
  isExpanded,
}) => {
  return (
    <div className="mb-6">
      {isExpanded && (
        <h3 className="px-3 text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">
          {title}
        </h3>
      )}
      <div className="space-y-1">{children}</div>
    </div>
  );
};

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { isExpanded, toggle } = useSidebarStore();

  const user = {
    name: "Ana Silva",
    level: "Prata",
  };

  return (
    <motion.div
      animate={{ width: isExpanded ? 240 : 80 }}
      transition={{ duration: 0.3 }}
      className="bg-primary-950 h-screen flex flex-col relative"
    >
      {/* Botão de Expandir/Colapsar */}
      <div className="absolute top-6 right-[-12px] z-50">
        <button
          onClick={toggle}
          className="bg-primary-800 text-white p-1 rounded-full hover:bg-primary-700 transition-colors shadow-lg"
        >
          {isExpanded ? (
            <ChevronLeft className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </button>
      </div>

      {/* Logo */}
      <div
        className={cn(
          "p-4 flex items-center mb-6 text-white",
          !isExpanded && "justify-center"
        )}
      >
        <div className="h-8 w-8 bg-secondary-500 text-primary-950 font-bold flex items-center justify-center rounded-md shadow-lg">
          UP
        </div>
        {isExpanded && (
          <div className="ml-2">
            <h1 className="font-bold text-lg leading-none">Up Clube de</h1>
            <h2 className="text-sm font-medium leading-none">Negócios</h2>
          </div>
        )}
      </div>

      {/* Links */}
      <div className="flex-1 px-3 overflow-y-auto custom-scrollbar">
        <SidebarSection title="Geral" isExpanded={isExpanded}>
          <SidebarLink
            to="/"
            icon={<Home />}
            label="Dashboard"
            isActive={location.pathname === "/"}
            isExpanded={isExpanded}
          />
        </SidebarSection>

        <SidebarSection title="Negócios" isExpanded={isExpanded}>
          <SidebarLink
            to="/lojas"
            icon={<ShoppingBag />}
            label="Lojas Parceiras"
            isActive={location.pathname.startsWith("/lojas")}
            isExpanded={isExpanded}
          />
          <SidebarLink
            to="/prestadores"
            icon={<Users />}
            label="Profissionais Indicados"
            isActive={location.pathname.startsWith("/prestadores")}
            isExpanded={isExpanded}
          />
        </SidebarSection>

        <SidebarSection title="Conteúdo" isExpanded={isExpanded}>
          <SidebarLink
            to="/workshops"
            icon={<BookOpen />}
            label="Workshops & Cursos"
            isActive={location.pathname.startsWith("/workshops")}
            isExpanded={isExpanded}
          />
          <SidebarLink
            to="/eventos"
            icon={<Calendar />}
            label="Eventos"
            isActive={location.pathname.startsWith("/eventos")}
            isExpanded={isExpanded}
          />
        </SidebarSection>

        <SidebarSection title="Programa" isExpanded={isExpanded}>
          <SidebarLink
            to="/recompensas"
            icon={<Gift />}
            label="Recompensas"
            isActive={location.pathname.startsWith("/recompensas")}
            isExpanded={isExpanded}
          />
          <SidebarLink
            to="/doacoes"
            icon={<Landmark />}
            label="Mural de Doações"
            isActive={location.pathname.startsWith("/doacoes")}
            isExpanded={isExpanded}
          />
        </SidebarSection>

        <SidebarSection title="Perfil" isExpanded={isExpanded}>
          <SidebarLink
            to="/configuracoes"
            icon={<Settings />}
            label="Configurações"
            isActive={location.pathname.startsWith("/configuracoes")}
            isExpanded={isExpanded}
          />
        </SidebarSection>
      </div>

      {/* Rodapé com Perfil */}
      <div
        className={cn(
          "border-t border-primary-800 bg-primary-950 p-4 mt-auto",
          !isExpanded && "flex justify-center"
        )}
      >
        <div className={cn("flex items-center", !isExpanded && "flex-col")}>
          <div className="h-8 w-8 rounded-full bg-white text-primary-800 font-bold flex items-center justify-center shadow-lg">
            {user.name.charAt(0)}
          </div>
          {isExpanded && (
            <div className="ml-3">
              <p className="text-sm font-medium text-white">{user.name}</p>
              <p className="text-xs text-white/60">Nível {user.level}</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
