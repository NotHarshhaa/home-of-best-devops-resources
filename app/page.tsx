"use client";

import Link from "next/link";

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
import { motion } from "framer-motion";

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

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-muted"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

        {/* Background animated circles */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/30 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-accent/30 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-32 left-20 w-72 h-72 bg-secondary/30 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="container relative flex flex-col items-center justify-center space-y-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="gradient-text">
                Home of Best DevOps Resources
              </span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-muted-foreground md:text-2xl font-body">
              Your Ultimate Collection of DevOps Learning Materials, Projects,
              and Tools
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 mt-6"
          >
            <Button
              asChild
              size="lg"
              className="px-8 shadow-md hover:shadow-lg transition-all"
            >
              <Link href="/resources">Browse All Resources</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-8 border-primary/20 hover:border-primary/60 hover:bg-primary/5 transition-all"
            >
              <Link href="https://github.com/NotHarshhaa">Visit GitHub</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Resources Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              <span className="relative">
                Featured Resources
                <span className="absolute -bottom-2 left-1/2 h-1 w-1/3 -translate-x-1/2 bg-gradient-to-r from-primary/50 to-accent/50 rounded-full"></span>
              </span>
            </h2>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
              Hand-picked resources to accelerate your DevOps learning journey
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden card-hover-effect border-border/60 bg-card">
                  <CardHeader className="pb-2 space-y-2">
                    <div className="flex justify-between items-center">
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-medium">
                        {resource.category}
                      </Badge>
                    </div>
                    <CardTitle className="mt-3 text-xl font-heading">
                      {resource.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2 font-body text-muted-foreground">
                      {resource.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-2">
                    <div className="flex flex-wrap gap-2">
                      {resource.tags.slice(0, 3).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-secondary/60 text-secondary-foreground hover:bg-secondary/80 transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {resource.tags.length > 3 && (
                        <Badge
                          variant="outline"
                          className="border-primary/20 text-muted-foreground hover:border-primary/40 transition-colors"
                        >
                          +{resource.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between gap-3 pt-4">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary/20 hover:border-primary/60 hover:bg-primary/5 transition-all"
                    >
                      <a
                        href={resource.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Website
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className="flex-1 shadow-sm hover:shadow-md transition-all"
                    >
                      <a
                        href={getGithubLink(resource.id)}
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
                          className="mr-1"
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <Button
              asChild
              size="lg"
              className="px-8 shadow-md hover:shadow-lg transition-all"
            >
              <Link href="/resources">View All Resources</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-90"></div>
            <div className="absolute inset-0 bg-[url('/cta-pattern.svg')] bg-cover opacity-10"></div>
            <div className="relative z-10 p-10 text-primary-foreground md:p-14">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-4xl">
                    Accelerate Your DevOps Journey
                  </h2>
                  <p className="mt-6 text-xl text-primary-foreground/90">
                    Explore our comprehensive collection of learning resources,
                    projects, and tools to boost your DevOps skills and career.
                  </p>
                </div>
                <div className="flex items-center justify-center md:justify-end">
                  <Button
                    asChild
                    size="lg"
                    variant="secondary"
                    className="font-bold px-8 shadow-lg hover:shadow-xl transition-all"
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
                        className="mr-2 transition-transform group-hover:scale-110"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                      Explore All Resources
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
