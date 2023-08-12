import React from 'react';

const RewardModal = ({ open, onClose, imageSrc }) => {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>Close</button>
        <img src={imageSrc} alt="Modal Image" />
      </div>
    </div>
  );
};

export default RewardModal;