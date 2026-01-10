import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-2">
            <span className="font-display text-xl font-bold gradient-text">Hamdan</span>
            <span className="text-neon-cyan">.</span>
          </div>

          <p className="text-muted-foreground text-sm flex items-center gap-2">
            Made with <Heart size={14} className="text-neon-pink" /> by Jambu Mohammed Hamdan
          </p>

          {/* Scroll to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-neon-cyan transition-colors"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
