


const skills = [  "HTML", "CSS","JavaScript", "Python", "React", "Node", "SQL", "Java", 
  "Git", "Bootstrap", "PostgreSQL","TypeScript", "React native", "Data Analysis", "Tableau", "Power BI"];



export default function Skills (){
    
  return(

    <section id="skills" className="section section-alt">
      <div className="container">
        <h2 className="section-title">SKILLS</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-item" data-aos="zoom-in" data-aos-delay="100" key={index}>{skill}</div>
          ))}

        </div>
      </div>
    </section>

    );
}