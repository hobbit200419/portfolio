import "./Skills.css";

const frontendSkills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
];

const backendSkills = [
  "Node.js",
  "Express.js",
  "MySQL",
];

const tools = [
  "Git",
  "GitHub",
  "VS Code",
  "Figma",
];

function Skills() {
  return (
    <section className="skills">
      <div className="skills-container">

        <h1 className="skills-title">
          My Skills
        </h1>

        {/* Frontend */}
        <h2 className="category-title">Frontend</h2>

        <div className="skills-grid">
          {frontendSkills.map((skill) => (
            <div className="skill-card" key={skill}>
              {skill}
            </div>
          ))}
        </div>

        {/* Backend */}
        <h2 className="category-title">Backend</h2>

        <div className="skills-grid">
          {backendSkills.map((skill) => (
            <div className="skill-card" key={skill}>
              {skill}
            </div>
          ))}
        </div>

        {/* Tools */}
        <h2 className="category-title">Tools</h2>

        <div className="skills-grid">
          {tools.map((tool) => (
            <div className="skill-card" key={tool}>
              {tool}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;