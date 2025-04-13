
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Coffee, MapPin, User, Home } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-20 bg-card shadow-md md:relative md:shadow-none">
      {/* Mobile Bottom Navigation */}
      <div className="flex items-center justify-around p-2 md:hidden">
        <NavItem 
          to="/" 
          active={location.pathname === "/"} 
          icon={<Home size={24} />} 
          label="Home" 
        />
        <NavItem 
          to="/cafes" 
          active={location.pathname.includes("/cafes")} 
          icon={<MapPin size={24} />} 
          label="Cafés" 
        />
        <NavItem 
          to="/loyalty-pass" 
          active={location.pathname === "/loyalty-pass"} 
          icon={<Coffee size={24} />} 
          label="Pass" 
        />
        <NavItem 
          to="/profile" 
          active={location.pathname === "/profile"} 
          icon={<User size={24} />} 
          label="Profile" 
        />
      </div>

      {/* Desktop Top Navigation */}
      <div className="hidden md:flex md:items-center md:justify-between md:px-8 md:py-4">
        <div className="flex items-center gap-2">
          <Coffee className="h-6 w-6 text-coffee-dark" />
          <span className="text-xl font-bold text-coffee-dark">CaféPass</span>
        </div>

        <div className="relative">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="block lg:hidden"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className={`lg:flex ${isOpen ? 'block absolute right-0 top-10 bg-card shadow-md rounded-lg p-4' : 'hidden'} items-center gap-8`}>
            <DesktopNavItem to="/" active={location.pathname === "/"} label="Home" />
            <DesktopNavItem to="/cafes" active={location.pathname.includes("/cafes")} label="Café Directory" />
            <DesktopNavItem to="/loyalty-pass" active={location.pathname === "/loyalty-pass"} label="Loyalty Pass" />
            <DesktopNavItem to="/profile" active={location.pathname === "/profile"} label="Profile" />
            <Button className="bg-coffee-accent hover:bg-coffee-darker text-white">Sign In</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ to, active, icon, label }: { to: string; active: boolean; icon: React.ReactNode; label: string }) => (
  <Link to={to} className={`flex flex-col items-center p-2 ${active ? 'text-coffee-dark font-medium' : 'text-muted-foreground'}`}>
    <div className={`${active ? 'text-coffee-dark' : 'text-muted-foreground'}`}>
      {icon}
    </div>
    <span className="text-xs mt-1">{label}</span>
  </Link>
);

const DesktopNavItem = ({ to, active, label }: { to: string; active: boolean; label: string }) => (
  <Link to={to} className={`${active ? 'text-coffee-dark font-medium' : 'text-muted-foreground hover:text-coffee-dark'} transition-colors`}>
    {label}
  </Link>
);

export default Navbar;
