"use client";

import { trackEvent } from "@/lib/analytics";

const Footer = () => {
  return (
    <footer className="bg-slate-950">
      <div className="container mx-auto px-4 max-w-6xl h-15 flex items-center justify-center text-sm md:text-md">
        <p>
          &copy; {new Date().getFullYear()} | Developed by{" "}
          <a
            href="https://github.com/kishanlalbj"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent("social_link_click", {
                platform: "github",
                location: "footer"
              })
            }
          >
            @kishanlalbj
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
