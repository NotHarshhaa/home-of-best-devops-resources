"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

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

export default function CategoriesPage() {
  const { categories } = resourcesData;
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = searchQuery
    ? categories.filter((category) =>
        category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : categories;

  const getResourceCountByCategory = (category: string) => {
    return resourcesData.resources.filter(
      (resource) => resource.category === category
    ).length;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="container py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          DevOps Categories
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Browse resources by different DevOps domains
        </p>
      </div>

      <div className="mb-8">
        <div className="relative mx-auto max-w-md">
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
            placeholder="Search categories..."
            className="w-full rounded-md border border-input bg-transparent px-10 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category) => (
            <motion.div key={category} variants={itemVariants}>
              <Link
                href={`/categories/${category.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <Card className="h-full transition-all hover:shadow-lg">
                  <CardHeader>
                    <CardTitle>{category}</CardTitle>
                    <CardDescription>
                      Explore {category} tools and resources
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      {category} encompasses tools and practices that help in{" "}
                      {getCategoryDescription(category)}
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Badge variant="secondary">
                      {getResourceCountByCategory(category)} resources
                    </Badge>
                    <Button size="sm">Explore</Button>
                  </CardFooter>
                </Card>
              </Link>
            </motion.div>
          ))
        ) : (
          <div className="col-span-3 py-12 text-center">
            <h3 className="text-xl font-medium">No categories found</h3>
            <p className="mt-2 text-muted-foreground">
              Try adjusting your search criteria
            </p>
            <Button
              variant="outline"
              onClick={() => setSearchQuery("")}
              className="mt-4"
            >
              Clear Search
            </Button>
          </div>
        )}
      </motion.div>
    </div>
  );
}

function getCategoryDescription(category: string): string {
  const descriptions: Record<string, string> = {
    Orchestration:
      "managing complex systems, applications, and their dependencies across distributed environments",
    Containerization:
      "packaging applications and their dependencies in isolated environments for consistent deployment",
    "Infrastructure as Code":
      "managing and provisioning infrastructure through code instead of manual processes",
    "CI/CD":
      "automating the integration and deployment processes to deliver code changes more frequently and reliably",
    Monitoring:
      "observing system performance and availability to ensure optimal operation",
    Logging:
      "collecting, processing, and analyzing log data to troubleshoot issues and gain insights",
    Security:
      "protecting systems, networks, and data from unauthorized access and vulnerabilities",
    "Configuration Management":
      "maintaining consistent settings across multiple servers and environments",
    "Service Mesh":
      "managing service-to-service communication in a microservices architecture",
  };

  return descriptions[category] || "improving development and operations workflows";
}
