import { FaCity } from "react-icons/fa";

export const CompanyCard = ({ city, companies, onViewAll }) => {
  const visibleCompanies = companies.slice(0, 6);

  return (
    <div className="company-card">
      <h3><FaCity /> {city}</h3>
      <ul>
        {visibleCompanies.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
      {companies.length > 6 && (
        <button onClick={onViewAll}>View All Companies</button>
      )}
    </div>
  );
};
