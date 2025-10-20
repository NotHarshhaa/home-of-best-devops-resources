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

export default function ResourcesPage() {
  const resources = resourcesData.resources;
  const categories = resourcesData.categories;
  const tags = resourcesData.tags.slice(0, 12);

  return (
    <div className="container py-8 sm:py-16">
      <div className="mb-8 sm:mb-16 text-center">
        <h1 className="text-3xl font-bold tracking-tight font-heading sm:text-5xl">
          <span className="gradient-text">DevOps Resources</span>
        </h1>
        <p className="mt-3 sm:mt-6 text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto font-body">
          Browse our curated collection of the best DevOps tools and resources
        </p>
      </div>

      <div className="mb-6 sm:mb-10 grid gap-6 sm:gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="sticky top-20 space-y-4 sm:space-y-8">
            <div className="space-y-4">
              <h3 className="font-medium text-base sm:text-lg">Search</h3>
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="search"
                  placeholder="Search resources..."
                  className="w-full rounded-md border border-input bg-transparent px-10 py-2 sm:py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring shadow-sm"
                />
              </div>
            </div>

            <div className="space-y-5">
              <h3 className="font-medium text-base sm:text-lg">Categories</h3>
              <div className="space-y-1 bg-muted/50 rounded-lg p-2">
                {categories.map((category) => (
                  <div key={category} className="flex items-center">
                    <Button
                      variant="ghost"
                      className="justify-start w-full text-muted-foreground hover:text-primary hover:bg-muted/80 rounded-md px-3 py-1.5 sm:px-4 sm:py-2 transition-colors text-sm"
                    >
                      {category === "all" ? "All Categories" : category}
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <h3 className="font-medium text-base sm:text-lg">Popular Tags</h3>
              <div className="flex flex-wrap gap-1 sm:gap-2 bg-muted/50 rounded-lg p-2 sm:p-4">
                {tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="cursor-pointer bg-background px-2 py-0.5 sm:px-3 sm:py-1 hover:bg-primary/5 hover:border-primary/30 transition-colors text-xs sm:text-sm"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full bg-background hover:bg-primary/5 border-primary/20 hover:border-primary/50 transition-colors text-xs sm:text-sm py-1 sm:py-2"
            >
              Clear All Filters
            </Button>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="mb-4 sm:mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 bg-muted/30 p-3 sm:p-4 rounded-lg">
            <p className="text-sm sm:text-md text-muted-foreground">
              Showing{" "}
              <span className="font-medium text-foreground">
                {resources.length}
              </span>{" "}
              resources
            </p>
            <div className="flex items-center gap-3">
              <p className="text-xs sm:text-sm text-muted-foreground">
                Sort by:
              </p>
              <select
                className="rounded-md border border-input bg-background px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring shadow-sm"
                defaultValue="alphabetical"
              >
                <option value="alphabetical">A-Z</option>
                <option value="featured">Featured</option>
                <option value="category">Category</option>
              </select>
            </div>
          </div>

          <div className="grid gap-4 sm:gap-8 sm:grid-cols-1 lg:grid-cols-2">
            {resources.map((resource) => (
              <div key={resource.id}>
                <Card className="h-full overflow-hidden card-hover-effect border-border/60 bg-card shadow-sm">
                  <CardHeader className="pb-2 pt-4 px-4 sm:pb-4 sm:pt-6 sm:px-6">
                    <div className="flex justify-between">
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-medium px-2 py-0.5 sm:px-3 sm:py-1 text-xs sm:text-sm">
                        {resource.category}
                      </Badge>
                    </div>
                    <CardTitle className="mt-3 sm:mt-5 text-lg sm:text-xl font-heading">
                      {resource.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2 font-body text-muted-foreground mt-1 sm:mt-2 text-xs sm:text-sm">
                      {resource.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-4 sm:px-6">
                    <div className="flex flex-wrap gap-2">
                      {resource.tags.slice(0, 3).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-secondary/60 text-secondary-foreground hover:bg-secondary/80 transition-colors text-xs sm:text-sm px-2 py-0.5 sm:px-3 sm:py-1"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {resource.tags.length > 3 && (
                        <Badge
                          variant="outline"
                          className="border-primary/20 text-muted-foreground hover:border-primary/40 transition-colors text-xs sm:text-sm px-2 py-0.5 sm:px-3 sm:py-1"
                        >
                          +{resource.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between gap-2 sm:gap-4 px-4 py-3 sm:px-6 sm:py-6 border-t border-border/20">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary/20 hover:border-primary/60 hover:bg-primary/5 transition-all text-xs sm:text-sm h-8 sm:h-9"
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
                      className="flex-1 shadow-sm hover:shadow-md transition-all text-xs sm:text-sm h-8 sm:h-9"
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
                          className="mr-1 h-3 w-3 sm:h-4 sm:w-4"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                        GitHub Source
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
