import './About.css';

export const About = () => {
  return (
    <section className="about-container" aria-labelledby="about-heading">
      <div className="about-hero-section">
        <h1 id="about-heading">About CareerGrid</h1>
        <p>
          A platform built to simplify your career journey with clarity, guiding you with templates, insights, and opportunities to move forward with confidence.
        </p>
      </div>

      <div className="about-description">
        <p>
          The mission of CareerGrid is to make the early career journey simple and structured. Job seekers—especially freshers—often struggle with how to approach HR, connect with professionals, or write the right message while networking. CareerGrid provides ready-to-use templates for emails, LinkedIn messages, and follow-ups that save time and guide users in communicating effectively. Along with this, it offers city-wise listings of IT companies, making it easier to explore opportunities nearby without the confusion of scattered information. By combining practical communication resources with organized company insights, CareerGrid aims to support students and job seekers in taking confident, informed steps toward their careers.
        </p>
        <p>
          The vision of CareerGrid is to become a trusted space where students and professionals can find clarity in their career journey. Instead of searching endlessly across scattered sources, users should have a single platform that gives them practical tools—like templates to reach out confidently—and organized insights, such as city-wise company listings, to explore opportunities. Over time, CareerGrid aspires to grow into a resource hub that continues adding more templates, expanding company data across cities, and exploring remote opportunities, so that every user feels supported, informed, and empowered to take the next step in their career.
        </p>
      </div>

      <div className="about-story">
        <div className="content">
          <h2>Who's Behind CareerGrid</h2>
          <p>
            Hi, I am <strong>Yashvi Khandelwal</strong>. While researching career opportunities and communication strategies, I realized how scattered and confusing the process can be for students and job seekers. CareerGrid was created to bring everything into one place—ready-to-use templates, city-wise company insights, and guidance—so that users can approach their career journey with clarity, confidence, and efficiency.
          </p>
          <p>
            This project is constantly evolving. More templates, expanded company listings, and curated opportunities will be added over time, ensuring that CareerGrid remains a practical and reliable companion for anyone looking to explore, connect, and grow in their career. The goal is to make the early career journey less overwhelming and more focused, so every user can take informed steps toward their goals.
          </p>
        </div>
        <div className="my-image">
          <img src="./Yashvi_Khandelwal.jpg" alt="Yashvi Khandelwal, founder of CareerGrid" />
        </div>
      </div>

      <div className="punchLine">
        <p>
          CareerGrid is here to simplify your journey. Explore the templates, check out companies, and take confident steps toward your career goals.
        </p>
      </div>
    </section>
  );
};
