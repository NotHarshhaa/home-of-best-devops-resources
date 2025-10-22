"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/theme-toggle";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Book, Info } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  // Handle scroll effect with throttling for better performance
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      lastScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const shouldScroll = lastScrollY > 50;
          setScrolled((prev) => (prev !== shouldScroll ? shouldScroll : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Set active link based on current pathname
  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  const navLinks = [
    { href: "/", label: "Home", icon: "Home" },
    { href: "/resources", label: "Resources", icon: "Book" },
    { href: "/about", label: "About", icon: "Info" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 shadow-md"
          : "bg-background/70 backdrop-blur-sm supports-[backdrop-filter]:bg-background/50"
      }`}
    >
      {/* Progress bar at top of header - appears only when scrolled */}
      {scrolled && (
        <div className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-primary via-accent to-primary w-full opacity-80"></div>
      )}
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="group flex items-center space-x-2 transition-all"
            aria-label="Home of Best DevOps Resources"
          >
            <div className="relative overflow-hidden rounded-full">
              <img
                src="/logo.svg"
                alt="DevOps Resources Logo"
                className="h-8 w-8 sm:h-9 sm:w-9 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 filter drop-shadow-sm"
              />
            </div>
            <div className="flex flex-col">
              <span className="hidden text-base sm:text-lg font-bold tracking-tight hover:text-primary/90 sm:inline-block transition-colors duration-200">
                Home of Best DevOps Resources
              </span>
              <span className="font-bold text-base tracking-tight sm:hidden">
                Home of Best DevOps Resources
              </span>
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-xs sm:text-sm font-medium transition-all duration-200 hover:text-primary
                after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300
                ${activeLink === link.href ? "text-primary font-semibold after:w-full" : "after:w-0 hover:after:w-full"}
                group`}
              onClick={() => setActiveLink(link.href)}
            >
              <span className="group-hover:translate-y-[-2px] transition-transform duration-200 inline-block">
                {link.label}
              </span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            asChild
            className="hidden border-primary/20 md:flex hover:border-primary/60 hover:bg-primary/5 transition-all"
          >
            <Link
              href="https://github.com/NotHarshhaa/home-of-best-devops-resources"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 transition-transform group-hover:scale-110 h-4 w-4 sm:h-5 sm:w-5"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              GitHub
            </Link>
          </Button>

          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="grid place-items-center h-8 w-8 sm:h-10 sm:w-10 rounded-full transition-all hover:bg-primary/10 md:hidden border border-border/40 hover:border-primary/30 hover:shadow-sm"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={mobileMenuOpen ? "open" : "closed"}
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 },
              }}
              transition={{ duration: 0.3 }}
              className="relative w-5 h-5 sm:w-6 sm:h-6"
            >
              <motion.span
                variants={{
                  open: { rotate: 45, y: 7 },
                  closed: { rotate: 0, y: 0 },
                }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 bg-current rounded h-[2px] w-5 sm:w-6 transform origin-center"
                style={{ top: "25%" }}
              />
              <motion.span
                variants={{
                  open: { opacity: 0 },
                  closed: { opacity: 1 },
                }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 bg-current rounded h-[2px] w-5 sm:w-6 transform origin-center"
                style={{ top: "50%" }}
              />
              <motion.span
                variants={{
                  open: { rotate: -45, y: -7 },
                  closed: { rotate: 0, y: 0 },
                }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 bg-current rounded h-[2px] w-5 sm:w-6 transform origin-center"
                style={{ top: "75%" }}
              />
            </motion.div>
          </motion.button>

          <ThemeToggle />
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence mode="wait">
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 right-0 h-screen w-[85%] max-w-[300px] z-50 md:hidden bg-background/95 backdrop-blur-md shadow-lg"
          >
             <div className="flex items-center justify-between p-4 border-b">
               <div className="flex items-center gap-2">
                 <img
                   src="/logo.svg"
                   alt="DevOps Resources Logo"
                   className="h-8 w-8"
                 />
                 <span className="font-bold text-sm leading-tight">Home of Best DevOps Resources</span>
               </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                >
                  <path
                    d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Button>
            </div>

            <div className="py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center px-4 py-3
                    ${
                      activeLink === link.href
                        ? "text-primary font-medium"
                        : "text-foreground/80"
                    }
                    transition-all duration-200 text-sm`}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setActiveLink(link.href);
                  }}
                >
                  <span className="w-8 flex items-center justify-center">
                    {link.icon === "Home" && <Home className="h-4 w-4" />}
                    {link.icon === "Book" && <Book className="h-4 w-4" />}
                    {link.icon === "Info" && <Info className="h-4 w-4" />}
                  </span>
                  <span>{link.label}</span>
                  {activeLink === link.href && (
                    <div className="ml-auto h-2 w-2 rounded-full bg-primary" />
                  )}
                </Link>
              ))}

              <div className="px-4 mt-4 pt-4 border-t border-border/30">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="w-full justify-center text-xs h-10 rounded-md"
                >
                  <Link
                    href="https://github.com/NotHarshhaa/home-of-best-devops-resources"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    View Project on GitHub
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

       {/* Overlay for mobile menu */}
       <AnimatePresence>
         {mobileMenuOpen && (
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             transition={{ duration: 0.15 }}
             className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
             onClick={() => setMobileMenuOpen(false)}
           />
         )}
       </AnimatePresence>
    </header>
  );
};

export default Navbar;
