import { NavLink } from 'react-router-dom';
import { User, Settings, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const sidebarLinks = [
    { to: '/profile', label: 'Profile', icon: User },
    { to: '/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-sidebar text-sidebar-foreground transform transition-transform duration-300 ease-in-out z-50 border-r border-sidebar-border",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "lg:translate-x-0 lg:static lg:z-auto"
        )}
      >
        <div className="p-4">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-sidebar-foreground mb-4">
              Navigation
            </h2>
            
            {sidebarLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => window.innerWidth < 1024 && onClose()}
                className={({ isActive }) =>
                  cn(
                    "flex items-center justify-between px-3 py-2 rounded-lg transition-colors duration-200 group",
                    isActive
                      ? "bg-sidebar-primary text-sidebar-primary-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <div className="flex items-center space-x-3">
                      <link.icon className="h-5 w-5" />
                      <span className="font-medium">{link.label}</span>
                    </div>
                    <ChevronRight className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      isActive ? "rotate-90" : "group-hover:translate-x-1"
                    )} />
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;