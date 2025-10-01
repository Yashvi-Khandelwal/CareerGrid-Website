import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

export const CompanyModal = ({ city, companies, onClose }) => {
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
                tabIndex={-1}
            >
                <div className="modal-header">
                    <h2>{city} </h2>
                    <button className="close-btn" onClick={onClose}>
                        <AiOutlineClose />
                    </button>
                </div>
                <div className="modal-body">
                    <ul>
                        {companies.map((c, i) => (
                            <li
                                key={i}
                            >
                                {c}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
