import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Lightbulb } from "lucide-react";
import { projects } from "@/data/portfolioData";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Link to="/" className="btn-primary inline-flex items-center gap-2">
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            {project.description}
          </p>
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <div className="glass-card overflow-hidden rounded-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto max-h-[500px] object-cover"
            />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-6 md:p-8"
            >
              <h2 className="text-2xl font-bold text-foreground mb-4">About the Project</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.fullDescription}
              </p>
            </motion.div>

            {/* Challenges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-card p-6 md:p-8"
            >
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle2 className="text-primary" size={24} />
                Challenges Faced
              </h2>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {challenge}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Improvements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass-card p-6 md:p-8"
            >
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Lightbulb className="text-primary" size={24} />
                Future Improvements
              </h2>
              <ul className="space-y-3">
                {project.improvements.map((improvement, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    {improvement}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-bold text-foreground mb-4">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-2 bg-secondary rounded-lg text-primary font-mono text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-card p-6 space-y-4"
            >
              <h3 className="text-xl font-bold text-foreground mb-4">Project Links</h3>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full flex items-center justify-center gap-2"
              >
                <Github size={18} />
                View Source Code
              </a>
            </motion.div>

            {/* Other Projects */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-bold text-foreground mb-4">Other Projects</h3>
              <div className="space-y-3">
                {projects
                  .filter((p) => p.id !== project.id)
                  .slice(0, 3)
                  .map((p) => (
                    <Link
                      key={p.id}
                      to={`/project/${p.id}`}
                      className="block p-3 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
                    >
                      <div className="text-foreground font-medium hover:text-primary transition-colors">
                        {p.title}
                      </div>
                      <div className="text-muted-foreground text-sm line-clamp-1">
                        {p.description}
                      </div>
                    </Link>
                  ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
