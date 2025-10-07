import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./Templates.css";

export const TemplateCard = ({ template }) => {
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(template.content);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const preview = template.content.split("\n").slice(0, 3).join(" ");

  return (
    <>
      <div className="template-card">
        <h3>{template.title}</h3>
        <p>{preview}...</p>
        <div className="card-buttons">
          <button onClick={handleCopy} className="copy-btn">Copy</button>
          <button onClick={() => setShowModal(true)} className="readmore-btn">Read More</button>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={() => setShowModal(false)}>
              <AiOutlineClose size={24} />
            </button>
            <h3>{template.title}</h3>
            <pre>{template.content}</pre>
          </div>
        </div>
      )}

      {showToast && <div className="toast">Template copied!</div>}
    </>
  );
};
