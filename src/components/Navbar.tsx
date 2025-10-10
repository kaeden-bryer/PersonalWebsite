import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

// note for future self:
// I'm suspect of this working correctly
// when using the about and contact links from home, it should scroll down
// but when using them from another page, it should navigate to home and then scroll down
// I think this will require some javascript to check if the current page is home or not
// and then either scroll or navigate and then scroll

function Navbar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // ensure we only render the portal on the client
    setMounted(true);
  }, []);

  const nav = (
    <div className="fixed top-0 left-0 w-screen z-[9999] pointer-events-auto">
      <div className="glass-container mx-auto w-[80%] h-16 flex flex-row items-center justify-self-center justify-center mt-5">
        <ul className="flex flex-row list-none justify-evenly w-full">
          <li className="text-gray-800 px-4 text-lg hover:text-gray-300">
            <a href="/">&lt; KB /&gt;</a>
          </li>
          <li className="text-gray-800 px-4 text-lg hover:text-gray-300">
            <a href="#about">About</a>
          </li>
          <li className="text-gray-800 px-4 text-lg hover:text-gray-300">
            <a href="/blog">Journals</a>
          </li>
          <li className="text-gray-800 px-4 text-lg hover:text-gray-300">
            <a href="/projects">Projects</a>
          </li>
          <li className="text-gray-800 px-4 text-lg hover:text-gray-300">
            <a href="#contact">Contact</a>
          </li>
          <li className="text-gray-800 px-4 text-lg hover:text-gray-300">
            <a href="Resume.pdf">Resume</a>
          </li>
        </ul>
      </div>
    </div>
  );

  if (!mounted) return null;
  return createPortal(nav, document.body);
}

export default Navbar;
