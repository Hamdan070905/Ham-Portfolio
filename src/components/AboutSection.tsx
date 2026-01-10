import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const AboutSection = () => {
  const stats = [
    { label: "Projects Completed", value: "15+" },
    { label: "Internships", value: "3" },
    { label: "AI Domains", value: "6+" },
  ];

  return (
    <section id="about" className="section-padding bg-card/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-neon-cyan font-medium mb-2">Get to know me</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold gradient-text">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 rounded-3xl blur-2xl" />
              <div className="relative glass-card p-4 rounded-3xl">
                <img
                  src={profilePhoto}
                  alt="Jambu Mohammed Hamdan"
                  className="w-full rounded-2xl object-cover aspect-[4/5]"
                />
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm <span className="text-foreground font-semibold">Jambu Mohammed Hamdan</span>, a passionate undergraduate pursuing B.Tech in Artificial Intelligence & Data Science at B.S. Abdur Rahman Crescent Institute of Science and Technology, Chennai.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I have a strong foundation in machine learning, deep learning, computer vision, NLP, and AI-driven automation, with hands-on experience through internships and real-world projects. I enjoy solving complex problems and building innovative AI solutions that make a difference.
            </p>

            {/* Info Cards */}
            <div className="space-y-4 mb-8">
              {[
                { icon: <MapPin className="text-neon-cyan" />, label: "Location", value: "Vaniyambadi, Tamil Nadu, India" },
                { icon: <GraduationCap className="text-neon-purple" />, label: "Education", value: "B.Tech AI & Data Science" },
                { icon: <Briefcase className="text-neon-pink" />, label: "Current Role", value: "AI & Data Science Student" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 glass-card-hover p-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-center glass-card p-4"
                >
                  <p className="font-display text-3xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
