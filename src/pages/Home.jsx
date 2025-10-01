import "./Home.css"
import { MdOutlineEmail } from "react-icons/md";
import { FaBuilding } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import { useNavigate } from "react-router-dom";


export const Home = () => {
  const navigate = useNavigate()
  const features = [
    {
      icon: <MdOutlineEmail />,
      title: "Templates",
      desc: "Ready-to-use email, LinkedIn, and message templates to help you reach out professionally."
    },
    {
      icon: <FaBuilding />,
      title: "Companies",
      desc: "Explore company info by city, and plan your applications."
    },
    {
      icon: <FaHome />,
      title: "Remote Opportunities",
      desc: "Explore companies offering remote roles, so you can work from anywhere while growing your career"
    },
    {
      icon: <IoIosRocket />,
      title: "Coming Soon",
      desc: "More templates, cities, and resources to be added regularly for your career growth."
    }
  ];

  const gotoTemplates = () => {
    navigate('/templates')
  }

  const goToCompanies = () => {
    navigate('/companies')
  }

  return (
    <section className="home-container">
      <div className="hero-section">
        <h1>CareerGrid</h1>
        <h2>Plan. Prepare. Apply</h2>
        <p>Explore ready-to-use templates,
          company info, and remote opportunities all at one place.</p>
        <div className="cta-buttons">
          <button onClick={gotoTemplates}>Explore Templates</button>
          <button onClick={goToCompanies}>Explore Companies</button>
        </div>
      </div>

      <div className="highlights-section">
        <h2 className="card-section-title"> Features</h2>
        <div className="cards-container">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <span className="feature-card-icon">{feature.icon}</span>
              <h3 className="feature-card-title">{feature.title}</h3>
              <p className="feature-card-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}