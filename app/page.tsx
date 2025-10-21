"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

import resourcesData from "@/data/resources.json";

// Function to map resource IDs to GitHub links
const getGithubLink = (id: string) => {
  const githubLinks: { [key: string]: string } = {
    "projects-hub": "https://github.com/NotHarshhaa/DevOps-Projects",
    "ultimate-docs": "https://gitlab.com/NotHarshhaa/docs-portal",
    "repositories-central":
      "https://github.com/NotHarshhaa/github-repo-status-tracker",
    "jobs-portal": "https://github.com/NotHarshhaa/jobs.prodevopsguytech.com",
    "devops-blog": "https://github.com/NotHarshhaa/prodevopsguy.hashnode.dev",
    "cloud-blog": "https://github.com/NotHarshhaa/prodevopsguy.hashnode.dev",
    "docker-to-kubernetes":
      "https://github.com/NotHarshhaa/From-Docker-to-Kubernetes",
    "devops-engineering-lab":
      "https://github.com/NotHarshhaa/DevOps-Engineering",
    "devops-tool-guides":
      "https://github.com/NotHarshhaa/devops-tools-setups-installations",
    "devops-cheatsheet": "https://github.com/NotHarshhaa/devops-cheatsheet",
    "devops-environment-toolkit":
      "https://github.com/NotHarshhaa/devops-environment-toolkit-beginners",
    "devops-tools-collection": "https://github.com/NotHarshhaa/devops-tools",
    "devops-monitoring-in-a-box":
      "https://github.com/NotHarshhaa/devops-monitoring-in-a-box",
    "awesome-devops-ui": "https://github.com/NotHarshhaa/awesome-devops-cloud",
    "k8s-learning":
      "https://github.com/NotHarshhaa/Certified_Kubernetes_Administrator",
    "kubernetes-dashboard":
      "https://github.com/NotHarshhaa/kubernetes-dashboard",
  };

  return githubLinks[id] || "https://github.com/NotHarshhaa";
};

