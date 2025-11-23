
const experience = [
    {
        title: "Full Stack Data Scientist Intern",  
        company: "Fixed Solutions",
        date: "05/2025 - 07/2025",
        responsibilities: [ 
            "Developed responsive web and mobile applications using React.js and React Native, ensuring optimal user experience across platforms. Integrated an AI model into the application for predictive features.",
            "Built an AI agent with n8n for automated PDF invoice data extraction, improving workflow efficiency.",
            "Applied CRISP-DM methodology for data analysis, delivering actionable insights through effective data preprocessing and modeling."
        ]
    },
    {
        title: "Full Stack Data Scientist Intern",  
        company: "Fixed Solutions",
        date: "05/2025 - 07/2025",
        responsibilities: [ 
            "Developed responsive web and mobile applications using React.js and React Native, ensuring optimal user experience across platforms. Integrated an AI model into the application for predictive features.",
            "Built an AI agent with n8n for automated PDF invoice data extraction, improving workflow efficiency.",
            "Applied CRISP-DM methodology for data analysis, delivering actionable insights through effective data preprocessing and modeling."
        ]
    }
]               




export default function Experience() {

    return(
    <section id="experience" className="section"  data-aos="fade-up" data-aos-duration="1000">
      <div className="container">
        <h2 className="section-title">EXPERIENCE</h2>
        <div className="experience-grid">
          
            
              {experience.map((item, index) => (
                <div className="card" key={index}>
                    <div className="card-content">
                        <h3 className="card-title">{item.title}</h3>
                        <p className="card-subtitle">{item.company}</p>
                        <p className="card-date">{item.date}</p>

                        <ul>
                            <li className="card-description">
                            {item.responsibilities[0]}
                            </li>
                            <li className="card-description">
                                {item.responsibilities[1]}
                            </li>
                            <li className="card-description">
                                {item.responsibilities[2]}
                            </li>
                        </ul>
                    </div>
                  </div>
   
         ))}
        

          {/* <div className="card">
            <div className="card-content">
              <h3 className="card-title"></h3>
              <p className="card-subtitle"></p>
              <p className="card-date"></p>
              <p className="card-description">
               
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
    );



}