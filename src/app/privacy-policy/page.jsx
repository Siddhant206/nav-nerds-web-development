"use client"
import React from "react";

export default function page() {
  return (
    <main className="px-4 sm:px-6 lg:p-8 bg-white text-black min-h-screen">
      <div className="max-w-4xl xl:max-w-5xl mx-auto text-justify text-base leading-relaxed space-y-8 py-8">
 
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Navnerds
          </h2>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 text-left">
            <p className="mb-4">
              This Privacy Policy is part of the Terms of Service of Navnerds and outlines how we collect, use, share, and protect your personal information when you access or interact with our services, programs, or website. We are committed to maintaining your privacy and ensuring that all data shared with us is handled with care, integrity, and transparency.
            </p>
            <p className="mb-4">
              Your privacy is our responsibility, and we take full accountability for safeguarding your personal or non-personal data that you entrust to us. This policy also covers the tools, technologies, and standards we use to ensure confidentiality, compliance, and protection of all sensitive information.
            </p>
            <p>
              We are fully aligned with global privacy standards and remain committed to ethical data usage and regulatory compliance. Whether you are participating in our outdoor programs, subscribing to our services, or simply visiting our website, you can trust that your data is secure.
            </p>
          </div>
        </div>
 
        <div className="section-divider">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 legal-numbering">
            1. Information That We Collect & Process
          </h3>
          <p className="mb-4">
            The primary objective behind collecting user data is to provide a better, more secure, and more personalized experience each time you engage with us. We only collect what is necessary, and we never use it beyond the stated purpose.
          </p>
          <p className="mb-3 font-semibold">We may collect and process:</p>
          <ul className="list-disc list-outside space-y-2 ml-6 mb-4">
            <li><strong>Personal Identification Information:</strong> Name, Date of Birth, Gender</li>
            <li><strong>Contact Details:</strong> Email Address, Phone Number, Physical Address</li>
            <li><strong>Emergency Contact Information</strong></li>
            <li><strong>Health & Safety Information:</strong> Any medical disclosures required for program participation</li>
            <li><strong>Consent & Waiver Forms</strong></li>
            <li><strong>Payment-Related Information:</strong> Transaction records, billing details (processed through secure gateways)</li>
            <li><strong>Voluntary Feedback or Testimonials</strong></li>
          </ul>
          <p>
            All data collected is used to facilitate service delivery, enhance user safety, improve program quality, and keep you informed of relevant updates.
          </p>
        </div>
 
        <div className="section-divider">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 legal-numbering">
            2. Cookies That We Use
          </h3>
          <p className="mb-3">We may use cookies on our website to:</p>
          <ul className="list-disc list-outside space-y-2 ml-6 mb-4">
            <li>Understand user preferences and navigation behavior</li>
            <li>Analyze time spent, pages visited, and click activity</li>
            <li>Improve website functionality and personalization</li>
          </ul>
          <p className="mb-4">
            Cookies help us serve you better when you return to our site. You can choose to allow or block cookies through your browser settings. Please note that disabling cookies may affect the functionality of certain features on our website.
          </p>
          {/* <p className="italic text-gray-600">
            For more details, you may refer to our Cookie Policy (available on our website).
          </p> */}
        </div>
  
        <div className="section-divider">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 legal-numbering">
            3. How We Use Your Data
          </h3>
          <p className="mb-3">We use your personal data strictly for the following purposes:</p>
          <ul className="list-disc list-outside space-y-2 ml-6"> 
            <li>To communicate service-related updates, confirmations, or changes</li>
            <li>To process transactions securely</li>
            <li>To improve our services based on feedback and behavior analytics</li>
            <li>To share occasional program promotions (only with your consent)</li>
          </ul>
        </div>
 
        <div className="section-divider">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 legal-numbering">
            4. Data Disclosure
          </h3>
          <p className="mb-4">
            We value the trust you place in us and do not sell or rent your personal data. However, under the following circumstances, your information may be shared:
          </p>
          <ul className="list-disc list-outside space-y-3 ml-6">
            <li><strong>With Trusted Third Parties:</strong> Such as service providers, event partners, or logistics vendors who support our operations under confidentiality agreements</li>
            <li><strong>For Legal Compliance:</strong> If required by law, court orders, or lawful government requests</li>
            <li><strong>To Protect Rights and Safety:</strong> When necessary to protect our users, business operations, or legal standing</li>
          </ul>
        </div>
 
        <div className="section-divider">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 legal-numbering">
            5. Data Security
          </h3>
          <p className="mb-4">
            We implement reasonable security safeguards to protect your data against loss, unauthorized access, misuse, or modification. These include encryption, limited data access, secure servers, and third-party compliance verifications.
          </p>
          <p className="bg-yellow-50 border-l-4 border-yellow-400 p-4 text-gray-700">
            While we strive to follow the best industry practices, we cannot guarantee 100% security over the internet. In case of any suspected data breach, we will inform you promptly and transparently.
          </p>
        </div>
 
        <div className="section-divider">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 legal-numbering">
            6. User Rights
          </h3>
          <p className="mb-4">
            At Navnerds, we respect your right to control your personal data. You can at any time:
          </p>
          <ul className="list-disc list-outside space-y-2 ml-6 mb-4">
            <li>Request access or correction of your information</li>
            <li>Unsubscribe from communications such as newsletters, updates, or promotions</li>
            <li>Withdraw consent where applicable</li>
            <li>Request deletion of your data (subject to compliance regulations)</li>
          </ul>
          <p className="font-semibold">
            To exercise any of the above rights, write to us at <a href="mailto:info@navnerds.com" className="text-blue-600 hover:underline">info@navnerds.com</a>
          </p>
        </div>
 
        <div className="section-divider">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 legal-numbering">
            7. Policy Updates & Amendments
          </h3>
          <p className="mb-4">
            Navnerds reserves the right to modify or amend this Privacy Policy at any time to stay aligned with legal requirements or service changes. Any updates will be reflected on this page, and material changes may be communicated via email.
          </p>
          <p>
            To remain informed, we encourage you to review our Privacy Policy periodically.
          </p>
        </div>
 
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 legal-numbering">
            8. Contact Us
          </h3>
          <p className="mb-4">
            We are always open to hearing from you. For any queries, feedback, or requests related to this policy or your data, please reach out to:
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📧</span>
              <div>
                <strong>Email:</strong> <a href="mailto:info@navnerds.com" className="text-blue-600 hover:underline">info@navnerds.com</a>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">📍</span>
              <div>
                <strong>Address:</strong> 273/1 Maltulpuri, Haridwar, Uttarakhand - 247667
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📞</span>
              <div>
                <strong>Phone:</strong> <a href="tel:+919068476495" className="text-blue-600 hover:underline">+91 9068476495</a>
              </div>
            </div>
          </div>
        </div>

        
        <div className="border-t border-gray-200 pt-6 mt-8">
          <p className="text-center text-gray-600 text-sm">
            <strong>Effective Date:</strong> This Privacy Policy is effective as of the date of publication on our website.
          </p>
          <p className="text-center text-gray-600 text-sm mt-2">
            By enrolling or participating in our programs, you acknowledge that you have read, understood, and agreed to the terms of this Privacy Policy.
          </p>
        </div>
      </div>
    </main>

  );
}
