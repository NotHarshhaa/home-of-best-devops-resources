import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import resourcesData from "@/data/resources.json";

export const dynamicParams = true;

export async function generateStaticParams() {
  return resourcesData.resources.map((resource) => ({ id: resource.id }));
}

export default async function ResourcePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const resource = resourcesData.resources.find((r) => r.id === id);

  if (!resource) {
    notFound();
  }

  const relatedResources = resourcesData.resources
    .filter(
      (r) =>
        r.id !== id &&
        (r.category === resource.category ||
          r.tags.some((tag) => resource.tags.includes(tag))),
    )
    .slice(0, 3);

  return (
    <div className="container py-12">
      <div className="mb-8">
        <Link
          href="/resources"
          className="mb-4 inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-primary"
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
            className="mr-2 h-4 w-4"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to Resources
        </Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-6">
            <Badge className="mb-2">{resource.category}</Badge>
            <h1 className="text-3xl font-bold tracking-tight">
              {resource.title}
            </h1>
          </div>

          <div className="mb-8">
            <p className="text-lg text-muted-foreground">
              {resource.description}
            </p>
          </div>

          <div className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {resource.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mb-8 space-y-4">
            <h2 className="mb-4 text-xl font-semibold">Overview</h2>
            <div className="rounded-lg border p-6">
              <h3 className="mb-2 text-lg font-medium">
                What is {resource.title}?
              </h3>
              <p>{resource.description}</p>

              <h3 className="mb-2 mt-6 text-lg font-medium">Key Features</h3>
              <ul className="ml-6 list-disc space-y-2">
                <li>Feature-rich platform for DevOps teams</li>
                <li>Seamless integration with popular tools</li>
                <li>Active community and regular updates</li>
                <li>Comprehensive documentation and learning resources</li>
                <li>Open-source and enterprise options available</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Related Resources</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedResources.map((relatedResource) => (
                <div key={relatedResource.id}>
                  <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
                    <CardHeader className="pb-2">
                      <div className="flex justify-end">
                        <Badge variant="outline">
                          {relatedResource.category}
                        </Badge>
                      </div>
                      <CardTitle className="mt-2 text-base">
                        {relatedResource.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pb-4 pt-0">
                      <CardDescription className="line-clamp-2">
                        {relatedResource.description}
                      </CardDescription>
                    </CardContent>
                    <div className="px-6 pb-4">
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="w-full"
                      >
                        <Link href={`/resources/${relatedResource.id}`}>
                          View Resource
                        </Link>
                      </Button>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="sticky top-20 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Resource Links</CardTitle>
                <CardDescription>
                  Access official websites and resources
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Official Website</h4>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start"
                  >
                    <a
                      href={resource.links.website}
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
                        className="mr-2 h-4 w-4"
                      >
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                      </svg>
                      Visit Website
                    </a>
                  </Button>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Documentation</h4>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start"
                  >
                    <a
                      href={resource.links.documentation}
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
                        className="mr-2 h-4 w-4"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </svg>
                      Documentation
                    </a>
                  </Button>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Source Code</h4>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start"
                  >
                    <a
                      href={resource.links.github}
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
                        className="mr-2 h-4 w-4"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                      GitHub Repository
                    </a>
                  </Button>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Tutorials</h4>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start"
                  >
                    <a
                      href={resource.links.tutorial}
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
                        className="mr-2 h-4 w-4"
                      >
                        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                      </svg>
                      View Tutorials
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Category</CardTitle>
              </CardHeader>
              <CardContent>
                <Link
                  href={`/categories/${resource.category.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <Button variant="secondary" className="w-full justify-start">
                    {resource.category}
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
                      className="ml-2 h-4 w-4"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
