"use client";

import { useState } from "react";
import Link from "next/link";

const imgLogo = "/images/logo.svg";

export default function CaseStudyNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar - Fixed, using 12-column grid system */}
      <div className="fixed top-4 sm:top-6 lg:top-10 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6 w-full">
            <div className="col-span-12 backdrop-blur-sm backdrop-filter bg-[rgba(255,255,255,0.5)] border border-[#f0f0f0] box-border flex h-[90px] items-center justify-between px-4 sm:px-6 lg:px-8 py-0 rounded-[4px]">
              <Link href="/" className="overflow-clip relative shrink-0 w-[50px] h-[50px]">
                <div className="absolute bg-[#e0e0e0] inset-0 rounded-[5px]" />
                <div className="absolute inset-[24%]">
                  <img alt="Logo" className="block max-w-none w-full h-full" src={imgLogo} />
                </div>
              </Link>
              
              {/* Desktop Navigation */}
              <div className="hidden sm:flex font-montserrat font-medium gap-8 lg:gap-10 items-center text-[#0c120c] text-base sm:text-lg uppercase">
                <Link href="/#works" className="hover:opacity-70 transition-opacity">
                  Works
                </Link>
                <Link href="/about" className="hover:opacity-70 transition-opacity">
                  About
                </Link>
                <a href="/PrateekSingh_Resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                  Resume
                </a>
              </div>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="sm:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
                aria-label="Toggle menu"
              >
                <span className={`block w-6 h-0.5 bg-[#0c120c] transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-6 h-0.5 bg-[#0c120c] transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-6 h-0.5 bg-[#0c120c] transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-[106px] left-0 right-0 bg-[rgba(255,255,255,0.95)] backdrop-blur-sm border-b border-[#f0f0f0] z-40 transition-all duration-300 sm:hidden ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col py-6 gap-4 font-montserrat font-medium text-[#0c120c] text-base sm:text-lg uppercase">
            <Link href="/#works" className="hover:opacity-70 transition-opacity py-2" onClick={() => setMobileMenuOpen(false)}>
              Works
            </Link>
            <Link href="/about" className="hover:opacity-70 transition-opacity py-2" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <a href="/PrateekSingh_Resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity py-2" onClick={() => setMobileMenuOpen(false)}>
              Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

