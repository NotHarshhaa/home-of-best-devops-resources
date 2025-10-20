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

export default function ResourcesPage() {
  const resources = resourcesData.resources;
  const categories = resourcesData.categories;
  const tags = resourcesData.tags.slice(0, 12);

  return (
    <div className="container py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          DevOps Resources
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Browse our curated collection of the best DevOps tools and resources
        </p>
      </div>

      <div className="mb-10 grid gap-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="sticky top-20 space-y-6">
            <div className="space-y-4">
              <h3 className="font-medium">Search</h3>
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
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
                  className="w-full rounded-md border border-input bg-transparent px-10 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Button variant="ghost" className="justify-start px-3">
                      {category === "all" ? "All Categories" : category}
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="cursor-pointer">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <Button variant="outline">Clear All Filters</Button>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing <span className="font-medium">{resources.length}</span>{" "}
              resources
            </p>
            <div className="flex items-center space-x-2">
              <p className="text-sm text-muted-foreground">Sort by:</p>
              <select
                className="rounded-md border border-input bg-transparent px-3 py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                defaultValue="alphabetical"
              >
                <option value="alphabetical">A-Z</option>
                <option value="featured">Featured</option>
                <option value="category">Category</option>
              </select>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <div key={resource.id}>
                <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
                  <CardHeader className="pb-2">
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
                  <CardContent className="mt-2">
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
        </div>
      </div>
    </div>
  );
}
