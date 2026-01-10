import { motion } from "framer-motion";
import { Brain, Eye, MessageSquare, BarChart3, Palette, Code, Bot, Zap } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Brain size={32} />,
      title: "AI & ML Model Development",
      description: "Custom machine learning models tailored to solve your specific business problems with cutting-edge algorithms.",
    },
    {
      icon: <Zap size={32} />,
      title: "Deep Learning Solutions",
      description: "Advanced neural network architectures for complex pattern recognition and decision-making systems.",
    },
    {
      icon: <Eye size={32} />,
      title: "Computer Vision Applications",
      description: "Image and video analysis solutions including object detection, facial recognition, and visual quality inspection.",
    },
    {
      icon: <MessageSquare size={32} />,
      title: "NLP Solutions",
      description: "Chatbots, sentiment analysis, text classification, and language understanding systems for better communication.",
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Data Analysis & Modeling",
      description: "Transform raw data into actionable insights with predictive modeling and comprehensive analytics.",
    },
    {
      icon: <Palette size={32} />,
      title: "Data Visualization",
      description: "Interactive dashboards and visual reports that make complex data easy to understand and act upon.",
    },
    {
      icon: <Code size={32} />,
      title: "AI-Powered Web Apps",
      description: "Full-stack web applications integrated with AI capabilities for intelligent user experiences.",
    },
    {
      icon: <Bot size={32} />,
      title: "Automation Solutions",
      description: "AI-driven automation to streamline workflows, reduce manual work, and improve efficiency.",
    },
  ];

  return (
    <section id="services" className="section-padding bg-card/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-neon-cyan font-medium mb-2">What I offer</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold gradient-text">
            My Services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card p-6 group cursor-default relative overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 to-neon-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 flex items-center justify-center mb-5 group-hover:from-neon-purple/40 group-hover:to-neon-cyan/40 transition-all duration-300">
                  <span className="text-neon-cyan group-hover:text-white transition-colors">
                    {service.icon}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-display text-lg font-semibold mb-3 group-hover:text-neon-cyan transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
