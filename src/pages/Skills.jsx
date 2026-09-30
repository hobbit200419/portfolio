import "./Skills.css";

const frontendSkills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Vue",
];

const backendSkills = [
  "JavaScript（Node.js、Express）",
];

const programmingLanguages = [ "C", "C++", "Python", ];

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
        <h2 className="category-title">Programming Languages</h2> 
        <div className="skills-grid"> {programmingLanguages.map((language) => ( <div className="skill-card" key={language}> {language} </div> ))} </div>

      </div>
    </section>
  );
}

export default Skills;