import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Coffee, Gamepad2, Music } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const interests = [
    { icon: Code, label: "Coding" },
    { icon: Coffee, label: "Coffee" },
    { icon: Gamepad2, label: "Gaming" },
    { icon: Music, label: "Music" },
  ];

  return (
    <section id="about" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">About Me</h2>
          <p className="section-subheading">
            Get to know more about who I am and what drives me
          </p>
          <div className="glow-line" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                My Programming Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                My journey into the world of programming began with curiosity and a desire to create. 
                What started as simple HTML pages has evolved into a passion for building complete 
                web applications that solve real-world problems. Over the years, I've dedicated 
                countless hours to mastering modern web technologies and staying current with 
                industry best practices.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and have 
                experience working on diverse projects ranging from e-commerce platforms to 
                real-time collaboration tools. I believe in writing clean, maintainable code 
                and creating intuitive user experiences that delight users.
              </p>
            </div>

            <div className="glass-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                What I Love Building
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm particularly passionate about building scalable full-stack applications 
                with seamless user experiences. Whether it's crafting pixel-perfect UIs, 
                designing robust APIs, or optimizing database queries, I enjoy every aspect 
                of the development process. I'm always eager to learn new technologies and 
                take on challenging projects that push my skills to the next level.
              </p>
            </div>
          </motion.div>

          {/* Stats & Interests */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "3+", label: "Years Experience" },
                { value: "20+", label: "Projects Completed" },
                { value: "15+", label: "Happy Clients" },
                { value: "10+", label: "Technologies" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="glass-card-hover p-6 text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Interests */}
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Beyond Coding
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or enjoying a good cup of coffee 
                while gaming. I believe in maintaining a healthy work-life balance and 
                finding inspiration in various creative outlets.
              </p>
              <div className="flex flex-wrap gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full"
                  >
                    <interest.icon size={18} className="text-primary" />
                    <span className="text-foreground text-sm">{interest.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
