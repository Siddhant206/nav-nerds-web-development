// "use client";
// import { useState, useEffect, use } from "react";
// import Image from "next/image";
// import Link from "next/link"; 

// function formatDateForSheet(date) {
//   const d = new Date(date);

//   const day = String(d.getDate()).padStart(2, "0");
//   const month = d.toLocaleString("en-GB", { month: "short", timeZone: "Asia/Kolkata" });
//   const year = d.getFullYear();

//   const hours = String(d.getHours()).padStart(2, "0");
//   const minutes = String(d.getMinutes()).padStart(2, "0");

//   return `${day}-${month}-${year} ${hours}:${minutes}`;
// }


// export default function page() {
//   // Form state for the main contact form
//   const [formData, setFormData] = useState({
//     name: "",
//     mobile: "",
//     email: "",
//     query: "",
//   });


//   const [status, setStatus] = useState({ type: "", message: "" });
//   const [loading, setLoading] = useState(false); 

//   // Handle main form changes
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     if (type === 'checkbox') {
//       if (name === 'callback[]') {
//         setFormData(prev => ({
//           ...prev,
//           callback: checked
//             ? [...prev.callback, value]
//             : prev.callback.filter(item => item !== value)
//         }));
//       } else if (name === 'newsletter') {
//         setFormData(prev => ({ ...prev, newsletter: checked }));
//       }
//     } else {
//       setFormData(prev => ({ ...prev, [name]: value }));
//     }
//   };



//   // Submit main contact form
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setStatus({ type: "", message: "" });
//     const submittedAt = formatDateForSheet(new Date());
//     const data = {
//       fullName: formData.name,
//       email: formData.email,
//       mobile: formData.mobile, 
//       query: formData.query, 
//       submittedAt: submittedAt,
//     };

//     try {
//       const response = await fetch("https://website-contact-data.nishantsaini3120.workers.dev", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         cache: "no-cache",
//         redirect: "follow",
//         body: JSON.stringify(data),
//       });

//       const result = await response.json();
//       if (result.result === "success") {
//         setStatus({ type: "success", message: "Thanks! We'll get back to you shortly." });
//         setFormData({ name: "", email: "", mobile: "", query: "" });
//       } else {
//         setStatus({ type: "error", message: result.message || "Something went wrong." });
//       }
//     } catch (err) {
//       setStatus({ type: "error", message: "Network error. Please try again later." });
//     } finally {
//       setLoading(false);
//     }
//   };



//   return (
//     <section className=" bg-[url(/HomePageBg.webp)]  bg-cover bg-no-repeat bg-top min-h-screen text-black">
   
//       {/* HERO */}
//       <header className="max-w-4xl mx-auto pt-20 px-6 text-center ">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
//         <p className="max-w-2xl mx-auto text-lg md:text-xl">
//           At Navnerds, we understand that trusting a new team takes time—so we’ve created a Trust & Trial Package to let you experience our expertise in{" "}
//           <span className="text-blue-600 font-semibold">Microsoft Dynamics 365 Business Central</span> without long-term commitments.
//         </p>

//       </header> 
//         {/* Contact Info Cards */}
//         <main className="max-w-6xl w-full mx-auto px-4 space-y-10 py-10 relative z10">
//           <div className="bg-white rounded-xl h-full sm:h-40 lg:h-52 border border-gray-200 px-16 flex max-md:flex-col gap-4 justify-between items-center">
//             <address className="flex flex-col items-center justify-center gap-3 mt-3 p-2 md:h-20 rounded-xl not-italic" >
//               <div >
//                 <svg width="46" height="46" viewBox="0 0 46 46" fill="none" >
//                   <path d="M16 1.52734C17.9167 1.52734 19.7135 1.88672 21.3906 2.60547C23.0677 3.32422 24.5352 4.3125 25.793 5.57031C26.9909 6.82812 27.9642 8.29557 28.7129 9.97266C29.4616 11.6497 29.8359 13.4466 29.8359 15.3633C29.8359 15.9622 29.791 16.5612 29.7012 17.1602C29.6113 17.7591 29.4766 18.3281 29.2969 18.8672C29.1771 19.4661 28.9974 20.0501 28.7578 20.6191C28.5182 21.1882 28.2487 21.7122 27.9492 22.1914L16 42.9453L4.05078 22.1914C3.7513 21.7122 3.48177 21.1882 3.24219 20.6191C3.0026 20.0501 2.82292 19.4661 2.70312 18.8672C2.52344 18.3281 2.38867 17.7591 2.29883 17.1602C2.20898 16.5612 2.16406 15.9622 2.16406 15.3633C2.16406 13.4466 2.53841 11.6497 3.28711 9.97266C4.03581 8.29557 5.00911 6.82812 6.20703 5.57031C7.46484 4.3125 8.93229 3.32422 10.6094 2.60547C12.2865 1.88672 14.0833 1.52734 16 1.52734ZM16 20.6641C16.7188 20.6641 17.4076 20.5293 18.0664 20.2598C18.7253 19.9902 19.2943 19.6159 19.7734 19.1367C20.2526 18.6576 20.6419 18.0885 20.9414 17.4297C21.2409 16.7708 21.3906 16.082 21.3906 15.3633C21.3906 14.5846 21.2409 13.8809 20.9414 13.252C20.6419 12.623 20.2526 12.069 19.7734 11.5898C19.2943 11.0508 18.7253 10.6465 18.0664 10.377C17.4076 10.1074 16.7188 9.97266 16 9.97266C15.2812 9.97266 14.5924 10.1074 13.9336 10.377C13.2747 10.6465 12.7057 11.0508 12.2266 11.5898C11.7474 12.069 11.3581 12.623 11.0586 13.252C10.7591 13.8809 10.6094 14.5846 10.6094 15.3633C10.6094 16.082 10.7591 16.7708 11.0586 17.4297C11.3581 18.0885 11.7474 18.6576 12.2266 19.1367C12.7057 19.6159 13.2747 19.9902 13.9336 20.2598C14.5924 20.5293 15.2812 20.6641 16 20.6641ZM16 0C13.9036 0 11.9271 0.404297 10.0703 1.21289C8.21354 2.02148 6.56641 3.11458 5.12891 4.49219C3.7513 5.86979 2.6582 7.48698 1.84961 9.34375C1.04102 11.2005 0.636719 13.207 0.636719 15.3633C0.636719 16.0221 0.681641 16.696 0.771484 17.3848C0.861328 18.0736 0.996094 18.7474 1.17578 19.4062C1.35547 20.0052 1.58008 20.6191 1.84961 21.248C2.11914 21.877 2.40365 22.4609 2.70312 23L16 46L29.2969 23C29.5964 22.4609 29.8809 21.877 30.1504 21.248C30.4199 20.6191 30.6445 20.0052 30.8242 19.4062C31.0039 18.7474 31.1387 18.0736 31.2285 17.3848C31.3184 16.696 31.3633 16.0221 31.3633 15.3633C31.3633 13.207 30.959 11.2005 30.1504 9.34375C29.3418 7.48698 28.2487 5.86979 26.8711 4.49219C25.4336 3.11458 23.7865 2.02148 21.9297 1.21289C20.0729 0.404297 18.0964 0 16 0ZM16 19.1367C15.4609 19.1367 14.9668 19.0469 14.5176 18.8672C14.0684 18.6875 13.6641 18.418 13.3047 18.0586C12.9453 17.6992 12.6608 17.2949 12.4512 16.8457C12.2415 16.3965 12.1367 15.9023 12.1367 15.3633C12.1367 14.8242 12.2415 14.3151 12.4512 13.8359C12.6608 13.3568 12.9453 12.9674 13.3047 12.668C13.6641 12.3086 14.0684 12.0241 14.5176 11.8145C14.9668 11.6048 15.4609 11.5 16 11.5C16.5391 11.5 17.0332 11.6048 17.4824 11.8145C17.9316 12.0241 18.3359 12.3086 18.6953 12.668C19.0547 12.9674 19.3392 13.3568 19.5488 13.8359C19.7585 14.3151 19.8633 14.8242 19.8633 15.3633C19.8633 15.9023 19.7585 16.3965 19.5488 16.8457C19.3392 17.2949 19.0547 17.6992 18.6953 18.0586C18.3359 18.418 17.9316 18.6875 17.4824 18.8672C17.0332 19.0469 16.5391 19.1367 16 19.1367Z" fill="black" />
//                 </svg>
//               </div>
//               <div className="text-center ">
//                 <h3 className="font-semibold text-lg"> Address</h3>
//               <p className="text-sm max-w-64 mt-1"> 273/1 Maltulpuri, Haridwar Uttarakhand 247667</p>
//               </div>
//             </address>
//             <div className="flex flex-col items-center justify-center gap-3 p-2 md:h-20 rounded-xl not-italic" >
//               <div >
//                 <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
//                   <path d="M42.0469 19.1367L25.3359 2.51562C25.0365 2.21614 24.6771 1.97656 24.2578 1.79688C23.8385 1.61719 23.4193 1.52734 23 1.52734C22.5807 1.52734 22.1615 1.61719 21.7422 1.79688C21.3229 1.97656 20.9635 2.21614 20.6641 2.51562L16.9805 6.10938H11.5V11.6797L3.86328 19.3164V44.4727H42.1367V19.3164L42.0469 19.1367ZM40.4297 19.7656L34.5 25.6953V13.8359L40.4297 19.7656ZM21.7422 3.59375C22.1016 3.23438 22.5208 3.05469 23 3.05469C23.4792 3.05469 23.8984 3.23438 24.2578 3.59375L26.7734 6.10938H19.2266L21.7422 3.59375ZM28.3906 7.63672L32.9727 12.3086V27.2227L29.3789 30.8164L25.3359 26.6836C25.0365 26.3841 24.6771 26.1445 24.2578 25.9648C23.8385 25.7852 23.4193 25.6953 23 25.6953C22.5807 25.6953 22.1615 25.7852 21.7422 25.9648C21.3229 26.1445 20.9635 26.3841 20.6641 26.6836L16.5312 30.8164L13.0273 27.3125V7.63672H28.3906ZM6.28906 19.0469L11.5 13.8359V25.7852L5.48047 19.8555L6.28906 19.0469ZM5.39062 23.0898V21.832L15.4531 31.8945L15.3633 32.0742L5.39062 41.957V23.0898ZM6.55859 42.9453L7.45703 42.1367L21.7422 27.7617C22.1016 27.4622 22.5208 27.3125 23 27.3125C23.4792 27.3125 23.8984 27.4622 24.2578 27.7617L39.4414 42.9453H6.55859ZM40.6094 22.1016V41.957L30.457 31.8945L40.6094 21.7422V22.1016ZM17.6094 12.3086H28.3906V13.8359H17.6094V12.3086ZM17.6094 21.4727H28.3906V23H17.6094V21.4727ZM17.6094 16.8906H25.3359V18.418H17.6094V16.8906Z" fill="black" />
//                 </svg>
//               </div>
//               <div className="text-center">
//                 <h3 className="font-semibold text-lg"> Email address</h3>
//                 <Link href={"mailto:info@navnerds.com"} className="text-sm">info@navnerds.com</Link>
//               </div>
//             </div>
//             <div className="flex flex-col items-center justify-center gap-3 p-2 md:h-20 rounded-xl not-italic" >
//               <div >
//                 <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
//                   <path d="M34.0527 2.33594H13.748C13.4486 2.33594 13.1641 2.38086 12.8945 2.4707C12.625 2.56055 12.4004 2.69531 12.2207 2.875C12.041 3.11458 11.9062 3.35417 11.8164 3.59375C11.7266 3.83333 11.6816 4.10286 11.6816 4.40234V41.5977C11.6816 41.8971 11.7266 42.1667 11.8164 42.4062C11.9062 42.6458 12.041 42.8854 12.2207 43.125C12.4004 43.3047 12.625 43.4395 12.8945 43.5293C13.1641 43.6191 13.4486 43.6641 13.748 43.6641H34.0527C34.3522 43.6641 34.6367 43.6191 34.9062 43.5293C35.1758 43.4395 35.4004 43.3047 35.5801 43.125C35.7598 42.8854 35.8945 42.6458 35.9844 42.4062C36.0742 42.1667 36.1191 41.8971 36.1191 41.5977V4.40234C36.1191 4.10286 36.0742 3.83333 35.9844 3.59375C35.8945 3.35417 35.7598 3.11458 35.5801 2.875C35.4004 2.69531 35.1758 2.56055 34.9062 2.4707C34.6367 2.38086 34.3522 2.33594 34.0527 2.33594ZM34.5918 41.5977C34.5918 41.7773 34.5469 41.9121 34.457 42.002C34.3672 42.0918 34.2324 42.1367 34.0527 42.1367H13.748C13.5684 42.1367 13.4336 42.0918 13.3438 42.002C13.2539 41.9121 13.209 41.7773 13.209 41.5977V34.5H34.5918V41.5977ZM34.5918 32.9727H13.209V8.44531H34.5918V32.9727ZM34.5918 6.91797H13.209V4.40234C13.209 4.22266 13.2539 4.08789 13.3438 3.99805C13.4336 3.9082 13.5684 3.86328 13.748 3.86328H34.0527C34.2324 3.86328 34.3672 3.9082 34.457 3.99805C34.5469 4.08789 34.5918 4.22266 34.5918 4.40234V6.91797ZM21.5645 37.5547H26.2363V39.082H21.5645V37.5547Z" fill="black" />
//                 </svg>
//               </div>
//               <div className="text-center">
//                 <h3 className="font-semibold text-lg"> Contacts info</h3>
//               <Link href={"tel:+919068476495"} className="text-sm">+91 9068476495</Link>
//               </div>
//             </div>

//           </div>

       
//         {/* Main Contact Form */}
//         <form
//           onSubmit={handleSubmit}
//           className="max-w-6xl mx-auto px-4 sm:px-10 lg:px-40 py-10 lg:py-20 rounded-lg shadow-lg"
//           style={{
//             background: "linear-gradient(to right, white 60%, transparent 80%)",
//           }}
//           aria-labelledby="contact-heading"
//         >
//           <h2 id="contact-heading" className="text-2xl font-bold mb-6">
//             Get in touch with us now
//           </h2>

//           {/* Success / Error Messages */}
//           {status.message && (
//             <div
//               className={`mb-4 p-3 rounded-lg text-sm ${status.type === "success"
//                   ? "bg-green-100 text-green-700 border border-green-300"
//                   : "bg-red-100 text-red-700 border border-red-300"
//                 }`}
//             >
//               {status.message}
//             </div>
//           )}

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//             <div>
//               <label htmlFor="name" className="block text-md font-medium mb-1">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 placeholder="Your Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full border-b border-gray-300 focus:outline-none p-2"
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="mobile" className="block text-md font-medium mb-1">
//                 Mobile Number
//               </label>
//               <input
//                 type="tel"
//                 id="mobile"
//                 name="mobile"
//                 placeholder="Your Mobile Number"
//                 value={formData.mobile}
//                 onChange={handleChange}
//                 className="w-full border-b border-gray-300 focus:outline-none p-2"
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block text-md font-medium mb-1">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="Your Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full border-b border-gray-300 focus:outline-none p-2"
//                 required
//               />
//             </div>
//           </div>

//           <div className="my-4">
//             <label htmlFor="query" className="block text-md font-medium mb-1">
//               Query
//             </label>
//             <textarea
//               id="query"
//               name="query"
//               rows="4"
//               placeholder="Tell us more..."
//               value={formData.query}
//               onChange={handleChange}
//               className="w-full border-b border-gray-300 focus:outline-none p-2"
//             />
//           </div>

//           {/* Submit Button with Loading Spinner */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="flex items-center justify-center cursor-pointer text-white px-6 py-2 rounded bg-[#1CCBD7] hover:bg-black transition-colors duration-200 ease-in disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             {loading ? (
//               <>
//                 <svg
//                   className="animate-spin h-5 w-5 mr-2 text-white"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                 >
//                   <circle
//                     className="opacity-25"
//                     cx="12"
//                     cy="12"
//                     r="10"
//                     stroke="currentColor"
//                     strokeWidth="4"
//                   ></circle>
//                   <path
//                     className="opacity-75"
//                     fill="currentColor"
//                     d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
//                   ></path>
//                 </svg>
//                 Submitting...
//               </>
//             ) : (
//               "Send Mail"
//             )}
//           </button>
//         </form>


//         </main>

 
//     </section>
//   );
// }






"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/component/UI/Button";
import { Input } from "@/component/UI/input";
import { Textarea } from "@/component/UI/textarea";
import { Card, CardContent } from "@/component/UI/card";
import Link from "next/link";
import Image from "next/image";

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
      mobile: formData.mobile, // You can rename "subject" to "mobile" if you want that field instead
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
        setFormData({ name: "", email: "", subject: "", message: "" });
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            At Navnerds, we understand that trusting a new team takes time - so
            we’ve created a Trust & Trial Package to let you experience our
            expertise in Microsoft Dynamics 365 Business Central without
            long-term commitments.
          </p>
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
                    <h3 className="font-bold text-gray-900">Email Us</h3>
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
                    <h3 className="font-bold text-gray-900">Call Us</h3>
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
                    <h3 className="font-bold text-gray-900">Visit Us</h3>
                    <p className="text-gray-600">273/1 Maktoolpuri, Haridwar</p>
                    <p className="text-gray-600">Uttarakhand, India 247667</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-br from-cyan-600 to-blue-200 rounded-2xl text-justify hyphens-auto p-8 flex flex-col items-center justify-center text-white">
              <h3 className="text-2xl font-bold mb-2">
                At Navnerds, We Create Values
              </h3>
              <p className="mb-4 text-cyan-50">
                We believe every business deserves a unique digital identity.
                Our team blends creativity and technology to craft solutions
                that truly work. Share your details - we’ll handle the rest.
              </p>
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
