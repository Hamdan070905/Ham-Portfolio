import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

type Certification = {
  name: string;
  issuer: string;
  url?: string;
};

const CertificationsSection = () => {
  const certifications: Certification[] = [
    { name: "Python 3.4.3", issuer: "IIT Bombay", url: "https://drive.google.com/file/d/1UNJQZlVEzHSZqHJA8ID_IKoi5aeY8mc7/view?usp=drive_link" },
    { name: "Intermediate SQL", issuer: "HackerRank", url: "https://drive.google.com/file/d/1zi6omSHkhXP-3H9ljegOZTGmyAXkjiSf/view?usp=drive_link" },
    { name: "Python Basic", issuer: "HackerRank", url: "https://drive.google.com/file/d/1BAjrxNgxqrDWQG3Hn90ojrAbo2v5aTU5/view?usp=drive_link" },
    { name: "Introduction to Generative AI Studio", issuer: "Simple Learn", url: "https://drive.google.com/file/d/1ARSNMI5jNayNTGUy_2sxsYpjyygdTk2Y/view?usp=drive_link" },
    { name: "Python for Data Science", issuer: "IBM", url: "https://drive.google.com/file/d/1L0_k4xhGKx3qZJZSHvUC2XeeTdbDK0u2/view?usp=drive_link" },
    { name: "Learning Data Mining with R", issuer: "Infosys Springboard", url: "https://drive.google.com/file/d/1LYO335WeBY9NRSiP1q5ZJLbVZhv9EpGv/view?usp=drive_link" },
    { name: "JOY OF PYTHON", issuer: "NPTEL", url: "https://drive.google.com/file/d/1hKR1W-JkhZpBbOcv1-AZ2XE3OQ6qrzDf/view?usp=drive_link" },
    { name: "DSA in Python", issuer: "Infosys Springboard", url: "https://drive.google.com/file/d/1-Uo_JrJc71Pl3yOaKxHMP4Y6wHW60-Y-/view?usp=drive_link" },
    { name: "AI Tools Workshop", issuer: "Be 10x", url: "https://drive.google.com/file/d/1ExwsjimX8kkw7cysKRbGurFmZncRBFC4/view?usp=drive_link" },
    { name: "AWS Cloud Practitioner Essentials", issuer: "AWS", url: "https://drive.google.com/file/d/1ARSNMI5jNayNTGUy_2sxsYpjyygdTk2Y/view?usp=drive_link" },
    { name: "Introduction to SQL", issuer: "SimpleLearn", url: "https://drive.google.com/file/d/1N2FRV4WNM7wADPZyWfw9dprc_e_g9veQ/view?usp=drive_link" },
    { name: "R Training & Test", issuer: "IIT Bombay", url: "https://drive.google.com/file/d/1UNJQZlVEzHSZqHJA8ID_IKoi5aeY8mc7/view?usp=sharing" },
  ];

  return (
    <section id="certifications" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-neon-cyan font-medium mb-2">Credentials</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold gradient-text">Certifications</h2>
        </motion.div>

        <div className="glass-card p-8">
          <div className="flex items-center gap-3 mb-6">
            <Award className="text-neon-purple" size={24} />
            <h3 className="font-display text-2xl font-bold">My Certifications</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => {
              const hasUrl = Boolean(cert.url && cert.url.trim().length > 0);

              return (
                <motion.div
                  key={`${cert.name}-${cert.issuer}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="glass-card-hover p-4 flex items-start justify-between gap-4"
                >
                  <div className="min-w-0">
                    <p className="font-medium truncate">{cert.name}</p>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>

                  {hasUrl ? (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View certificate: ${cert.name}`}
                      className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border bg-secondary/30 text-muted-foreground hover:text-neon-cyan hover:border-neon-cyan/50 transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  ) : (
                    <span
                      title="Add certificate link"
                      className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border bg-secondary/10 text-muted-foreground/60"
                    >
                      <ExternalLink size={18} />
                    </span>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
