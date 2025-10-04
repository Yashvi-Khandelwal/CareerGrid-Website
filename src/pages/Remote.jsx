import "./Remote.css";
import { remoteCompanies } from "../data/remoteCompaniesData";

export const Remote = () => {
  return (
    <section className="remote-container">
      <div className="remote-hero">
        <h1>Explore Remote Opportunities</h1>
        <p>
          This section presents a list of companies that offer remote opportunities.
          While not every role at these companies is fully remote, the list provides a clear reference of organizations with remote-friendly positions.
          Only company names are displayed here for simplicity and clarity.
          The list is currently limited and will be expanded as additional information becomes available, providing a reliable starting point for exploring remote career options.
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