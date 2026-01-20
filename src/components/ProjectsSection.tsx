import { motion } from "framer-motion";
import { Github, Bot, Eye, FileText, Brain, MessageCircle, Shield } from "lucide-react";

const ProjectsSection = () => {
  const majorProjects = [
    {
      title: "AI-Powered Conversational Chatbot",
      description: "A ChatGPT-like conversational AI system built with advanced NLP models for natural human-computer interaction.",
      icon: <Bot size={28} />,
      tags: ["NLP", "Transformers", "Python", "Streamlit"],
    },
    {
      title: "AR-Based Cultural Heritage Preservation",
      description: "Augmented reality system for preserving and experiencing cultural heritage sites digitally.",
      icon: <Eye size={28} />,
      tags: ["Computer Vision", "AR", "Deep Learning", "3D"],
    },
    {
      title: "MetaJudge: AI Chatbot Validator",
      description: "AI-powered system to validate and score chatbot responses for quality and accuracy.",
      icon: <Shield size={28} />,
      tags: ["NLP", "ML", "Quality Analysis", "Python"],
    },
    {
      title: "Face Mask Detection with Live Alert",
      description: "Real-time face mask detection system with live video feed and instant alert notifications.",
      icon: <Eye size={28} />,
      tags: ["OpenCV", "CNN", "Real-time", "Alert System"],
    },
    {
      title: "Automated Document Classification",
      description: "Deep learning model for automatic categorization of documents based on content analysis.",
      icon: <FileText size={28} />,
      tags: ["Deep Learning", "NLP", "Classification", "OCR"],
    },
    {
      title: "News Article Classification Engine",
      description: "ML-powered system for categorizing news articles into relevant topics using NLP techniques.",
      icon: <MessageCircle size={28} />,
      tags: ["NLP", "Machine Learning", "Text Classification"],
    },
  ];

  const miniProjects = [
    "Handwritten Character Recognition using Deep Learning",
    "Fake News Classification Engine using NLP",
    "Customer Sentiment Analysis Platform for E-commerce",
    "Disease Prediction from Medical Data",
    "Data Analytics & Visualization Suite in Excel",
    "Comprehensive Data Science Analytics Portfolio",
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-neon-cyan font-medium mb-2">Featured Work</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold gradient-text">
            My Projects
          </h2>
        </motion.div>

        {/* Major Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {majorProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card-hover p-6 group"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 flex items-center justify-center mb-4 group-hover:from-neon-purple/40 group-hover:to-neon-cyan/40 transition-all duration-300">
                <span className="text-neon-cyan group-hover:text-white transition-colors">
                  {project.icon}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-neon-cyan transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-secondary/50 rounded text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-4 border-t border-border">
                <button
                  type="button"
                  aria-label="View code on GitHub"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border bg-secondary/20 text-muted-foreground hover:text-neon-cyan hover:border-neon-cyan/50 transition-colors"
                >
                  <Github size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mini Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Brain className="text-neon-purple" size={24} />
            <h3 className="font-display text-2xl font-bold">More Projects</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {miniProjects.map((project, index) => (
              <motion.div
                key={project}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/30 transition-colors cursor-default"
              >
                <div className="w-2 h-2 rounded-full bg-neon-cyan mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {project}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
