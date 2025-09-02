import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Heart, Users, ChefHat, BarChart3, User } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: Heart },
    { name: "Donate Food", path: "/donate", icon: Heart },
    { name: "Find Food", path: "/find-food", icon: Users },
    { name: "Recipe Finder", path: "/recipes", icon: ChefHat },
    { name: "Impact", path: "/impact", icon: BarChart3 },
  ];

  const authItems = [
    { name: "Login", path: "/login" },
    { name: "Register", path: "/register" },
  ];

  const NavLink = ({ item, mobile = false }: { item: any; mobile?: boolean }) => (
    <Link
      to={item.path}
      className={`${
        mobile 
          ? "flex items-center gap-3 px-4 py-2 text-lg font-medium rounded-lg hover:bg-accent transition-colors" 
          : "text-sm font-medium transition-colors hover:text-primary"
      } ${
        location.pathname === item.path 
          ? mobile 
            ? "bg-accent text-accent-foreground" 
            : "text-primary" 
          : mobile 
            ? "text-foreground" 
            : "text-muted-foreground"
      }`}
      onClick={mobile ? () => setIsOpen(false) : undefined}
    >
      {mobile && <item.icon className="w-5 h-5" />}
      {item.name}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Heart className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
            ZeroHunger
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink key={item.path} item={item} />
          ))}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {authItems.map((item) => (
            <Button
              key={item.path}
              variant={item.name === "Register" ? "default" : "outline"}
              asChild
            >
              <Link to={item.path}>{item.name}</Link>
            </Button>
          ))}
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">ZeroHunger</span>
            </div>
            
            <nav className="flex flex-col gap-2 mb-8">
              {navItems.map((item) => (
                <NavLink key={item.path} item={item} mobile />
              ))}
            </nav>

            <div className="flex flex-col gap-2">
              {authItems.map((item) => (
                <Button
                  key={item.path}
                  variant={item.name === "Register" ? "default" : "outline"}
                  asChild
                  className="w-full"
                >
                  <Link to={item.path} onClick={() => setIsOpen(false)}>
                    {item.name}
                  </Link>
                </Button>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navigation;