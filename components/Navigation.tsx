"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const imgLogo = "/images/Logo_PS.svg";

interface NavigationProps {
  onWorksClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function Navigation({ onWorksClick }: NavigationProps = {}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOverCover, setIsOverCover] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if there's a cover section (hero section with h-screen)
      const coverSection = document.querySelector('section.h-screen');
      if (coverSection) {
        const coverBottom = coverSection.getBoundingClientRect().bottom;
        // Navbar is over cover if cover section's bottom is below the navbar (approximately 100px from top)
        setIsOverCover(coverBottom > 100);
      } else {
        setIsOverCover(false);
      }
    };

    // Check on mount
    handleScroll();
    
    // Check on scroll
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWorksClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onWorksClick) {
      onWorksClick(e);
    } else {
      // Default behavior for non-home pages - just navigate to home with hash
      // No need to prevent default
    }
  };

  return (
    <>
      {/* Navbar - Fixed, using 12-column grid system */}
      <div className="fixed top-4 sm:top-6 lg:top-10 left-0 right-0 z-[9999] pointer-events-none">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pointer-events-none">
          <div className="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6 w-full pointer-events-none">
            <div className={`col-span-12 backdrop-blur-sm backdrop-filter border box-border flex h-[90px] items-center justify-between px-4 sm:px-6 lg:px-8 py-0 rounded-[4px] pointer-events-auto transition-colors duration-300 ${
              isOverCover 
                ? 'bg-[rgba(255,255,255,0.1)] border-[rgba(240,240,240,0.5)]' 
                : 'bg-[rgba(255,255,255,0.5)] border-[#f0f0f0]'
            }`}>
              <Link href="/" className="block shrink-0 w-[50px] h-[50px] cursor-pointer hover:opacity-80 transition-opacity pointer-events-auto">
                <Image alt="Logo" className="block w-full h-full pointer-events-none" src={imgLogo} width={50} height={50} unoptimized />
              </Link>
              
              {/* Desktop Navigation */}
              <div className="hidden sm:flex font-montserrat font-medium gap-8 lg:gap-10 items-center text-[#0c120c] text-base sm:text-lg uppercase pointer-events-auto">
                <a 
                  href="/#works" 
                  onClick={handleWorksClick}
                  className="hover:opacity-70 transition-opacity cursor-pointer pointer-events-auto"
                >
                  Works
                </a>
                <Link href="/about" className="hover:opacity-70 transition-opacity pointer-events-auto">
                  About
                </Link>
                <a href="/PrateekSingh_Resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity pointer-events-auto">
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
      <div className={`fixed top-[114px] left-0 right-0 z-[9998] transition-all duration-300 sm:hidden pointer-events-none ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pointer-events-none">
          <div className={`backdrop-blur-sm backdrop-filter border rounded-[4px] flex flex-col py-6 px-4 gap-4 font-montserrat font-medium text-[#0c120c] text-base sm:text-lg uppercase transition-colors duration-300 ${
            mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
          } ${
            isOverCover 
              ? 'bg-[rgba(255,255,255,0.1)] border-[rgba(240,240,240,0.5)]' 
              : 'bg-[rgba(255,255,255,0.5)] border-[#f0f0f0]'
          }`}>
            <a 
              href="/#works" 
              onClick={(e) => {
                setMobileMenuOpen(false);
                if (onWorksClick) {
                  onWorksClick(e);
                }
              }}
              className="hover:opacity-70 transition-opacity py-2 cursor-pointer"
            >
              Works
            </a>
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

