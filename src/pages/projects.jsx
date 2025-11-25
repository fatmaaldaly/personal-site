import { projects } from "../assets/data/projects";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

export default function Projects() {
  return (
    <section className="section">

      <div className="container">
        <div className="samples-grid">
          {projects.map((project) => (
            <div
              className="sample-card"
              key={project.id}
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="sample-image">
                <img
                  src={project.image}
                  alt={project.title + " preview"}
                />
              </div>

              <div className="sample-content">
                <h4>{project.title}</h4>

                <p>
                  <strong>{project.category}</strong>
                  <br />
                  {project.description}
                </p>

                <div className="sample-buttons">
                  <Link to={project.link} className="btn-view">
                    View project
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
