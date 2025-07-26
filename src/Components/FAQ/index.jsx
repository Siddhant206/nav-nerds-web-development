import { useState } from 'react';
import Link from 'next/link';

const FAQ = () => {
    const [openItem, setOpenItem] = useState(null);

    const faqData = [
        {
            id: 1,
            question: "Why is your trek fee higher than other trekking companies?",
            answer: (
                <div>
                    <ul className="space-y-2">
                        <li><strong>Curated Itineraries:</strong> We offer well-researched, offbeat routes and immersive experiences that go beyond the usual trek.</li>
                        <li><strong>Smaller Group Sizes:</strong> We limit group size to ensure personalized attention, a richer experience and minimal environmental impact.</li>
                        <li><strong>Expert Team:</strong> Our guides are not only experienced trekkers but also trained in wilderness first aid, environmental ethics and local culture.</li>
                        <li><strong>Higher Staff-to-Trekker Ratio:</strong> Whether it's helping you navigate a tough section of the trail, adjusting your pace or addressing any signs of discomfort, our team has been prepared to deal with any situation.</li>
                        <li><strong>Pre-Trek Screening & Briefings:</strong> We conduct health assessments and safety briefings to ensure you're well-prepared for the terrain.</li>
                        <li><strong>Eco-friendly measures:</strong> We follow a strict 'Leave No Trace' policy and carry back all waste.</li>
                        <li><strong>Local community support:</strong> We assist and support local communities by sourcing food and services from them.</li>
                    </ul>
                </div>
            )
        },
        {
            id: 2,
            question: "What are some easy treks for beginners?",
            answer: (
                <div>
                    <p className="mb-2">If you're a beginner and confuse which trek to choose, here are some easy treks to begin with:</p>
                    <ol className="list-decimal list-inside space-y-1">
                        <li>Nag Tibba</li>
                        <li>Harsil Saattal</li>
                        <li>Ali bedni bugyal</li>
                        <li>Tungnath & Chandrashila</li>
                        <li>Brahmatal</li>
                    </ol>
                </div>
            )
        },
        {
            id: 3,
            question: "How safe are the treks?",
            answer: (
                <div>
                    <ul className="space-y-2">
                        <li><strong>Certified & experienced guides:</strong> With years of experience in leading treks, they are skilled at reading terrain, they also conduct regular safety briefings throughout the trek.</li>
                        <li><strong>Group size:</strong> We keep our groups small, typically under 15 participants, so that guides can closely monitor each individual.</li>
                        <li><strong>Medical safety:</strong> A comprehensive medical kit is available at all times including altitude sickness medication, first aid supplies, oxygen cylinders. Also daily health checks are done during high-altitude treks.</li>
                    </ul>
                </div>
            )
        },
        {
            id: 4,
            question: "What type of toilet facility is provided at the trek?",
            answer: "Dry toilets, to have minimal impact on the environment"
        },
        {
            id: 5,
            question: "How does Offbeat Treks promote Sustainable Tourism and Eco-Friendly Tourism?",
            answer: (
                <div>
                    <ul className="space-y-2">
                        <li><strong>Eco-friendly methods:</strong> We follow a strict 'Leave No Trace' policy and carry back all waste.</li>
                        <li><strong>Prohibit the use of plastic:</strong> We prohibit the use of plastic on all treks and we encourage the trekkers to carry reusable water bottles and containers.</li>
                        <li><strong>Proper waste disposal:</strong> waste is disposed off at proper disposal facilities and organic waste is composted to reduce the impact on the environment.</li>
                    </ul>
                </div>
            )
        },
        {
            id: 6,
            question: "Is water available at the campsites?",
            answer: "We provide filtered or boiled water at campsites to reduce the need for packaged water bottles."
        },
        {
            id: 7,
            question: "Made a payment but did not receive any confirmation.",
            answer: "Reach out to us on our support & helpline number- +91 8477800887 or mail us at info@offbeattreks.com"
        },
        {
            id: 8,
            question: "How will Offbeat Treks manage if I am the only woman in the group?",
            answer: "We provide a separate sleeping arrangements to women and in case of a single woman trekker, a guide will always be available to supervise and support you."
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
                        <h1 className="text-4xl font-bold text-gray-900 mb-2 animate-fade-in">
                            Frequently Asked Questions
                        </h1>
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
                                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                                    {item.question}
                                </h3>
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
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            Still have questions?
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Can't find what you're looking for? We're here to help!
                        </p>
                        <Link href={"/contact"} className="px-8 py-3 bg-black text-white hover:bg-white hover:text-black border border-gray-300 rounded-full cursor-pointer transition-colors duration-500">
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