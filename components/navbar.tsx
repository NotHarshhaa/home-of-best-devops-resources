"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/theme-toggle";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center space-x-2"
            aria-label="Home of Best DevOps Resources"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8 text-primary"
              >
                <path d="M22 12.999V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.001" />
                <path d="M4 9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3" />
                <path d="m8 4 4-2 4 2" />
                <path d="M16 18h.01" />
                <path d="M12 16v-4" />
                <path d="M15 12h-6" />
              </svg>
            </div>
            <span className="hidden font-bold sm:inline-block">
              Home of Best DevOps Resources
            </span>
            <span className="font-bold sm:hidden">DevOps Resources</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="/resources"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Resources
          </Link>
          <Link
            href="/categories"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Categories
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            About
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            asChild
            className="hidden md:flex"
          >
            <Link
              href="https://github.com/prodevopsguy/home-of-best-devops-resources"
              target="_blank"
              rel="noopener noreferrer"
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
                className="mr-2"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              GitHub
            </Link>
          </Button>

          <div className="flex h-10 w-10 items-center justify-center rounded-md md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <span className="sr-only">Menu</span>
          </div>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
