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

export default function HomePage() {
  // Featured resources to display on home page
  const featuredResources = resourcesData.resources
    .filter((resource) => resource.featured)
    .slice(0, 6);

  const categories = resourcesData.categories.slice(0, 8);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-muted">
        <div className="container flex flex-col items-center justify-center space-y-4 py-24 text-center md:py-32">
          <div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Home of Best DevOps Resources
            </h1>
            <p className="mt-4 text-xl text-muted-foreground md:text-2xl">
              Your Ultimate Collection of DevOps Learning Materials, Projects,
              and Tools
            </p>
          </div>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button asChild size="lg">
              <Link href="/resources">Browse All Resources</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/categories">View Categories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Resources Section */}
      <section className="py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Featured Resources
            </h2>
            <p className="mt-4 text-muted-foreground">
              Hand-picked resources to accelerate your DevOps learning journey
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredResources.map((resource) => (
              <div key={resource.id}>
                <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
                  <CardHeader className="pb-0">
                    <div className="flex justify-between">
                      <Badge>{resource.category}</Badge>
                    </div>
                    <CardTitle className="mt-4 text-xl">
                      {resource.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {resource.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {resource.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                      {resource.tags.length > 3 && (
                        <Badge variant="outline">
                          +{resource.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button asChild variant="outline" size="sm">
                      <a
                        href={resource.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Website
                      </a>
                    </Button>
                    <Button asChild size="sm">
                      <Link href={`/resources/${resource.id}`}>Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild>
              <Link href="/resources">View All Resources</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-muted py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Browse by Category
            </h2>
            <p className="mt-4 text-muted-foreground">
              Find resources organized by different DevOps domains
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {categories.map((category) => (
              <div key={category}>
                <Link
                  href={`/categories/${category.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <Card className="transition-all hover:bg-primary/5">
                    <CardHeader>
                      <CardTitle className="text-center text-lg">
                        {category}
                      </CardTitle>
                    </CardHeader>
                    <CardFooter className="justify-center p-4 pt-0">
                      <Badge variant="secondary">
                        {
                          resourcesData.resources.filter(
                            (r) => r.category === category,
                          ).length
                        }{" "}
                        resources
                      </Badge>
                    </CardFooter>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container">
          <div className="rounded-lg bg-primary p-8 text-primary-foreground md:p-12">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Accelerate Your DevOps Journey
                </h2>
                <p className="mt-4 text-primary-foreground/90">
                  Explore our comprehensive collection of learning resources,
                  projects, and tools to boost your DevOps skills and career.
                </p>
              </div>
              <div className="flex items-center justify-center md:justify-end">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="font-bold"
                >
                  <a
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
                    Explore All Resources
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
