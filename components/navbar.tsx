"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/theme-toggle";
import { motion, AnimatePresence } from "framer-motion";

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
          setScrolled(prev => prev !== shouldScroll ? shouldScroll : prev);
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
    { href: "/", label: "Home", icon: "🏠" },
    { href: "/resources", label: "Resources", icon: "📚" },
    { href: "/about", label: "About", icon: "ℹ️" },
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
                DevOps
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
            className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full transition-all hover:bg-primary/10 md:hidden border border-border/40 hover:border-primary/30 hover:shadow-sm"
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
                  open: { rotate: 45, y: 8 },
                  closed: { rotate: 0, y: 0 },
                }}
                transition={{ duration: 0.3 }}
                className="absolute bg-current rounded h-[2px] w-5 sm:w-6 transform origin-center"
                style={{ top: "25%" }}
              />
              <motion.span
                variants={{
                  open: { opacity: 0 },
                  closed: { opacity: 1 },
                }}
                transition={{ duration: 0.3 }}
                className="absolute bg-current rounded h-[2px] w-5 sm:w-6 transform origin-center"
                style={{ top: "50%" }}
              />
              <motion.span
                variants={{
                  open: { rotate: -45, y: -8 },
                  closed: { rotate: 0, y: 0 },
                }}
                transition={{ duration: 0.3 }}
                className="absolute bg-current rounded h-[2px] w-5 sm:w-6 transform origin-center"
                style={{ top: "75%" }}
              />
            </motion.div>
          </motion.button>

          <ThemeToggle />
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-border/50 bg-gradient-to-b from-background to-muted/30"
          >
            <motion.div
              className="container py-6 flex flex-col space-y-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
              }}
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg
                      ${
                        activeLink === link.href
                          ? "bg-primary/10 text-primary font-medium shadow-sm"
                          : "hover:bg-primary/5 text-foreground/80 hover:text-primary"
                      }
                      transition-all duration-200 text-sm`}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setActiveLink(link.href);
                    }}
                  >
                    <span className="text-lg">{link.icon}</span>
                    <span>{link.label}</span>
                    {activeLink === link.href && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="ml-auto h-1.5 w-1.5 rounded-full bg-primary"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div className="h-px w-full bg-gradient-to-r from-border/5 via-border/40 to-border/5 my-2"></div>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="mt-2 w-full justify-start text-xs sm:text-sm h-10 rounded-lg border-primary/20 hover:border-primary/60"
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
                      className="mr-3 h-4 w-4"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    <span>View Project on GitHub</span>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
