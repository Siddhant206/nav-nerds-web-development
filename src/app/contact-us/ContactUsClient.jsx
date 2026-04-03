"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/component/UI/Button";
import { Input } from "@/component/UI/input";
import { Textarea } from "@/component/UI/textarea";
import { Card, CardContent } from "@/component/UI/card";
import Link from "next/link";
import Image from "next/image";
import { H1, H3, P } from "@/component/UI/typography";

// Helper: Format date for sheet
function formatDateForSheet(date) {
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, "0");
  const month = d.toLocaleString("en-GB", {
    month: "short",
    timeZone: "Asia/Kolkata",
  });
  const year = d.getFullYear();
  const hours = String(d.getHours()).padStart(2, "0");
  const minutes = String(d.getMinutes()).padStart(2, "0");
  return `${day}-${month}-${year} ${hours}:${minutes}`;
}

export default function ContactSection() {
  // ✅ Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  // ✅ Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // ✅ Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    const submittedAt = formatDateForSheet(new Date());
    const data = {
      fullName: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      query: formData.message,
      submittedAt,
    };

    try {
      const response = await fetch(
        "https://website-contact-data.nishantsaini3120.workers.dev",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          cache: "no-cache",
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      if (result.result === "success") {
        setStatus({
          type: "success",
          message: "Thanks! We'll get back to you shortly.",
        });
        setFormData({ name: "", email: "", mobile: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: result.message || "Something went wrong.",
        });
      }
    } catch (err) {
      setStatus({
        type: "error",
        message: "Network error. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  // ✅ UI Section
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <H1 className="mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </span>
          </H1>
          <P className="text-gray-600 max-w-2xl mx-auto">
            At Navnerds, we understand that trusting a new team takes time - so
            we’ve created a Trust & Trial Package to let you experience our
            expertise in Microsoft Dynamics 365 Business Central without
            long-term commitments.
          </P>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ✅ Contact Form Card */}
          <Card className="border-2 border-cyan-100">
            <CardContent className="p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                {status.message && (
                  <div
                    className={`p-3 rounded-md text-sm ${
                      status.type === "success"
                        ? "bg-green-100 text-green-700 border border-green-300"
                        : "bg-red-100 text-red-700 border border-red-300"
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="mobile"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Mobile Number
                  </label>
                  <Input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    placeholder="Your Mobile Number"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#3ECBD6]  hover:bg-black  font-semibold text-white"
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 mr-2 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* ✅ Contact Info */}
          <div className="space-y-6">
            <Card className="border-2 border-cyan-100 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#36E3EE] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <H3 className="text-gray-900">Email Us</H3>
                    <Link
                      href="mailto:info@navnerds.com"
                      className="text-gray-600"
                    >
                      info@navnerds.com
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-cyan-100 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#36E3EE] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <H3 className="text-gray-900">Call Us</H3>
                    <Link href="tel:+919068476495" className="text-gray-600">
                      +91 9068476495
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-cyan-100 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#36E3EE] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <H3 className="text-gray-900">Visit Us</H3>
                    <P className="text-gray-600 text-left">273/1 Maktoolpuri, Haridwar</P>
                    <P className="text-gray-600 text-left">Uttarakhand, India 247667</P>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-br from-cyan-600 to-blue-200 rounded-2xl text-justify hyphens-auto p-8 flex flex-col items-center justify-center text-white">
              <H3 className="text-white mb-2">
                At Navnerds, We Create Values
              </H3>
              <P className="mb-4 text-cyan-50">
                We believe every business deserves a unique digital identity.
                Our team blends creativity and technology to craft solutions
                that truly work. Share your details - we’ll handle the rest.
              </P>
              <Button
                variant="secondary"
                className="bg-white text-cyan-600 hover:bg-white overflow-hidden w-32 h-14"
              >
                <Image
                  src="/Icons/Vaule-Icon.gif"
                  alt="Value Creation Icon"
                  width={70}
                  height={70}
                  className="object-contain"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
