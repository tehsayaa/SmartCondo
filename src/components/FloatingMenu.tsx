import { useState } from "react";
import { Menu, X } from "lucide-react";

const FloatingMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Trang chủ", href: "#hero" },
    { label: "Tính năng", href: "#features" },
    { label: "Sản phẩm", href: "#products" },
    { label: "Tin tức", href: "#trust" },
    { label: "Liên hệ", href: "#contact" },
  ];

  const handleItemClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-6">
      <div className="bg-card/90 backdrop-blur-md border border-border/50 rounded-2xl shadow-lg px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">S</span>
            </div>
            <span className="font-semibold text-foreground text-lg">SmartHome</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleItemClick(item.href)}
                className="text-muted-foreground hover:text-foreground font-medium transition-colors duration-300 relative group"
              >
                {item.label}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <button 
              onClick={() => handleItemClick("#contact")}
              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:scale-105 transition-transform duration-300"
            >
              Tư vấn ngay
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors duration-300"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 mt-4 pt-4 border-t border-border/50" : "max-h-0"
          }`}
        >
          <div className="flex flex-col space-y-3">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleItemClick(item.href)}
                className="text-left text-muted-foreground hover:text-foreground font-medium py-2 transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => handleItemClick("#contact")}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium mt-4 text-center transition-transform duration-300 hover:scale-105"
            >
              Tư vấn ngay
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default FloatingMenu;