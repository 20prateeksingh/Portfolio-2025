export default function Footer() {
  return (
    <div className="backdrop-blur-sm backdrop-filter bg-[rgba(255,255,255,0.5)] border border-[#f0f0f0] box-border flex flex-col sm:flex-row font-montserrat font-medium min-h-[90px] h-auto sm:h-[90px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 py-4 sm:py-0 rounded-[4px] text-sm sm:text-base text-black underline w-full max-w-7xl mx-auto">
      <a
        href="mailto:hello@prateeksingh.in"
        className="decoration-solid hover:opacity-70 transition-opacity"
      >
        hello@prateeksingh.in
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="decoration-solid hover:opacity-70 transition-opacity"
      >
        LinkedIn
      </a>
    </div>
  );
}

