import './Companies.css'
import { companiesData } from '../data/companiesData';
import { CompanyCard } from './CompanyCard';
import { CompanyModal } from './CompanyModal';
import { useState } from "react";

export const Companies = () => {
    const [selectedCity, setSelectedCity] = useState(null);

    const handleViewAll = (city) => {
        setSelectedCity(city);
    };

    const handleClose = () => {
        setSelectedCity(null);
    };
    return (
        <section className="companies-container">
            <div className="companies-hero-section">
                <h1>Opportunities Across Cities</h1>
                <h2>Find your next career move, city by city.</h2>
                <p>Opportunities Across Cities provides a list of companies organized by city, helping you explore potential employers in your area. This page is designed to give you an overview of companies’ names only, without disclosing any private, sensitive, or proprietary information, ensuring all data shared here is fully public and safe to use. The list is not exhaustive; it represents a subset of companies in each city that are publicly known or relevant to career exploration. This page is intended to give you an overview and inspiration for potential career opportunities, but it does not cover every company in a city.</p>
                <p>This resource is especially useful for job seekers, students, and professionals looking to explore career opportunities in multiple locations, discover new companies, or simply gain insights into companies operating in their domain of interest. By keeping the focus strictly on publicly available company information, this page ensures a safe and informative experience for all users, while giving you the tools to plan your next career step with confidence.</p>
            </div>
            <div className="template-disclaimer-marquee">
                <p>
                    Company names shown are publicly available and used for educational purposes.
                </p>
            </div>

            <div className="companies-cards-container">
                {companiesData.map((cityData, idx) => (
                    <CompanyCard
                        key={idx}
                        city={cityData.city}
                        companies={cityData.companies}
                        onViewAll={() => handleViewAll(cityData)}
                    />
                ))}
            </div>
            {selectedCity && (
                <CompanyModal
                    city={selectedCity.city}
                    companies={selectedCity.companies}
                    onClose={handleClose}
                />
            )}
            
        </section>
    )
}