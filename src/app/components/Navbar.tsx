import Image from "next/image";
import React from "react";
import EmptyGridSlot from "./EmptyGridSlot";
import Resume from "./Resume";

const handleCopyEmail = (event) => {
    event.preventDefault();
    const email = event.currentTarget.getAttribute('data-email');

    if (navigator.clipboard) {
        navigator.clipboard.writeText(email).
            then(() => {
                const messageElement = document.getElementById('copyMessage');
                if (messageElement) {
                    messageElement.style.opacity = '1';
                    setTimeout(() => {
                        messageElement.style.opacity = '0';
                    }, 2000);
                }
            })
            .catch(err => {
                console.error('Copy Failed: ', err);
            });
    }
};


const Navbar = ({onIconClick}) => {

    // Define content mapping for each icon
    const iconContentMap = {
        about: { 
            title: "About Brian", 
            content: () => 
            <div className="w-full h-full flex flex-col">
                {/* Summary */}
                <div className="pt-6 p-4 flex flex-col items-center md:flex-row md:pl-15 md:p-8 sticky">
                    <img
                        alt="avatar"
                        loading="lazy"
                        width="512"
                        height="512"
                        decoding="async"
                        src="/rian-website/images/avatar.webp"
                        className="rounded-full w-32 h-32 object-cover" 
                    />
                    <div className="md:pl-9">
                        <div className="text-4xl font-bold text-primary !text-[#275efe] mt-4 text-center md:text-left
                        flex justify-between items-baseline">
                            Brian Cheu
                            <span className="text-2xl font-medium">張正浩</span>
                        </div>
                        {/* ... other content ... */}
                        <div className="text-base md:text-lg text-center md:text-left md:pl-1">
                            Full-stack dev from Canada <br/>
                            Former Software Engineer at
                            <a href="https://ibm.com/" target="_blank" rel="noopener noreferrer">
                                <span
                                className="border-b-4 border-blue-700 ml-2">
                                    <img
                                        src="/rian-website/icons/bee.svg"
                                        alt="Ibm Logo"
                                        className="dark:hidden h-7 w-7 inline align-text-bottom transition-transform duration-200 hover:scale-125"
                                    />
                                    <img
                                        src="/rian-website/icons/dark_bee.webp"
                                        alt="Ibm Logo"
                                        className="dark:inline h-7 w-7 align-text-bottom transition-transform duration-200 hover:scale-125"
                                    />
                                </span>
                            </a>
                        </div>
                    </div>
                    <Resume/>
                </div>
                {/*About me contents*/}
                <div className="p-8">
                    <div className="pt-4 pb-8">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                            Technical Stack
                        </h3>
                        
                        <div className="space-y-6">
                            
                            {/* FRONTEND SECTION */}
                            <div>
                                <h4 className="text-lg font-medium mb-3 text-gray-700 dark:text-gray-300">Frontend & UI</h4>
                                <div className="flex flex-wrap gap-2">
                                    {/* Badge component structure (replace text with your specific tech) */}
                                    <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full dark:bg-blue-900 dark:text-blue-300">
                                        React
                                    </span>
                                    <span className="bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full dark:bg-yellow-700 dark:text-yellow-200">
                                        Next.js
                                    </span>
                                    <span className="bg-teal-100 text-teal-800 text-sm font-semibold px-3 py-1 rounded-full dark:bg-teal-900 dark:text-teal-300">
                                        Tailwind CSS
                                    </span>
                                    {/* <span className="bg-purple-100 text-purple-800 text-sm font-semibold px-3 py-1 rounded-full dark:bg-purple-900 dark:text-purple-300">
                                        Framer Motion
                                    </span> */}
                                </div>
                            </div>
                            
                            {/* BACKEND SECTION */}
                            <div>
                                <h4 className="text-lg font-medium mb-3 text-gray-700 dark:text-gray-300">Backend & API</h4>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full dark:bg-green-900 dark:text-green-300">
                                        Node.js / Express
                                    </span>
                                    <span className="bg-red-100 text-red-800 text-sm font-semibold px-3 py-1 rounded-full dark:bg-red-900 dark:text-red-300">
                                        Python (Django/Flask)
                                    </span>
                                    <span className="bg-orange-100 text-orange-800 text-sm font-semibold px-3 py-1 rounded-full dark:bg-orange-900 dark:text-orange-300">
                                        Java (Sprint Boot)
                                    </span>
                                    <span className="bg-indigo-100 text-indigo-800 text-sm font-semibold px-3 py-1 rounded-full dark:bg-indigo-900 dark:text-indigo-300">
                                        REST api
                                    </span>
                                </div>
                            </div>
                            
                            {/* DATABASE SECTION */}
                            <div>
                                <h4 className="text-lg font-medium mb-3 text-gray-700 dark:text-gray-300">Database & ORM</h4>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-cyan-100 text-cyan-800 text-sm font-semibold px-3 py-1 rounded-full dark:bg-cyan-900 dark:text-cyan-300">
                                        PostgreSQL
                                    </span>
                                    <span className="bg-lime-100 text-lime-800 text-sm font-semibold px-3 py-1 rounded-full dark:bg-lime-900 dark:text-lime-300">
                                        MongoDB (NoSQL)
                                    </span>
                                    <span className="bg-pink-100 text-pink-800 text-sm font-semibold px-3 py-1 rounded-full dark:bg-pink-900 dark:text-pink-300">
                                        MySQL
                                    </span>
                                </div>
                            </div>

                            {/* DEVOPS/TOOLS SECTION */}
                            <div>
                                <h4 className="text-lg font-medium mb-3 text-gray-700 dark:text-gray-300">Tools, DevOps & Cloud</h4>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-fuchsia-100 text-fuchsia-800 text-sm font-semibold px-3 py-1 rounded-full dark:bg-fuchsia-900 dark:text-fuchsia-300">
                                        Git / GitHub
                                    </span>
                                    <span className="bg-purple-100 text-purple-800 text-sm font-semibold px-3 py-1 rounded-full dark:bg-purple-900 dark:text-purple-300">
                                        Vercel / Netlify
                                    </span>
                                    <span className="bg-sky-100 text-sky-800 text-sm font-semibold px-3 py-1 rounded-full dark:bg-sky-900 dark:text-sky-300">
                                        Docker + Kubernetes
                                    </span>

                                    <span className="bg-amber-100 text-amber-800 text-sm font-semibold px-3 py-1 rounded-full dark:bg-amber-900 dark:text-amber-300">
                                        AWS
                                    </span>
                                    {/* <span className="bg-purple-100 text-purple-800 text-sm font-semibold px-3 py-1 rounded-full dark:bg-purple-900 dark:text-purple-300">
                                        Azure
                                    </span> */}
                                </div>
                            </div>

                            {/* Languages */}
                            <div>
                                <h4 className="text-lg font-medium mb-3 text-gray-700 dark:text-gray-300">Langauges</h4>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-slate-100 text-slate-800 text-sm font-semibold px-3 py-1 rounded-full dark:bg-slate-900 dark:text-slate-300">
                                        Java
                                    </span>
                                    <span className="bg-slate-100 text-slate-800 text-sm font-semibold px-3 py-1 rounded-full dark:bg-slate-900 dark:text-slate-300">
                                        Python
                                    </span>
                                    <span className="bg-slate-100 text-slate-800 text-sm font-semibold px-3 py-1 rounded-full dark:bg-slate-900 dark:text-slate-300">
                                        C++
                                    </span>
                                    <span className="bg-slate-100 text-slate-800 text-sm font-semibold px-3 py-1 rounded-full dark:bg-slate-900 dark:text-slate-300">
                                        TypeScript / Javascript
                                    </span>
                                    <span className="bg-slate-100 text-slate-800 text-sm font-semibold px-3 py-1 rounded-full dark:bg-slate-900 dark:text-slate-300">
                                        HTML / CSS
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        },
        projects: {
            title: "Projects",
            content: () => <div>
                    <img
                        alt="Under construction"
                        loading="lazy"
                        decoding="async"
                        src="/rian-website/images/maintenance.webp"
                    />
            </div>
        },
        contact: {
            title: "Contact",
            content: () => <div className="p-1 text-center items-center justify-center flex flex-col">
                <h3 className="text-2xl font-bold mb-2">Send an email!</h3>
                <p className="text-base mb-4 text-gray-600 dark:text-gray-400">
                    Always open to discussing projects, collaborations, and opportunities!
                </p>
                <img
                    alt="Send me an email!"
                    loading="lazy"
                    decoding="async"
                    src="/rian-website/images/mail_me.webp"
                />
                <p className="text-base mb-4 text-gray-600 dark:text-gray-400 mt-4">
                    copy my email to clipboard: 
                <a
                    href="#"
                    id="copyEmailLink"
                    onClick={handleCopyEmail}
                    data-email="briancma219@gmail.com"
                    className="inline-block text-blue-600 hover:text-blue-800 cursor-pointer"
                    aria-label="Click email to copy link "
                >
                    &nbsp; briancma219@gmail.com
                </a>
                <span id="copyMessage" className="ml-3 text-sm text-green-600 opacity-0 transition-opacity duration-500">
                Copied!
                </span>
                </p>
                <a
                    href="mailto:briancma219@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-6 py-3 border border-transparent 
                           text-base font-medium rounded-lg shadow-lg text-white bg-[#275efe] 
                           hover:bg-blue-700 transition-all duration-200 transform hover:scale-[1.02]"
                >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                    Email me via app!
                </a>
            </div>
        },
        links: { 
            title: "Social Links", 
            content: () => <div className="flex flex-col">
                <div className="grid grid-cols-3 grid-rows-2 gap-4 p-4 md:p-0 md:justify-center">
                    <a href="https://github.com/Cheuwb" target="_blaink" rel="nonopener noreferrer">
                        <div>
                            {/* button-image */}
                            <img
                                alt="Github Link"
                                loading="lazy"
                                decoding="async"
                                src="/rian-website/images/githap.webp"
                                width="150"
                                height="150"
                            />
                        </div>
                    </a>
                {/* Empty Social slots */}
                <EmptyGridSlot />
                <EmptyGridSlot />
                <EmptyGridSlot />
                <EmptyGridSlot />
                <EmptyGridSlot />
                </div>
            </div>
        }
    };

    return (
        <div
          className="flex flex-wrap justify-center mt-[var(--icon-container-margin)]"
        >
          {["about", "projects", "links", "contact"].map((item) => (
            <div key={item} className="m-4">
              <button 
                className="bg-transparent duration-200 cursor-pointer hover:scale-105 active:scale-90"
                onClick={() => onIconClick(iconContentMap[item].title, iconContentMap[item].content)}
              >
                <div className="flex flex-col items-center">
                  <Image
                    src={`/rian-website/icons/icon_${item}.webp`}
                    alt={item}
                    width={64}
                    height={64}
                    className="block dark:hidden drop-shadow-flat w-[var(--icon-button-width)]"
                  />
                  <Image
                    src={`/rian-website/icons/icon_${item}_dark.webp`}
                    alt={item}
                    width={64}
                    height={64}
                    className="hidden dark:block drop-shadow-flat w-[var(--icon-button-width)]"
                  />
                  <div className="mt-2 font-mono font-bold text-lg text-gray-700 dark:text-gray-300">
                    {item}
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
    );
};

export default Navbar;