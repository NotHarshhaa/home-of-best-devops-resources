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

export default function TermsOfServicePage() {
  return (
    <div className="container py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Terms of Service
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
            <CardTitle className="text-xl">Acceptance of Terms</CardTitle>
            <CardDescription>
              Please read these terms carefully before using our services
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Welcome to the Home of Best DevOps Resources. By accessing or using
              our website, you agree to be bound by these Terms of Service. If
              you do not agree to these terms, please do not use our services.
            </p>
            <p>
              These Terms of Service govern your use of our website, content,
              and services offered by Home of Best DevOps Resources
              ("we," "us," or "our").
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl">Use of Services</CardTitle>
            <CardDescription>
              Rules and guidelines for using our platform
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <h3 className="font-medium text-lg">Permitted Use</h3>
            <p>
              You may access and use our services for your personal,
              non-commercial use. This includes browsing our resources, downloading
              materials expressly made available for download, and contributing
              content in accordance with our guidelines.
            </p>

            <h3 className="font-medium text-lg mt-6">Prohibited Activities</h3>
            <p>
              When using our services, you agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the intellectual property rights of others</li>
              <li>Use our services to distribute malware or harmful code</li>
              <li>Attempt to gain unauthorized access to any part of our services</li>
              <li>Use automated means to access or scrape our content without permission</li>
              <li>Interfere with or disrupt the integrity of our services</li>
              <li>Collect or harvest user information without consent</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl">User Contributions</CardTitle>
            <CardDescription>
              Policies regarding content submitted to our platform
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Our platform may allow you to contribute content, including
              resources, comments, or other materials. By submitting content,
              you grant us a worldwide, non-exclusive, royalty-free license to
              use, reproduce, modify, adapt, publish, translate, and distribute
              your content in any existing or future media formats.
            </p>
            <p>
              You represent and warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">You own or have the necessary rights</span>
                <p className="mt-1">
                  You own or control all rights to the content you submit and have
                  the right to grant the license described above.
                </p>
              </li>
              <li>
                <span className="font-medium">Your content is accurate and lawful</span>
                <p className="mt-1">
                  Your contributions do not violate any applicable law, regulation,
                  or third-party right.
                </p>
              </li>
              <li>
                <span className="font-medium">Your content is appropriate</span>
                <p className="mt-1">
                  Your contributions are not harmful, offensive, or inappropriate
                  and meet our community guidelines.
                </p>
              </li>
            </ul>
            <p className="mt-4">
              We reserve the right to remove or refuse any content that violates
              these terms or that we find objectionable for any reason, without
              prior notice.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl">Intellectual Property</CardTitle>
            <CardDescription>
              Rights regarding our content and your submissions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <h3 className="font-medium text-lg">Our Content</h3>
            <p>
              Unless otherwise noted, the content on our website, including text,
              graphics, logos, icons, images, audio and video clips, and software,
              is the property of Home of Best DevOps Resources or our licensors
              and is protected by copyright, trademark, and other intellectual
              property laws.
            </p>
            <p>
              You may not use, reproduce, distribute, modify, create derivative
              works of, or publicly display our content without our explicit
              written permission, except as permitted by fair use or other
              copyright exceptions.
            </p>

            <h3 className="font-medium text-lg mt-6">Open Source Resources</h3>
            <p>
              Many of the resources we link to are open-source projects with their
              own licenses. When accessing these resources, you agree to comply
              with the terms of their respective licenses.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl">Links to Third-Party Websites</CardTitle>
            <CardDescription>
              Our relationship with external sites
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Our website contains links to third-party websites that are not
              owned or controlled by us. We have no control over, and assume no
              responsibility for, the content, privacy policies, or practices of
              any third-party websites.
            </p>
            <p>
              You acknowledge and agree that we shall not be responsible or liable,
              directly or indirectly, for any damage or loss caused or alleged to
              be caused by or in connection with the use of or reliance on any
              content, goods, or services available on or through any such websites.
            </p>
            <p>
              We strongly advise you to read the terms and conditions and privacy
              policies of any third-party websites you visit.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl">Disclaimer of Warranties</CardTitle>
            <CardDescription>
              Limitations on guarantees for our services
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              YOUR USE OF OUR SERVICES IS AT YOUR SOLE RISK. OUR SERVICES ARE
              PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTIES
              OF ANY KIND, EITHER EXPRESS OR IMPLIED.
            </p>
            <p>
              WE EXPRESSLY DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO
              IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
              PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT OUR SERVICES
              WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE.
            </p>
            <p>
              THE INFORMATION AND RESOURCES PROVIDED THROUGH OUR SERVICES ARE FOR
              GENERAL INFORMATIONAL PURPOSES ONLY. WE DO NOT WARRANT THE ACCURACY,
              COMPLETENESS, OR USEFULNESS OF THIS INFORMATION.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl">Limitation of Liability</CardTitle>
            <CardDescription>
              Boundaries of our responsibility
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              IN NO EVENT SHALL WE, OUR DIRECTORS, OFFICERS, EMPLOYEES, AGENTS,
              OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
              CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION,
              LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES,
              RESULTING FROM:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your access to or use of or inability to access or use our services</li>
              <li>Any conduct or content of any third party on our services</li>
              <li>Any content obtained from our services</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>
            <p className="mt-4">
              WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE),
              OR ANY OTHER LEGAL THEORY, WHETHER OR NOT WE HAVE BEEN INFORMED OF
              THE POSSIBILITY OF SUCH DAMAGE.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl">Indemnification</CardTitle>
            <CardDescription>
              Your responsibilities to protect us from claims
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              You agree to defend, indemnify, and hold harmless Home of Best DevOps
              Resources, its officers, directors, employees, and agents, from and
              against any and all claims, damages, obligations, losses, liabilities,
              costs or debt, and expenses (including but not limited to attorney's
              fees) arising from:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your use of and access to our services</li>
              <li>Your violation of any term of these Terms of Service</li>
              <li>Your violation of any third-party right, including without limitation any copyright, property, or privacy right</li>
              <li>Any claim that your content caused damage to a third party</li>
            </ul>
            <p className="mt-4">
              This defense and indemnification obligation will survive these Terms
              of Service and your use of our services.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl">Modifications to Terms</CardTitle>
            <CardDescription>
              How and when these terms may change
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              We reserve the right to modify or replace these Terms of Service at
              any time at our sole discretion. The most current version will be
              posted on our website with the "Last Updated" date.
            </p>
            <p>
              Your continued use of our services after any such changes constitutes
              your acceptance of the new Terms of Service. If you do not agree to
              the revised terms, please stop using our services.
            </p>
            <p>
              We encourage you to review the Terms of Service whenever you access
              our services to stay informed about our policies.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl">Governing Law</CardTitle>
            <CardDescription>
              Legal jurisdiction and dispute resolution
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              These Terms of Service shall be governed by and construed in
              accordance with the laws of India, without regard to its conflict
              of law provisions.
            </p>
            <p>
              Any dispute arising out of or relating to these terms will be
              subject to the exclusive jurisdiction of the courts located in
              Bangalore, India.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Contact Us</CardTitle>
            <CardDescription>
              How to reach us with questions about these terms
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              If you have any questions about these Terms of Service, please
              contact us at:
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
