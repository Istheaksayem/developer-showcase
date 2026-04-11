import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, Github, Linkedin, Facebook, Download } from "lucide-react";
import { profileImage, socialLinks } from "@/data/portfolioData";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax background
    const ctx = gsap.context(() => {
      // Intro animation
      gsap.from(".hero-text > *", {
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out"
      });

      gsap.from(imageRef.current, {
        x: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out"
      });

      // Mouse parallax effect for background blobs
      if (containerRef.current) {
        containerRef.current.addEventListener('mousemove', (e) => {
          const { clientX, clientY } = e;
          const x = (clientX / window.innerWidth - 0.5) * 40;
          const y = (clientY / window.innerHeight - 0.5) * 40;

          gsap.to(".bg-blob-1", { x: x, y: y, duration: 1, ease: "power2.out" });
          gsap.to(".bg-blob-2", { x: -x, y: -y, duration: 1, ease: "power2.out" });
        });
      }

      // Scroll Parallax
      gsap.to(bgRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div ref={bgRef} className="absolute inset-0 overflow-hidden w-full h-full pointer-events-none">
        <div className="bg-blob-1 absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[100px] animate-float" />
        <div className="bg-blob-2 absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/30 rounded-full blur-[100px]" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content - Glassmorphism Container */}
          <div
            ref={textRef}
            className="hero-text flex-1 text-center lg:text-left bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl relative overflow-hidden"
          >
            {/* Soft gradient flare inside the glass card */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl z-[-1]" />

            <p className="text-primary font-mono text-sm md:text-base mb-4 inline-block px-4 py-1.5 bg-white/10 rounded-full border border-white/5 shadow-inner">
              👋 Hello, I'm
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="text-foreground drop-shadow-sm">MERN Stack</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#a855f7] to-accent drop-shadow-lg">
                Web Developer
              </span>
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
              Motivated MERN Stack Developer with 1+ year of experience and strong foundations in modern web technologies,
              including JavaScript, React, MongoDB, and Node.js, along with 12+ completed projects. Seeking an opportunity to build
              scalable, user-friendly applications while continuously enhancing my development skills.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <a
                href="/MERN_STUCK-DEVELOPER -  Istheak Ahmed.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2 hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(var(--primary),0.3)] bg-primary/90 hover:bg-primary"
              >
                <Download size={20} />
                Download Resume
              </a>
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-outline hover:bg-white/10 backdrop-blur-md transition-all duration-300 hover:scale-105 border-white/20"
              >
                View Projects
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="social-icon hover:-translate-y-1.5 transition-all duration-300 bg-white/5 p-3 rounded-full border border-white/10 hover:bg-white/20 shadow-lg">
                <Github size={20} />
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon hover:-translate-y-1.5 transition-all duration-300 bg-white/5 p-3 rounded-full border border-white/10 hover:bg-white/20 shadow-lg">
                <Linkedin size={20} />
              </a>
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="social-icon hover:-translate-y-1.5 transition-all duration-300 bg-white/5 p-3 rounded-full border border-white/10 hover:bg-white/20 shadow-lg">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Profile Image - Glassmorphism & Glow */}
          <div
            ref={imageRef}
            className="flex-1 flex justify-center lg:justify-end relative"
          >
            <div className="relative group perspective-1000">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary via-purple-500 to-accent rounded-full blur-[80px] opacity-40 group-hover:opacity-70 transition-opacity duration-700 animate-pulse-glow z-[-1]" />

              {/* Image Container with Glassmorphism ring */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white/10 backdrop-blur-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-float">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 relative z-0"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 -right-4 w-12 h-12 bg-primary/40 backdrop-blur-md border border-white/20 rounded-full shadow-xl animate-bounce" />
              <div className="absolute bottom-8 -left-4 w-8 h-8 bg-accent/40 backdrop-blur-md border border-white/20 rounded-full shadow-xl animate-pulse" style={{ animationDelay: "1s" }} />
              <div className="absolute -bottom-4 right-10 w-6 h-6 bg-purple-500/40 backdrop-blur-md border border-white/20 rounded-full shadow-xl animate-float" style={{ animationDelay: "1.5s" }} />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors flex flex-col items-center gap-2 group"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase opacity-70 group-hover:opacity-100 transition-opacity">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 group-hover:border-primary/50 flex justify-center p-1 transition-colors">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce mt-1" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
