const Projects = () => {
  const projects = [
    {
      title: "Cloud-Native Microservices",
      description:
        "A cloud-based e-commerce platform designed with scalable AWS services, secure authentication, API integration, containerized workloads, and managed databases.",
      technologies: [
        "AWS",
        "S3",
        "CloudFront",
        "Cognito",
        "API Gateway",
        "ECS",
        "Fargate",
        "DynamoDB",
        "RDS",
        "SNS",
        "SQS",
      ],
      github:
        "https://github.com/VeeraBabu-Devops/aws-ecommerce-platform",
    },

    {
      title: "Three-Tier Web Application Deployment",
      description:
        "Designed and deployed a three-tier LMS application on AWS using EC2, Docker, React, Node.js, and PostgreSQL, with separate application layers and Linux-based deployment.",
      technologies: [
        "AWS",
        "EC2",
        "Docker",
        "React",
        "Node.js",
        "PostgreSQL",
        "Linux",
      ],
      github:
        "https://github.com/VeeraBabu-Devops/LMS-Deployment-AWS",
    },

    {
      title: "Jenkins CI/CD Automation",
      description:
        "Built an automated CI/CD pipeline for application build, testing, code analysis, artifact management, and deployment using Jenkins and modern DevOps tools.",
      technologies: [
        "Jenkins",
        "Git",
        "GitHub",
        "Maven",
        "SonarQube",
        "Nexus",
        "Tomcat",
      ],
      github:
        "https://github.com/VeeraBabu-Devops/Jenkins-CICD-Pipeline",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full max-w-full overflow-x-hidden bg-slate-950 py-24 px-4 sm:px-6 md:px-12 lg:px-16"
    >
      <div className="w-full max-w-7xl mx-auto min-w-0">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-semibold tracking-widest uppercase">
            Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Featured Projects
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto mt-5 text-lg leading-8">
            Practical projects demonstrating my experience with cloud,
            automation, CI/CD, infrastructure, and application deployment.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid w-full max-w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
         >
          {projects.map((project, index) => (
            <div
              key={index}
              className="min-w-0 w-full max-w-full overflow-hidden bg-slate-900 border border-slate-800 rounded-2xl p-6
                         hover:border-cyan-400
                         hover:-translate-y-1
                         transition-all duration-300
                         flex flex-col"
            >

              {/* Project Number */}
              <div className="text-cyan-400 text-sm font-semibold mb-4">
                PROJECT {String(index + 1).padStart(2, "0")}
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 break-words">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 leading-7 mb-6 break-words">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-7 min-w-0">
                {project.technologies.map((technology, techIndex) => (
                  <span
                    key={techIndex}
                    className="max-w-full px-3 py-1.5 rounded-lg
                               bg-slate-800
                               border border-slate-700
                               text-slate-300
                               text-sm
                               break-words
                               hover:border-cyan-400
                               hover:text-cyan-400
                               transition"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* GitHub Button */}
              <div className="mt-auto pt-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center
                             px-5 py-2.5
                             rounded-lg
                             border border-cyan-400
                             text-cyan-400
                             font-medium
                             hover:bg-cyan-400
                             hover:text-slate-950
                             transition"
                >
                  View on GitHub →
                </a>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;
