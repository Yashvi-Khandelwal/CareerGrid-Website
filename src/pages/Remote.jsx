import "./Remote.css";
import { remoteCompanies } from "../data/remoteCompaniesData";

export const Remote = () =>{
    return(
           <section className="remote-container">
      <div className="remote-hero">
        <h1>Explore Remote Opportunities</h1>
        <p>
          Discover companies offering remote positions across domains. This section lists publicly available company names that provide remote work options. The list is small now but scalable for future updates.
        </p>
      </div>

      <div className="remote-grid">
        {remoteCompanies.map((company) => (
          <div key={company.id} className="remote-card">
            {company.name}
          </div>
        ))}
      </div>
    </section>
    )
}