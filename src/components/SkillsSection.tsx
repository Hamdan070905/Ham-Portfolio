import { motion } from "framer-motion";
import { Brain, Code, Database, Eye, MessageSquare, Workflow, BarChart3, Cpu } from "lucide-react";

const SkillsSection = () => {
  const coreExpertise = [
    { icon: <Brain size={24} />, name: "Deep Learning & Neural Networks" },
    { icon: <Eye size={24} />, name: "Computer Vision & Image Recognition" },
    { icon: <MessageSquare size={24} />, name: "NLP & Text Analytics" },
    { icon: <BarChart3 size={24} />, name: "Predictive Modeling" },
    { icon: <Database size={24} />, name: "Data Engineering & ETL" },
    { icon: <Workflow size={24} />, name: "AI-Driven Automation" },
    { icon: <Cpu size={24} />, name: "Real-time Data Processing" },
  ];

  const technicalSkills = {
    "Programming": ["Python", "SQL", "Java", "C++", "R"],
    "ML/DL": ["TensorFlow", "Keras", "PyTorch", "Scikit-learn"],
    "Computer Vision": ["OpenCV", "CNNs", "YOLO"],
    "NLP": ["NLTK", "SpaCy", "Transformers", "BERT"],
    "Data & Viz": ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Power BI"],
    "Tools": ["Streamlit", "Jupyter", "Hadoop", "Spark"],
    "Web Frameworks": ["Flask", "Django", "FastAPI"],
  };

  return (
    <section id="skills" className="section-padding bg-card/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-neon-cyan font-medium mb-2">What I do best</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold gradient-text">
            Skills & Expertise
          </h2>
        </motion.div>

        {/* Core Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="font-display text-2xl font-bold mb-8 text-center">Core Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {coreExpertise.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card-hover p-6 text-center group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 flex items-center justify-center mx-auto mb-4 group-hover:from-neon-purple/40 group-hover:to-neon-cyan/40 transition-all duration-300">
                  <span className="text-neon-cyan group-hover:text-white transition-colors">
                    {skill.icon}
                  </span>
                </div>
                <p className="font-medium text-sm">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-display text-2xl font-bold mb-8 text-center">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(technicalSkills).map(([category, skills], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <h4 className="font-display font-semibold text-neon-cyan mb-4 flex items-center gap-2">
                  <Code size={18} />
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1.5 bg-secondary rounded-full text-sm font-medium hover:bg-neon-purple/20 hover:text-neon-purple transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
