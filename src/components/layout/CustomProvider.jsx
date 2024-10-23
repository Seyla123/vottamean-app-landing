import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

const CustomProvider = ({ children }) => {
  return (
    <BrowserRouter>
      <ReactLenis root>
        <Navbar />
        <main className="w-full max-w-7xl mx-auto px-4 py-16">{children}</main>
      </ReactLenis>
    </BrowserRouter>
  );
};

export default CustomProvider;
