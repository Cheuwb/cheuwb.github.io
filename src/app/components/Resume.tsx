import React from 'react';

const Resume = () => {

    const resumePath = "documents/resume.pdf"

    return (
        <div className="ml-auto">
            <a 
                className="flex flex-col items-center justify-center"
                href={resumePath}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="h-12 w-12">
                    <img
                        src="/rian-website/icons/resume.webp"
                        alt="Resume light-mode"
                        className="dark:hidden"
                    />
                    <img
                        src="/rian-website/icons/dark_resume.webp"
                        alt="Resume dark-mode"
                        className="dark:block"
                    />
                </div>
                <span className="text-sm font-medium pt-2 text-gray-700 dark:text-gray-300">
                    Resume
                </span>
            </a>
        </div>
    );
}

export default Resume;