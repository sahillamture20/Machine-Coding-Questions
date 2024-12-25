import { useState } from "react";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOfferAccepted, seIsOfferAccepeted] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAcceptOffer = () => {
    setIsModalOpen(false);
    seIsOfferAccepeted(true);
  };

  const handleModalClick = (e) => {
    // Prevent click events inside the modal from propagating
    e.stopPropagation();
  };
  return (
    <>
      <div className={isModalOpen ? "show-offer" : ""}>
        {isOfferAccepted ? (
          <p className="accepted">Offer Accepted!</p>
        ) : (
          <button onClick={handleOpenModal}>Show Offer</button>
        )}
      </div>
      {isModalOpen && (
        <div className="modal-backdrop" onClick={handleCloseModal}>
          <div
            className={isModalOpen ? "offer-modal" : ""}
            onClick={handleModalClick}
          >
            <button className="close-btn" onClick={handleCloseModal}>
              X
            </button>
            <p className="content">Clicl button below to accep the offer</p>
            <button className="offer-btn" onClick={handleAcceptOffer}>
              Accept Offer
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
