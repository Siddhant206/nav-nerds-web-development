import {
  Code2,
  ArrowRight,
  Sparkles,
  Globe,
  Smartphone,
  ShoppingCart,
  Zap,
  Palette,
  Search,
  Database,
  Cloud,
  Cpu,
  Rocket,
  Shield,
  Users,
  Headphones,
  TrendingUp,
  Award,
} from "lucide-react";
import { Button } from "@/component/UI/button"
import { Card, CardContent } from "@/component/UI/card";
import { generateMetadata } from "@/component/SEO/generateMetadata";
import { pagesMetadata } from "@/component/SEO/pages-metadata";
import Link from "next/link";

// Hero Component
export function Hero() {
  return (
    <section className="relative pt-10 md:pt-32 md:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100/80 backdrop-blur-sm border border-cyan-200 mb-8">
            <Sparkles className="w-4 h-4 text-cyan-600" />
            <span className="text-sm text-cyan-700">
              Cutting-Edge Web Solutions
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Build Your Digital Future
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              with Modern Web Development
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Transform your ideas into stunning, high-performance websites and
            applications. We leverage the latest technologies to create digital
            experiences that drive results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 group"
            >
              <Link
                href={"/contact-us"}
                className="flex items-center justify-center gap-2 text-base"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            {/* <Button
              size="lg"
              variant="outline"
              className="border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-50 text-base"
            >
              View Portfolio
            </Button> */}
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                120+
              </div>
              <div className="text-sm text-gray-600 mt-1">
                Projects Delivered
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                90%
              </div>
              <div className="text-sm text-gray-600 mt-1">
                Client Satisfaction
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                20+
              </div>
              <div className="text-sm text-gray-600 mt-1">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Services Component
export function Services() {
  const services = [
    {
      icon: Globe,
      title: "Web Application Development",
      description:
        "Custom web applications built with React, Next.js, and modern frameworks for scalability and performance.",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description:
        "Mobile-first, pixel-perfect designs that look stunning on every device and screen size.",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      description:
        "Powerful online stores with seamless checkout experiences and integrated payment gateways.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Lightning-fast load times, SEO optimization, and best practices for exceptional user experiences.",
      gradient: "from-pink-500 to-orange-500",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive interfaces designed with user experience and accessibility at the forefront.",
      gradient: "from-orange-500 to-yellow-500",
    },
    {
      icon: Search,
      title: "SEO & Analytics",
      description:
        "Strategic optimization and data-driven insights to maximize your online visibility and growth.",
      gradient: "from-green-500 to-cyan-500",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive web development solutions tailored to your unique
            business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-gray-200 border-2 hover:border-cyan-200 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Technologies Component
export function Technologies() {
  const technologies = [
    {
      category: "Frontend",
      icon: Code2,
      tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML"],
      color: "cyan",
    },
    {
      category: "Backend",
      icon: Database,
      tools: ["Node.js", "Postgress", "MongoDB", "MySql"],
      color: "blue",
    },
    {
      category: "Deployment",
      icon: Cloud,
      tools: ["Vercel", "Render", "Netlify", "Railway"],
      color: "purple",
    },
    //     {
    //       category: "Architecture",
    //       icon: Layers,
    //       tools: [
    //         "Microservices",
    //         "REST APIs",
    //         "Serverless",
    //         "JAMstack",
    //         "Headless CMS",
    //       ],
    //       color: "pink",
    //     },
    {
      category: "Performance",
      icon: Cpu,
      tools: [
        "Code Splitting",
        "Lazy Loading",
        "CDN",
        "Caching",
        "Image Optimization",
      ],
      color: "orange",
    },
//     {
//       category: "Security",
//       icon: Lock,
//       tools: [
//         "SSL/TLS",
//         "OAuth 2.0",
//         "HTTPS",
//         "Data Encryption",
//         "GDPR Compliance",
//       ],
//       color: "green",
//     },
  ];

  const colorClasses = {
    cyan: {
      gradient: "from-cyan-500 to-cyan-600",
      bg: "bg-cyan-50",
      border: "border-cyan-200",
      text: "text-cyan-700",
    },
    blue: {
      gradient: "from-blue-500 to-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-700",
    },
    purple: {
      gradient: "from-purple-500 to-purple-600",
      bg: "bg-purple-50",
      border: "border-purple-200",
      text: "text-purple-700",
    },
    pink: {
      gradient: "from-pink-500 to-pink-600",
      bg: "bg-pink-50",
      border: "border-pink-200",
      text: "text-pink-700",
    },
    orange: {
      gradient: "from-orange-500 to-orange-600",
      bg: "bg-orange-50",
      border: "border-orange-200",
      text: "text-orange-700",
    },
    green: {
      gradient: "from-green-500 to-green-600",
      bg: "bg-green-50",
      border: "border-green-200",
      text: "text-green-700",
    },
  };

  return (
    <section
      id="technologies"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-cyan-50/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Technologies We Master
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Leveraging cutting-edge tools and frameworks to build robust,
            scalable solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            const colors = colorClasses[tech.color];

            return (
              <div
                key={index}
                className={`${colors.bg} ${colors.border} border-2 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${colors.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className={`text-xl font-bold ${colors.text}`}>
                    {tech.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {tech.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-gray-200 hover:border-gray-300 transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Features Component
export function Features() {
  const features = [
    {
      icon: Rocket,
      title: "Fast Delivery",
      description:
        "Agile development process ensures your project launches on time, every time.",
    },
    {
      icon: Shield,
      title: "Security First",
      description:
        "Enterprise-grade security measures protect your data and users.",
    },
    {
      icon: Users,
      title: "User-Centric Design",
      description:
        "Intuitive interfaces designed with your users in mind for maximum engagement.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description:
        "Dedicated support team available around the clock for your peace of mind.",
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description:
        "Architecture built to grow with your business from day one.",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description:
        "Rigorous testing and QA processes guarantee flawless performance.",
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Why Choose Us
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We combine technical excellence with exceptional service to deliver
            outstanding results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <div className="relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-cyan-200 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export const metadata = generateMetadata(pagesMetadata.websiteDevelopment);

function Page() {
  return (
    <section
      id="services"
      className="relative  text-black bg-white bg-[url(/HomePageBg.webp)]  bg-cover bg-no-repeat bg-top overflow-hidden"
    >
      <Hero />
      <Services />
      <Technologies />
      <Features />
    </section>
  );
}

export default Page;
