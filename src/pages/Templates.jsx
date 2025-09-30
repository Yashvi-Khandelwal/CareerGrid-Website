import "./Templates.css"
import { templates } from "../data/templateData"
import { TemplateCard } from "./TemplateCard"

export const Templates = () =>{
    return(
       <section className="template-container">
            <div className="template-hero-section">
                <h1>TEMPLATES</h1>
                <h2>Draft professional emails, LinkedIn messages, and more easily.</h2>
                <p>These templates are designed to help you communicate professionally and efficiently in any career scenario. Whether you need to send your resume to an HR, connect with someone on LinkedIn for guidance, request a referral from a company employee, or gather insights about a company, CareerGrid has you covered. Each template is ready-to-use, easy to copy, and adaptable to your specific situation, saving you time while ensuring your outreach is effective and professional. With templates for emails, LinkedIn messages, follow-ups, and networking, you can confidently approach opportunities and make meaningful connections in your career journey.</p>
            </div>
          <div className="template-disclaimer-marquee">
  <p>
    All templates are for educational purposes only. Please modify before sending to suit your context.
  </p>
</div>

            <div className="template-cards">
                  {templates.map(template => (
          <TemplateCard key={template.id} template={template} />
        ))}
            </div>
       </section>
    )
}