export default function HomePage() {
  // Featured resources to display on home page
  const featuredResources = resourcesData.resources
    .filter((resource) => resource.featured)
    .slice(0, 6);

  const categories = resourcesData.categories.slice(0, 8);

  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);

  useEffect(() => {
    setIsVisible(true);

    // Add scroll to top button when scrolling down
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section with Parallax Effect */}
      <section
        ref={heroRef}
        className="relative overflow-hidden py-24 sm:py-28 md:py-36 min-h-[80vh] flex items-center"
      >
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 bg-gradient-to-b from-background to-muted"
        ></motion.div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-30"></div>

        {/* Background animated circles - optimized to prevent flickering */}
        <div className="absolute top-0 -left-4 w-40 sm:w-80 h-40 sm:h-80 bg-primary/20 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-40 sm:w-80 h-40 sm:h-80 bg-accent/20 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-20 w-40 sm:w-80 h-40 sm:h-80 bg-secondary/20 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '4s'}}></div>

        <div className="container relative flex flex-col items-center justify-center space-y-6 sm:space-y-10 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-heading text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl drop-shadow-sm">
              <span className="gradient-text inline-block transform transition-transform hover:scale-[1.02] duration-500">
                Home of Best DevOps Resources
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-5 sm:mt-8 max-w-3xl mx-auto text-base sm:text-xl text-muted-foreground md:text-2xl font-body leading-relaxed"
            >
              Your Ultimate Collection of DevOps Learning Materials, Projects,
              and Tools
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col space-y-3 sm:flex-row sm:space-x-5 sm:space-y-0 mt-6 sm:mt-8"
          >
            <Button
              asChild
              size="lg"
              className="px-6 sm:px-10 py-6 text-sm sm:text-base shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 rounded-xl group relative overflow-hidden"
            >
              <Link href="/resources">
                <span className="relative z-10">Browse All Resources</span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></span>
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-6 sm:px-10 py-6 text-sm sm:text-base border-primary/20 hover:border-primary/60 hover:bg-primary/5 transition-all rounded-xl hover:-translate-y-1"
            >
              <Link
                href="https://github.com/NotHarshhaa"
                className="flex items-center gap-2"
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
                  className="mr-1 h-4 w-4 group-hover:rotate-12 transition-transform"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                Visit GitHub
              </Link>
            </Button>
          </motion.div>

          {/* New Feature Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8 max-w-3xl mx-auto"
          >
            {["Kubernetes", "Docker", "AWS", "CI/CD", "IaC", "Monitoring"].map(
              (tag, i) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                  className="text-xs sm:text-sm bg-background/80 backdrop-blur-sm border border-border/40 rounded-full px-3 py-1 text-muted-foreground hover:border-primary/30 hover:text-primary transition-colors cursor-pointer hover:shadow-sm"
                >
                  {tag}
                </motion.div>
              ),
            )}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-xs text-muted-foreground mb-2">
            Scroll to explore
          </span>
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
            className="h-12 w-6 rounded-full border-2 border-border/40 flex justify-center"
          >
            <motion.div
              animate={{
                height: ["20%", "30%", "20%"],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
              className="w-1 bg-primary/60 rounded-full mt-1"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Resources Section with improved visuals */}
      <section className="py-16 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5"></div>
        <div className="absolute top-0 w-full h-24 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 sm:mb-20 text-center"
          >
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="relative inline-block">
                Featured Resources
                <motion.span
                  initial={{ width: "0%" }}
                  whileInView={{ width: "40%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="absolute -bottom-2 left-1/2 h-1.5 -translate-x-1/2 bg-gradient-to-r from-primary/60 to-accent/60 rounded-full"
                ></motion.span>
              </span>
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 sm:mt-8 text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Hand-picked resources to accelerate your DevOps learning journey
            </motion.p>
          </motion.div>

          <div className="grid gap-6 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="transition-all duration-300"
              >
                <Card className="h-full overflow-hidden border-border/60 bg-card rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 group">
                  <CardHeader className="pb-2 space-y-1 sm:space-y-2 p-5 sm:p-7">
                    <div className="flex justify-between items-center">
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-medium text-xs sm:text-sm px-3 py-1 rounded-full">
                        {resource.category}
                      </Badge>
                      <div className="h-8 w-8 flex items-center justify-center rounded-full bg-accent/10 text-accent">
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
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      </div>
                    </div>
                    <CardTitle className="mt-3 sm:mt-4 text-xl sm:text-2xl font-heading">
                      {resource.title}
                    </CardTitle>
                    <CardDescription className="font-body text-muted-foreground text-sm sm:text-base">
                      {resource.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-2 sm:mt-3 p-5 sm:p-7">
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {resource.tags.slice(0, 3).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-secondary/60 text-secondary-foreground hover:bg-secondary/80 transition-colors text-xs sm:text-sm px-3 py-1 rounded-full"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {resource.tags.length > 3 && (
                        <Badge
                          variant="outline"
                          className="border-primary/20 text-muted-foreground hover:border-primary/40 transition-colors text-xs sm:text-sm px-3 py-1 rounded-full"
                        >
                          +{resource.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between gap-3 sm:gap-4 pt-3 sm:pt-5 p-5 sm:p-7 border-t border-border/40 mt-2">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary/20 hover:border-primary/60 hover:bg-primary/5 transition-all text-xs sm:text-sm py-2 h-10 sm:h-11 rounded-lg"
                    >
                      <a
                        href={resource.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-200 inline-flex items-center">
                          Visit Website
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
                            className="ml-1.5 h-3 w-3 opacity-70 group-hover:translate-x-1 transition-transform duration-200"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" x2="21" y1="14" y2="3" />
                          </svg>
                        </span>
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className="flex-1 shadow-sm hover:shadow-md transition-all text-xs sm:text-sm py-2 h-10 sm:h-11 rounded-lg"
                    >
                      <a
                        href={getGithubLink(resource.id)}
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
                          className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-200"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                        GitHub Source
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 sm:mt-20 text-center"
          >
            <Button
              asChild
              size="lg"
              className="px-6 sm:px-10 py-6 text-sm sm:text-base shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 rounded-xl"
            >
              <Link href="/resources" className="flex items-center gap-2">
                <span>View All Resources</span>
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
                  className="ml-1 group-hover:translate-x-1 transition-transform duration-200"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 opacity-50"></div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="rounded-xl sm:rounded-2xl overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-90"></div>
            <div className="absolute inset-0 bg-[url('/cta-pattern.svg')] bg-cover opacity-10"></div>
            <div className="relative z-10 p-8 sm:p-12 text-primary-foreground md:p-16">
              <div className="grid gap-8 sm:gap-10 md:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h2 className="text-2xl font-heading font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Accelerate Your DevOps Journey
                  </h2>
                  <p className="mt-4 sm:mt-7 text-sm sm:text-xl text-primary-foreground/90 leading-relaxed">
                    Explore our comprehensive collection of learning resources,
                    projects, and tools to boost your DevOps skills and career.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex items-center justify-center md:justify-end"
                >
                  <Button
                    asChild
                    size="lg"
                    variant="secondary"
                    className="font-bold px-6 sm:px-10 py-6 text-sm sm:text-base shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 rounded-xl"
                  >
                    <a
                      href="https://github.com/NotHarshhaa/home-of-best-devops-resources"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center"
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
                        className="mr-3 transition-transform group-hover:scale-110 group-hover:rotate-12"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                      Explore All Resources
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating action button for navigation */}
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl flex items-center justify-center"
        >
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
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        </motion.button>
      )}
    </>
  );
}
