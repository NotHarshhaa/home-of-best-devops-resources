"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/footer-pattern.svg')] bg-repeat opacity-5"></div>

      <div className="container py-12 md:py-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-16 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:max-w-xs"
          >
            <div className="flex items-center gap-3 mb-4">
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
              <h3 className="text-xl font-heading font-bold gradient-text">
                DevOps Resources
              </h3>
            </div>
            <p className="text-muted-foreground font-body">
              Your Ultimate Collection of DevOps Learning Materials, Projects,
              and Tools for accelerating your DevOps journey.
            </p>
            <div className="flex gap-4 mt-6">
              <Button
                asChild
                variant="outline"
                size="icon"
                className="rounded-full border-primary/20 hover:border-primary/60 hover:bg-primary/5 transition-all"
              >
                <a
                  href="https://github.com/NotHarshhaa/home-of-best-devops-resources"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 transition-transform group-hover:scale-110"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="icon"
                className="rounded-full border-primary/20 hover:border-primary/60 hover:bg-primary/5 transition-all"
              >
                <a
                  href="https://twitter.com/NotHarshhaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 transition-transform group-hover:scale-110"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="icon"
                className="rounded-full border-primary/20 hover:border-primary/60 hover:bg-primary/5 transition-all"
              >
                <a
                  href="https://linkedin.com/in/NotHarshhaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 transition-transform group-hover:scale-110"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary">
                Quick Links
              </h4>
              <ul className="space-y-3 text-sm font-medium">
                <li>
                  <Link
                    href="/"
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300"></span>
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources"
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300"></span>
                    <span>Resources</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories"
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300"></span>
                    <span>Categories</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300"></span>
                    <span>About</span>
                  </Link>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-accent">
                Categories
              </h4>
              <ul className="space-y-3 text-sm font-medium">
                <li>
                  <Link
                    href="/categories/orchestration"
                    className="text-muted-foreground hover:text-accent transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 h-0.5 bg-accent group-hover:w-4 transition-all duration-300"></span>
                    <span>Orchestration</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories/ci-cd"
                    className="text-muted-foreground hover:text-accent transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 h-0.5 bg-accent group-hover:w-4 transition-all duration-300"></span>
                    <span>CI/CD</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories/infrastructure-as-code"
                    className="text-muted-foreground hover:text-accent transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 h-0.5 bg-accent group-hover:w-4 transition-all duration-300"></span>
                    <span>Infrastructure as Code</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories/monitoring"
                    className="text-muted-foreground hover:text-accent transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 h-0.5 bg-accent group-hover:w-4 transition-all duration-300"></span>
                    <span>Monitoring</span>
                  </Link>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="col-span-2 md:col-span-1"
            >
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary">
                Subscribe
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Stay updated with the latest DevOps resources and news.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button size="sm" className="h-10">
                  Subscribe
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground"
        >
          <p>
            © {currentYear} NotHarshhaa | Home of Best DevOps Resources. All
            rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
