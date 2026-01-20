import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";

const ExperienceSection = () => {
  const education = [
    {
      degree: "B.Tech – Artificial Intelligence & Data Science",
      institution: "B.S. Abdur Rahman Crescent Institute of Science and Technology",
      location: "Chennai, India",
      period: "2023 – 2027",
    },
    {
      degree: "Class XII (State Board)",
      institution: "Adarsh Matriculation Higher Secondary School",
      location: "Vaniyambadi, India",
      period: "",
      subjects: "Mathematics, Physics, Chemistry, Computer Science, English",
    },
  ];

  const experiences = [
    {
      title: "Data Analytics Intern",
      company: "TechnoHacks Solutions Pvt. Ltd.",
      description: "Analyzed complex datasets and developed data-driven insights to support business decisions.",
    },
    {
      title: "Machine Learning Intern",
      company: "CodeAlpha Pvt. Ltd.",
      description: "Built and deployed ML models for real-world applications, focusing on predictive analytics.",
    },
    {
      title: "ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING ",
      company: "Elevate Labs Pvt Ltd.",
      description: "Built the AI model for real-world applications, focusing on predictive analytics."
    },
    {
      title: "Data Science Intern",
      company: "NSP Nexus Pvt. Ltd.",
      description: "Developed end-to-end data science solutions including data preprocessing, modeling, and visualization.",
    },
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-neon-cyan font-medium mb-2">My Journey</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold gradient-text">
            Education & Experience
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-neon-purple/20 flex items-center justify-center">
                <GraduationCap className="text-neon-purple" size={24} />
              </div>
              <h3 className="font-display text-2xl font-bold">Education</h3>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-purple to-neon-cyan" />

              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-14 pb-8"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2 top-2 w-6 h-6 rounded-full bg-neon-purple border-4 border-background neon-glow-purple" />
                  
                  <div className="glass-card-hover p-6">
                    <div className="flex items-center gap-2 text-neon-cyan text-sm mb-2">
                      <Calendar size={14} />
                      {edu.period}
                    </div>
                    <h4 className="font-display text-xl font-semibold mb-2">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground mt-1">{edu.location}</p>
                    {"subjects" in edu && edu.subjects ? (
                      <p className="text-sm text-muted-foreground mt-3">
                        <span className="text-foreground/80 font-medium">Subjects:</span> {edu.subjects}
                      </p>
                    ) : null}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-neon-cyan/20 flex items-center justify-center">
                <Briefcase className="text-neon-cyan" size={24} />
              </div>
              <h3 className="font-display text-2xl font-bold">Internships</h3>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan to-neon-purple" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-14 pb-8"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2 top-2 w-6 h-6 rounded-full bg-neon-cyan border-4 border-background neon-glow-cyan" />
                  
                  <div className="glass-card-hover p-6">
                    <h4 className="font-display text-xl font-semibold mb-1">{exp.title}</h4>
                    <p className="text-neon-cyan font-medium mb-3">{exp.company}</p>
                    <p className="text-muted-foreground text-sm">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
