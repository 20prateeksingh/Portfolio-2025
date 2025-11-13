import Link from "next/link";

const imgLogo = "/images/logo.svg";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#e1e1e1] relative">
      {/* Header */}
      <div className="absolute backdrop-blur-sm backdrop-filter bg-[rgba(255,255,255,0.5)] border border-[#f0f0f0] box-border flex h-[90px] items-center justify-between left-[50%] translate-x-[-50%] px-8 py-0 rounded-[4px] top-10 w-[90%] max-w-[1440px] z-50">
        <Link href="/" className="overflow-clip relative shrink-0 w-[50px] h-[50px]">
          <div className="absolute bg-[#e0e0e0] inset-0 rounded-[5px]" />
          <div className="absolute inset-[24%]">
            <img alt="Logo" className="block max-w-none w-full h-full" src={imgLogo} />
          </div>
        </Link>
        <div className="flex font-montserrat font-medium gap-10 items-center text-[#0c120c] text-lg uppercase">
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
      </div>

      {/* Hero Section */}
      <section className="pt-40 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-red-hat font-semibold text-black/90 mb-6">
            About Me
          </h1>
          <p className="text-xl font-montserrat text-grey-2 leading-relaxed">
            I'm a passionate designer and developer who loves creating
            meaningful experiences through code and design.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-40">
        <div className="max-w-none">
          {/* Bio Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-red-hat font-semibold text-black/90 mb-4">Bio</h2>
            <div className="text-grey-2 space-y-4 leading-relaxed font-montserrat">
              <p>
                With a background in both design and development, I bring a
                unique perspective to every project. I believe in creating
                solutions that are not only functional but also beautiful and
                user-centered.
              </p>
              <p>
                My approach combines strategic thinking with creative
                problem-solving, ensuring that every project delivers value to
                both users and businesses.
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-red-hat font-semibold text-black/90 mb-6">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-montserrat font-semibold text-black/90 mb-3">
                  Design
                </h3>
                <ul className="space-y-2 text-grey-2 font-montserrat">
                  <li>• User Experience Design</li>
                  <li>• User Interface Design</li>
                  <li>• Design Systems</li>
                  <li>• Prototyping</li>
                  <li>• User Research</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-montserrat font-semibold text-black/90 mb-3">
                  Development
                </h3>
                <ul className="space-y-2 text-grey-2 font-montserrat">
                  <li>• Frontend Development</li>
                  <li>• React & Next.js</li>
                  <li>• TypeScript</li>
                  <li>• Responsive Design</li>
                  <li>• Performance Optimization</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-red-hat font-semibold text-black/90 mb-6">
              Experience
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-black/20 pl-6">
                <h3 className="text-lg font-montserrat font-semibold text-black/90">
                  Lead UX Designer
                </h3>
                <p className="text-grey-2 mb-2 font-montserrat">Xflowpay • Present</p>
                <p className="text-grey-2 font-montserrat">
                  Leading UX design initiatives and creating user-centered solutions for payment platforms.
                </p>
              </div>
              <div className="border-l-4 border-black/20 pl-6">
                <h3 className="text-lg font-montserrat font-semibold text-black/90">
                  Previous Position
                </h3>
                <p className="text-grey-2 mb-2 font-montserrat">Previous Company • 2020 - 2022</p>
                <p className="text-grey-2 font-montserrat">
                  Description of your role and key achievements. Highlight
                  important projects and impact.
                </p>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-red-hat font-semibold text-black/90 mb-6">Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-montserrat font-semibold text-black/90">
                  Degree Name
                </h3>
                <p className="text-grey-2 font-montserrat">University Name • Year</p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section>
            <h2 className="text-2xl font-red-hat font-semibold text-black/90 mb-4">
              Let's Connect
            </h2>
            <p className="text-grey-2 mb-6 font-montserrat">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:hello@prateeksingh.in"
                className="px-6 py-3 bg-black/90 text-white rounded-lg font-montserrat font-medium hover:bg-black transition-colors"
              >
                Get in Touch
              </a>
              <Link
                href="/case-studies"
                className="px-6 py-3 bg-[rgba(255,255,255,0.2)] text-black border border-[#f0f0f0] rounded-lg font-montserrat font-medium hover:bg-[rgba(255,255,255,0.3)] transition-colors"
              >
                View My Work
              </Link>
              <a
                href="/PrateekSingh_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[rgba(255,255,255,0.2)] text-black border border-[#f0f0f0] rounded-lg font-montserrat font-medium hover:bg-[rgba(255,255,255,0.3)] transition-colors"
              >
                Download Resume
              </a>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute backdrop-blur-sm backdrop-filter bg-[rgba(255,255,255,0.5)] border border-[#f0f0f0] bottom-10 box-border flex font-montserrat font-medium h-[90px] items-center justify-between left-[50%] translate-x-[-50%] px-8 py-0 rounded-[4px] text-base text-black underline w-[90%] max-w-[1440px]">
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
          LinkedIN
        </a>
      </div>
    </div>
  );
}

