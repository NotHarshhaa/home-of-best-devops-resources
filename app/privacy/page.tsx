"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl">Overview</CardTitle>
            <CardDescription>
              Understanding how we handle your information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Welcome to the Home of Best DevOps Resources. This Privacy Policy
              is designed to help you understand how we collect, use, and
              safeguard your information when you visit our website.
            </p>
            <p>
              We are committed to protecting your privacy and ensuring
              transparency in our data practices. By accessing or using our
              services, you consent to the collection, use, and disclosure of
              information as described in this policy.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl">Information We Collect</CardTitle>
            <CardDescription>
              Types of data collected through our website
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <h3 className="font-medium text-lg">Personal Information</h3>
            <p>
              We may collect personal information that you voluntarily provide to
              us when you:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Submit contributions to our resources</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact us through forms or email</li>
              <li>Create an account (if this feature is available)</li>
            </ul>

            <h3 className="font-medium text-lg mt-6">Usage Information</h3>
            <p>
              We automatically collect certain information about your device and
              how you interact with our website, including:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Pages you visit and features you use</li>
              <li>Time spent on pages and navigation patterns</li>
              <li>Referral sources and exit pages</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl">How We Use Your Information</CardTitle>
            <CardDescription>
              Purposes for which we process your data
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Provide and improve our services</span>
                <p className="mt-1">
                  We use your information to operate, maintain, and enhance the
                  functionality of our website and resources.
                </p>
              </li>
              <li>
                <span className="font-medium">Personalize your experience</span>
                <p className="mt-1">
                  We may use your information to understand how you use our site
                  and to tailor content to your interests.
                </p>
              </li>
              <li>
                <span className="font-medium">Communicate with you</span>
                <p className="mt-1">
                  We may use your contact information to respond to your
                  inquiries, send newsletters, or provide updates about our
                  services.
                </p>
              </li>
              <li>
                <span className="font-medium">Analyze usage patterns</span>
                <p className="mt-1">
                  We use aggregated data to understand how users interact with
                  our site and to improve our offerings.
                </p>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl">Cookies and Tracking Technologies</CardTitle>
            <CardDescription>
              How we use cookies and similar technologies
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              We use cookies and similar tracking technologies to collect
              information about your browsing activities. These technologies help
              us analyze website traffic, customize content, and improve your
              experience.
            </p>
            <p>
              You can control cookie preferences through your browser settings.
              Please note that disabling cookies may affect the functionality of
              our website.
            </p>
            <h3 className="font-medium text-lg mt-4">Types of Cookies We Use:</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <span className="font-medium">Essential cookies</span>: Required for basic site functionality
              </li>
              <li>
                <span className="font-medium">Analytical cookies</span>: Help us understand how visitors interact with our site
              </li>
              <li>
                <span className="font-medium">Functionality cookies</span>: Remember your preferences and settings
              </li>
              <li>
                <span className="font-medium">Third-party cookies</span>: Set by third-party services we use (like analytics)
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl">Data Sharing and Disclosure</CardTitle>
            <CardDescription>
              When and how we share your information with others
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              We do not sell, trade, or otherwise transfer your personally
              identifiable information to third parties without your consent, except
              in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Service Providers</span>
                <p className="mt-1">
                  We may share information with trusted third parties who assist
                  us in operating our website, conducting business, or servicing
                  you, as long as those parties agree to keep this information
                  confidential.
                </p>
              </li>
              <li>
                <span className="font-medium">Legal Requirements</span>
                <p className="mt-1">
                  We may disclose information when required by law or in response
                  to valid requests by public authorities (e.g., a court or
                  government agency).
                </p>
              </li>
              <li>
                <span className="font-medium">Business Transfers</span>
                <p className="mt-1">
                  If our site is acquired or merged with another company, your
                  information may be transferred to the new owners.
                </p>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl">Data Security</CardTitle>
            <CardDescription>
              How we protect your information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction.
            </p>
            <p>
              However, no method of transmission over the internet or electronic
              storage is 100% secure. While we strive to use commercially
              acceptable means to protect your personal information, we cannot
              guarantee its absolute security.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl">Your Rights and Choices</CardTitle>
            <CardDescription>
              Options regarding your personal information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Depending on your location, you may have certain rights regarding
              your personal information, including:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>The right to access personal information we hold about you</li>
              <li>The right to request correction of inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to restrict or object to processing</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact us using the
              information provided at the end of this policy.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl">Children's Privacy</CardTitle>
            <CardDescription>
              Information regarding users under the age of 13
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Our services are not intended for users under the age of 13. We do
              not knowingly collect personal information from children. If we
              become aware that we have collected personal information from a
              child under the age of 13, we will take steps to remove that
              information.
            </p>
            <p>
              If you believe we may have collected information from a child under
              13, please contact us.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl">Changes to This Privacy Policy</CardTitle>
            <CardDescription>
              How we update our privacy practices
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or for other operational, legal, or
              regulatory reasons. We will notify you of any material changes by
              posting the updated policy on this page with a revised "Last
              Updated" date.
            </p>
            <p>
              We encourage you to review this policy periodically to stay
              informed about how we protect your information.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Contact Us</CardTitle>
            <CardDescription>
              How to reach us with questions or concerns
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="bg-muted/30 p-4 rounded-md">
              <p>Email: info@prodevopsguytech.com</p>
              <p>GitHub: <a href="https://github.com/NotHarshhaa" className="text-primary hover:underline">https://github.com/NotHarshhaa</a></p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 flex justify-center">
          <Button asChild variant="outline">
            <Link href="/">
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
                <path d="m15 18-6-6 6-6" />
              </svg>
              Back to Home
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
