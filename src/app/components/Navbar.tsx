import Image from "next/image";
import Link from "next/link";
import React from "react";


const Navbar = ({onIconClick}) => {

    // Define content mapping for each icon
    const iconContentMap = {
        about: { 
            title: "About Brian", 
            content: () => <p>My background and story here 
                aaaaaaaa
                aaaaaaaa
                aaaaaaaa
                aaaaaaaa
                aaaaaaaa
                aaaaaaaa
                aaaaaaaa
                aaaaaaaa
                aaaaaaaa
                aaaaaaaa
                aaaaaaaaaaaaaaaa
                aaaaaaaa
                aaaaaaaa
                aaaaaaaa
                aaaaaaaa
                .</p> // Placeholder content
        },
        projects: {
            title: "Projects",
            content: () => <p>Projects I've worked on</p>
        },
        contact: {
            title: "Contact",
            content: () => <p>briancma219@gmail.com</p>
        },
        links: { 
            title: "Social Links", 
            content: () => <p>Find me on GitHub and LinkedIn.</p> // Placeholder content
        }
    };

    return (
        <div
          className="flex flex-wrap justify-center mt-[var(--icon-container-margin)]"
        >
          {["about", "projects", "contact", "links"].map((item) => (
            <div key={item} className="m-4">
              <button 
                className="bg-transparent duration-200 cursor-pointer hover:scale-105 active:scale-90"
                onClick={() => onIconClick(iconContentMap[item].title, iconContentMap[item].content)}
              >
                <div className="flex flex-col items-center">
                  <Image
                    src={`/icons/icon_${item}.webp`}
                    alt={item}
                    width={64}
                    height={64}
                    className="block dark:hidden drop-shadow-flat w-[var(--icon-button-width)]"
                  />
                  <Image
                    src={`/icons/icon_${item}_dark.webp`}
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