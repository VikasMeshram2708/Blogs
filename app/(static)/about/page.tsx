import HeroHeader from "@/components/hero-header";
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Define props for the CheckCircle component
interface CheckCircleProps extends React.SVGProps<SVGSVGElement> {}

export default function About() {
  const blogCategories = [
    "Pet Nutrition",
    "Training Tips",
    "Health & Wellness",
    "Behavior Guides",
    "Breed Information",
    "Pet Product Reviews",
  ];

  return (
    <div className="min-h-screen w-full">
      <HeroHeader title="About Us" />

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Purpose</h2>
            <p className="text-lg mb-4">
              Pashucare Blog was created to empower pet owners with reliable,
              research-backed information about animal care. We believe educated
              pet parents make the best decisions for their furry family
              members.
            </p>
            <p className="text-lg mb-4">
              Our content is carefully curated from veterinary journals, animal
              behavior studies, and trusted pet care organizations to bring you
              accurate, up-to-date information.
            </p>
            <p className="text-lg">
              While we're not veterinarians ourselves, we're passionate about
              translating complex pet health information into practical advice
              you can use every day.
            </p>
          </div>
          <div className="bg-gray-100 rounded-xl h-80 w-full shadow-lg overflow-hidden flex items-center justify-center">
            <div className="text-center p-6">
              <p className="text-2xl font-bold text-gray-700 mb-3">1,000+</p>
              <p className="text-gray-600">Pet owners helped monthly</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">What We Cover</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-xl font-semibold pb-2">
                Pet Health Basics
              </CardHeader>
              <CardContent>
                Essential information about vaccinations, parasite prevention,
                and recognizing common health issues.
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-xl font-semibold pb-2">
                Care Guides
              </CardHeader>
              <CardContent>
                Detailed care instructions for different life stages, breeds,
                and special needs pets.
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-xl font-semibold pb-2">
                Behavior Solutions
              </CardHeader>
              <CardContent>
                Positive reinforcement techniques and troubleshooting for common
                behavior challenges.
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Our Content Principles
          </h2>
          <div className="bg-white rounded-xl p-8 shadow-md max-w-4xl mx-auto">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-amber-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Evidence-Based</h3>
                  <p className="text-gray-600">
                    We cite veterinary sources and peer-reviewed research
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-amber-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Practical</h3>
                  <p className="text-gray-600">
                    Actionable advice you can implement immediately
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-amber-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Comprehensive</h3>
                  <p className="text-gray-600">
                    Covering all aspects of pet ownership
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-amber-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Transparent</h3>
                  <p className="text-gray-600">
                    Clear about sources and limitations
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-50 rounded-xl p-8 shadow-inner">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Explore Our Categories
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {blogCategories.map((category, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm font-medium bg-white hover:bg-amber-100"
              >
                {category}
              </Badge>
            ))}
          </div>
          <p className="text-center mt-8 text-gray-600">
            Have a topic suggestion? We'd love to hear from you!
          </p>
        </div>
      </section>
    </div>
  );
}

function CheckCircle(props: CheckCircleProps) {
  return (
    <svg
      {...props}
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
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
