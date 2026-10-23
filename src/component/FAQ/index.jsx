import { useState } from 'react';
import Link from 'next/link';
import { H1, H2, H3, P } from '@/component/UI/typography';

const FAQ = () => {
    const [openItem, setOpenItem] = useState(null);

    const faqData = [
        {
            id: 1,
            question: "What exactly is Microsoft Dynamics 365 Business Central?",
            answer: (
                <div>
                    <P className="mb-4">Microsoft Dynamics 365 Business Central is a comprehensive business management solution (ERP) designed for small to medium-sized organizations. It automates and streamlines business processes and helps you manage your business across:</P>
                    <ul className="space-y-2 ml-6 list-disc">
                        <li><strong>Finance:</strong> Manage your cash flow, bank reconciliations, fixed assets, and end-of-year reporting.</li>
                        <li><strong>Sales & Service:</strong> Track customer interactions and get guidance on the best upsell, cross-sell, and renewal opportunities.</li>
                        <li><strong>Supply Chain Management:</strong> Use built-in intelligence to predict when and what to replenish, ensuring inventory levels are optimized.</li>
                        <li><strong>Project Management:</strong> Create, manage, and track customer projects using timesheets and advanced job costing.</li>
                        <li><strong>Operations:</strong> Manage your manufacturing, warehousing, and shipping operations with real-time data.</li>
                    </ul>
                </div>
            )
        },
        {
            id: 2,
            question: "How does Business Central differ from legacy NAV (Navision)?",
            answer: (
                <div>
                    <P className="mb-4">Business Central is the modern, cloud-first evolution of NAV. While it retains the robust logic of NAV, it brings significant improvements:</P>
                    <ul className="space-y-2 ml-6 list-disc">
                        <li><strong>Cloud Accessibility:</strong> Access your business data from any device, anywhere, via a web browser or mobile app.</li>
                        <li><strong>Automatic Updates:</strong> No more expensive version upgrades. Microsoft handles updates automatically in the background.</li>
                        <li><strong>Modern Customization:</strong> Customizations are built as "Extensions" (AL code) that don't modify the base code, making future updates seamless.</li>
                        <li><strong>Tighter Integration:</strong> Native integration with Outlook, Excel, Teams, and the Power Platform.</li>
                    </ul>
                </div>
            )
        },
        {
            id: 3,
            question: "Is Business Central suitable for my specific industry?",
            answer: (
                <div>
                    <P>Absolutely. While Business Central covers core business needs out-of-the-box, Navnerds specializes in tailoring it for specific industries such as <strong>E-commerce, Manufacturing, Professional Services, and Retail.</strong> We utilize specialized extensions and custom AL development to ensure the system fits your unique workflows perfectly.</P>
                </div>
            )
        },
        {
            id: 4,
            question: "What is the typical timeline for an ERP implementation?",
            answer: "Implementation timelines vary based on complexity. A standard 'Go-Live' for core financial modules can take 4–8 weeks. More complex projects involving manufacturing, warehouse management, and deep customizations typically range from 3 to 6 months. We provide a detailed roadmap during our initial assessment phase."
        },
        {
            id: 5,
            question: "Can we integrate Business Central with our existing 3rd party tools?",
            answer: "Yes. Integration is one of our core strengths. We can connect Business Central with Shopify, WooCommerce, Magento, WhatsApp, CRM systems, and custom internal applications using standard APIs, OData services, or custom middleware."
        },
        {
            id: 6,
            question: "What kind of support do you provide post-implementation?",
            answer: "We offer comprehensive support packages including technical troubleshooting, functional guidance, minor customizations, and monthly health checks. Our goal is to ensure your team is never stuck and your system is always optimized."
        },
        {
            id: 7,
            question: "Do you offer a trial period for your services?",
            answer: "Yes! We offer a 'Starter Plan' (Trial & Trust). This allows you to experience our expertise and working style with a low-risk, small-scale project before committing to a larger engagement."
        },
        {
            id: 8,
            question: "Can Navnerds help with on-premise to cloud migrations?",
            answer: "Absolutely. Migrating from on-premise NAV or older versions of Business Central to the cloud is one of our specialties. We ensure a smooth data transition, re-implement necessary customizations as extensions, and minimize downtime for your business."
        },
        {
            id: 9,
            question: "Do you provide dedicated resources for BC development?",
            answer: "Yes, we offer dedicated resource packages. You can hire our skilled Microsoft consultants and developers on-demand to work exclusively on your projects, providing scalability and deep technical expertise without the overhead of full-time hiring."
        },
        {
            id: 10,
            question: "What is the difference between your Growth and Enterprise plans?",
            answer: "Our Growth Plan is designed for scaling businesses needing steady development and support. The Enterprise Plan is for larger organizations requiring complex architecture, deep integrations, and high-priority, multi-resource support."
        },
        {
            id: 11,
            question: "I have a question not listed here. How can I reach you?",
            answer: "You can reach our expert consultants directly at info@navnerds.com or call us at +91 9068476495. We're always happy to discuss your business challenges."
        }
    ];

    const toggleItem = (id) => {
        setOpenItem(openItem === id ? null : id);
    };

    return (
        <div className="bg-transparent">
            {/* Header - Remain same */}
            <div className="">
                <div className="max-w-4xl mx-auto px-6 py-8">
                    <div className="text-center">
                        <H1 className="mb-2 animate-fade-in text-gray-900">
                            Frequently Asked Questions
                        </H1>
                        {/* <p className="text-gray-600 text-lg animate-fade-in-delay">
                            Find answers to common questions about our products and services
                        </p> */}
                    </div>
                </div>
            </div>

            {/* FAQ Content */}
            <div className="max-w-4xl mx-auto h-[60rem] md:h-[50rem] overflow-y-scroll px-4 py-12 scrollbar-hide">
                <div className="space-y-4 bg-white border border-gray-200 p-2 rounded-2xl">
                    {faqData.map((item, index) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-lg shadow-sm border border-gray-200 transition-all duration-300 transform hover:-translate-y-1"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <button
                                onClick={() => toggleItem(item.id)}
                                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-200 transition-colors duration-200 rounded-lg"
                            >
                                <H3 className="text-gray-900 pr-4 text-left">
                                    {item.question}
                                </H3>
                                <div className="flex-shrink-0">
                                    {openItem === item.id ? (
                                        <svg width="13" height="9" viewBox="0 0 13 9" fill="none" className="w-5 h-5 text-blue-600 transform transition-transform duration-200">
                                            <path d="M2.4375 9L0 6.54545L6.5 0L13 6.54545L10.5625 9L6.5 4.90909L2.4375 9Z" fill="black" />
                                        </svg>
                                    ) : (
                                        <svg width="13" height="9" viewBox="0 0 13 9" fill="none" className="w-5 h-5 text-gray-400 transform transition-transform duration-200">
                                            <path d="M2.4375 0L0 2.45455L6.5 9L13 2.45455L10.5625 0L6.5 4.09091L2.4375 0Z" fill="black" />
                                        </svg>
                                    )}
                                </div>
                            </button>

                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openItem === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="px-6 pb-4">
                                    <div className="border-t border-gray-100 pt-4">
                                        <div className="text-gray-700 leading-relaxed animate-fade-in">
                                            {typeof item.answer === 'string' ? (
                                                <p>{item.answer}</p>
                                            ) : (
                                                item.answer
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact Section - Remain same */}
                <div className="mt-16 text-center">
                    <div className="bg-white rounded-lg border border-gray-200 p-8 duration-300">
                        <H2 className="text-gray-900 mb-4">
                            Still have questions?
                        </H2>
                        <p className="text-gray-600 mb-6">
                            Can't find what you're looking for? We're here to help!
                        </p>
                        <Link href={"/contact-us"} className="px-8 py-3 bg-black text-white hover:bg-white hover:text-black border border-gray-300 rounded-full cursor-pointer transition-colors duration-500">
                            Contact Support
                        </Link>
                    </div>
                </div>
            </div>

            {/* CSS styles - Remain same */}
            {/* <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                .animate-fade-in {
                    animation: fade-in 0.6s ease-out;
                }
                
                .animate-fade-in-delay {
                    animation: fade-in 0.6s ease-out 0.2s both;
                }
            `}</style> */}
        </div>
    );
};

export default FAQ;