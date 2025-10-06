import { Phone, Mail, Clock, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/#home", label: "HOME" },
    { href: "/#about", label: "ABOUT" },
    { href: "/#services", label: "SERVICES" },
    { href: "/blog", label: "BLOG" },
    { href: "/#team", label: "TEAM" },
    { href: "/#faq", label: "FAQ" },
    { href: "/#contact", label: "CONTACT" },
  ];

  return (
    <header className="w-full overflow-x-hidden">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "py-2 md:py-3" 
            : "py-0"
        }`}
      >
        <div 
          className={`transition-all duration-300 mt-1 ${
            isScrolled 
              ? "container mx-auto px-3 sm:px-4 md:px-4 md:max-w-6xl" 
              : "w-full px-0"
          }`}
        >
          <div 
            className={`bg-white shadow-elegant transition-all duration-300 ${
              isScrolled 
                ? "rounded-full px-4 md:px-6 py-2 md:py-3" 
                : "rounded-none px-4 sm:px-6 md:px-8 lg:px-12 py-3 md:py-4"
            }`}
          >
            <div className="flex justify-between items-center gap-2 md:gap-4">
              {/* Logo */}
              <h1 className={`font-bold text-secondary transition-all duration-300 whitespace-nowrap ${
                isScrolled ? "text-sm sm:text-base md:text-xl" : "text-base sm:text-xl md:text-2xl"
              }`}>
                New Star Construction
              </h1>

              {/* Desktop Navigation */}
              <nav aria-label="Main Navigation">
                <ul className="hidden lg:flex gap-6 items-center">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a 
                        href={link.href} 
                        className="text-foreground hover:text-primary transition-colors font-medium text-sm"
                        aria-label={`Navigate to ${link.label.toLowerCase()} section`}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                  <li>
                    <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full shadow-md" aria-label="Request a construction quote">
                      Get A Quote
                    </Button>
                  </li>
                </ul>
              </nav>

              {/* Mobile Menu Button */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="ghost" size="icon" className="text-secondary h-8 w-8 md:h-10 md:w-10" aria-label="Open navigation menu">
                    <Menu className="h-5 w-5 md:h-6 md:w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col gap-6 mt-8" aria-label="Mobile Navigation">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                        aria-label={`Navigate to ${link.label.toLowerCase()} section`}
                      >
                        {link.label}
                      </a>
                    ))}
                    <Button 
                      className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full shadow-md w-full mt-4"
                      onClick={() => setIsMobileMenuOpen(false)}
                      aria-label="Request a construction quote"
                    >
                      Get A Quote
                    </Button>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
      {/* Spacer to prevent content jump */}
      <div className={isScrolled ? "h-14 md:h-20" : "h-16 md:h-24"}></div>
    </header>
  );
};

export default Header;