import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight >10 ? setStickyClass("sticky-nav") : setStickyClass("");
    }
  };

  return<div className={`navbar ${stickyClass}`}>Navbar</div>;
  
}
