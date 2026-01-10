import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Sparkles, Brain, Code, Database } from "lucide-react";
import { Button } from "./ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";
import { useRef } from "react";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set(e.clientX - rect.left - rect.width / 2);
      mouseY.set(e.clientY - rect.top - rect.height / 2);
    }
  };

  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-5, 5]), springConfig);

  const techStack = [
    { icon: Brain, label: "AI/ML" },
    { icon: Code, label: "Python" },
    { icon: Database, label: "Data Science" },
  ];

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      id="home" 
      className="min-h-screen hero-gradient relative overflow-hidden flex items-center"
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Gradient orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-neon-purple/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-neon-cyan/10 rounded-full blur-[150px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.3, 0.15],
            x: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-neon-pink/10 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-cyan/60 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-32 right-1/4 w-20 h-20 border border-neon-cyan/30 rounded-xl rotate-45"
          animate={{ 
            y: [-15, 15, -15], 
            rotate: [45, 90, 45],
            borderColor: ["rgba(0,255,255,0.3)", "rgba(139,92,246,0.3)", "rgba(0,255,255,0.3)"]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-12 h-12 border border-neon-purple/40"
          animate={{ 
            y: [10, -10, 10], 
            rotate: [0, 180, 360] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-10 w-8 h-8 bg-gradient-to-br from-neon-purple/30 to-neon-cyan/30 rounded-full"
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 mb-6"
            >
              <motion.span 
                className="w-2 h-2 bg-neon-cyan rounded-full"
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-neon-cyan text-sm font-medium">Available for opportunities</span>
              <Sparkles className="w-4 h-4 text-neon-cyan" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-[1.1]"
            >
              <span className="text-foreground">Hi, I'm</span>
              <br />
              <span className="gradient-text">Jambu Mohammed</span>
              <br />
              <span className="relative inline-block">
                <span className="gradient-text-accent">Hamdan</span>
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 8"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                >
                  <motion.path
                    d="M 0 4 Q 50 0 100 4 Q 150 8 200 4"
                    fill="none"
                    stroke="url(#underlineGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="underlineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(180, 100%, 50%)" />
                      <stop offset="100%" stopColor="hsl(270, 100%, 65%)" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </span>
            </motion.h1>

            {/* Animated Role Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {["AI Engineer", "ML Engineer", "Data Scientist"].map((role, index) => (
                <motion.span
                  key={role}
                  className="px-3 py-1.5 text-sm md:text-base font-medium rounded-lg bg-card/60 border border-glass-border text-muted-foreground backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    borderColor: "hsl(var(--neon-cyan))",
                    color: "hsl(var(--neon-cyan))"
                  }}
                >
                  {role}
                </motion.span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed"
            >
              Passionate AI & Data Science undergraduate crafting intelligent, 
              real-world solutions that push the boundaries of what's possible.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Button variant="hero" size="lg" asChild className="group">
                <a href="#projects">
                  View Projects 
                  <motion.span
                    className="ml-2 inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.span>
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-6"
            >
              <span className="text-sm text-muted-foreground">Find me on</span>
              <div className="flex gap-3">
                {[
                  { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/mohammed-hamdan-7337ba288", label: "LinkedIn" },
                  { icon: <Github size={20} />, href: "https://github.com/Hamdan070905", label: "GitHub" },
                  { icon: <Mail size={20} />, href: "mailto:mohammedhamdanj07@gmail.com", label: "Email" },
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl border border-glass-border bg-card/40 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-neon-cyan hover:border-neon-cyan/50 hover:bg-neon-cyan/10 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end perspective-1000"
          >
            <motion.div 
              className="relative"
              style={{ 
                rotateX,
                rotateY,
                transformStyle: "preserve-3d"
              }}
            >
              {/* Multi-layer glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/40 to-neon-cyan/40 rounded-3xl blur-[60px] scale-110" />
              <div className="absolute inset-0 bg-gradient-to-tr from-neon-pink/20 to-transparent rounded-3xl blur-[80px] scale-125" />
              
              {/* Main card */}
              <motion.div
                className="relative w-80 h-96 md:w-[380px] md:h-[480px] rounded-3xl overflow-hidden border border-glass-border bg-gradient-to-b from-card/80 to-card/40 backdrop-blur-xl shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Profile Image */}
                <div className="absolute inset-0">
                  <img
                    src={profilePhoto}
                    alt="Jambu Mohammed Hamdan"
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-transparent to-neon-cyan/10" />
                </div>

                {/* Card content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-xs text-muted-foreground">Open to work</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Mohammed Hamdan</h3>
                    <p className="text-sm text-muted-foreground">AI & Data Science Student</p>
                    
                    {/* Tech stack pills */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {techStack.map((tech, index) => (
                        <motion.div
                          key={tech.label}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card/60 border border-glass-border text-xs font-medium text-muted-foreground backdrop-blur-sm"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1 + index * 0.1 }}
                          whileHover={{ borderColor: "hsl(var(--neon-cyan))", color: "hsl(var(--neon-cyan))" }}
                        >
                          <tech.icon className="w-3 h-3" />
                          {tech.label}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-neon-purple to-neon-cyan flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </motion.div>

              {/* Floating elements around card */}
              <motion.div
                className="absolute -top-4 -left-4 w-20 h-20 rounded-2xl bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 border border-glass-border backdrop-blur-sm flex items-center justify-center"
                animate={{ y: [-5, 5, -5], rotate: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{ transform: "translateZ(40px)" }}
              >
                <Brain className="w-8 h-8 text-neon-purple" />
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -right-6 w-16 h-16 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 border border-glass-border backdrop-blur-sm flex items-center justify-center"
                animate={{ y: [5, -5, 5], rotate: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ transform: "translateZ(30px)" }}
              >
                <Code className="w-7 h-7 text-neon-cyan" />
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-8 w-14 h-14 rounded-lg bg-gradient-to-br from-neon-pink/20 to-neon-purple/20 border border-glass-border backdrop-blur-sm flex items-center justify-center"
                animate={{ x: [0, 5, 0], y: [-3, 3, -3] }}
                transition={{ duration: 6, repeat: Infinity }}
                style={{ transform: "translateZ(50px)" }}
              >
                <Database className="w-6 h-6 text-neon-pink" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-xs text-muted-foreground">Scroll to explore</span>
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
            animate={{ borderColor: ["rgba(255,255,255,0.2)", "rgba(0,255,255,0.4)", "rgba(255,255,255,0.2)"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-1.5 bg-neon-cyan rounded-full"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
