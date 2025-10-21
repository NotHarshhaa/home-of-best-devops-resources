"use client";

import React from "react";
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

export default function AboutPage() {
  const contributorVariants = {
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
          About This Project
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Learn about our mission and the people behind the Home of Best DevOps
          Resources
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4 text-2xl font-bold">Our Mission</h2>
          <p className="mb-4 leading-relaxed">
            The Home of Best DevOps Resources project was created with a simple
            yet powerful mission: to curate and showcase the very best tools,
            resources, guides, and practices in the DevOps ecosystem.
          </p>
          <p className="mb-4 leading-relaxed">
            In the rapidly evolving world of DevOps, it can be challenging to
            keep track of all the tools and resources available. Our goal is to
            provide a central hub where DevOps professionals, developers, system
            administrators, and anyone interested in the field can discover
            high-quality resources that have been vetted by the community.
          </p>
          <p className="leading-relaxed">
            We believe in the power of knowledge sharing and the open-source
            philosophy. All of our content is freely available, and we encourage
            contributions from the community to help maintain and expand our
            collection of resources.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="mb-4 text-2xl font-bold">What We Offer</h2>
          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <div className="flex items-start space-x-3">
                <div className="mt-0.5 rounded-full bg-primary p-1.5 text-primary-foreground">
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
                    className="h-4 w-4"
                  >
                    <path d="m9 11 3 3L22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Curated Resources</h3>
                  <p className="text-muted-foreground">
                    Hand-picked tools and resources that have been vetted for
                    quality and usefulness.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border p-4">
              <div className="flex items-start space-x-3">
                <div className="mt-0.5 rounded-full bg-primary p-1.5 text-primary-foreground">
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
                    className="h-4 w-4"
                  >
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Organized Categories</h3>
                  <p className="text-muted-foreground">
                    Resources organized by different DevOps domains for easy
                    discovery.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border p-4">
              <div className="flex items-start space-x-3">
                <div className="mt-0.5 rounded-full bg-primary p-1.5 text-primary-foreground">
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
                    className="h-4 w-4"
                  >
                    <circle cx="18" cy="18" r="3" />
                    <circle cx="6" cy="6" r="3" />
                    <path d="M6 21V9a9 9 0 0 0 9 9" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Open Source</h3>
                  <p className="text-muted-foreground">
                    Community-driven project with code available on GitHub for
                    contributions.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border p-4">
              <div className="flex items-start space-x-3">
                <div className="mt-0.5 rounded-full bg-primary p-1.5 text-primary-foreground">
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
                    className="h-4 w-4"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <path d="M16 13H8" />
                    <path d="M16 17H8" />
                    <path d="M10 9H8" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Detailed Information</h3>
                  <p className="text-muted-foreground">
                    Comprehensive details about each resource, including links
                    to documentation and source code.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-16">
        <h2 className="mb-8 text-center text-2xl font-bold">
          How to Contribute
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-5 w-5 text-primary"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                Fork the Repository
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Start by forking our GitHub repository. This creates a copy of
                the project that you can modify without affecting the original.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <a
                  href="https://github.com/NotHarshhaa/home-of-best-devops-resources"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go to GitHub
                </a>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-5 w-5 text-primary"
                >
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
                Add or Update Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Modify the resources.json file to add new resources or update
                existing ones with better information or links.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <a
                  href="https://github.com/NotHarshhaa/home-of-best-devops-resources/blob/main/data/resources.json"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View resources.json
                </a>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-5 w-5 text-primary"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                Submit a Pull Request
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Once you've made your changes, submit a pull request. Our team
                will review it and merge it into the main project if it meets
                our quality standards.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <a
                  href="https://github.com/NotHarshhaa/home-of-best-devops-resources/pulls"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Pull Requests
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="mb-8 text-center text-2xl font-bold">Project Author</h2>
        <motion.div
          variants={contributorVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.div variants={itemVariants}>
            <Card className="max-w-md mx-auto">
              <CardHeader className="pb-2 text-center">
                <div className="mx-auto h-32 w-32 overflow-hidden rounded-full border-4 border-primary/20">
                  <img
                    src="https://github.com/NotHarshhaa.png"
                    alt="Harshhaa"
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardTitle className="mt-4 text-xl">H A R S H H A A</CardTitle>
                <CardDescription className="mt-1 font-medium">
                  𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻𝘁 𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 𝗮𝗻𝗱 𝗮𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗼𝗻 𝗲𝗻𝘁𝗵𝘂𝘀𝗶𝗮𝘀𝘁 | 𝗖𝗹𝗼𝘂𝗱 𝗮𝗻𝗱
                  𝗗𝗲𝘃𝗼𝗽𝘀 𝗲𝗻𝗴𝗶𝗻𝗲𝗲𝗿
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-4">
                  Creator and maintainer of Home of Best DevOps Resources.
                  Passionate about DevOps, cloud technologies, and helping
                  others learn.
                </p>
                <div className="flex justify-center space-x-3">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href="https://github.com/NotHarshhaa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
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
                        className="mr-1 h-4 w-4"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href="https://linkedin.com/in/harshhaa-vardhan-reddy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="mr-1 h-4 w-4"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </svg>
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
