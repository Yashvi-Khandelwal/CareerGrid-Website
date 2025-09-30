import "./Home.css"

export const Home = () => {
    const features = [
    {
      icon: "✉️",
      title: "Templates",
      desc: "Ready-to-use email, LinkedIn, and message templates to help you reach out professionally."
    },
    {
      icon: "🏢",
      title: "Companies",
      desc: "Explore company info by city, know which companies hire remotely, and plan your applications."
    },
    {
      icon: "📚",
      title: "Career Resources",
      desc: "Plan, prepare, and apply smarter with tips, guidance, and structured templates."
    },
    {
      icon: "🚀",
      title: "Coming Soon",
      desc: "More templates, cities, and resources to be added regularly for your career growth."
    }
  ];
    return (
        <section className="home-container">
            <div className="hero-section">
                <h1>CareerGrid</h1>
                <h2>Plan. Prepare. Apply</h2>
                <p>Explore ready-to-use templates,
                    company info, and remote opportunities all in one.</p>
                <div className="cta-buttons">
                    <button>Explore Templates</button>
                    <button>Explore Companies</button>
                </div>
            </div>

        <div className="highlights-section">
        <h2 className="card-section-title">App Features</h2>
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