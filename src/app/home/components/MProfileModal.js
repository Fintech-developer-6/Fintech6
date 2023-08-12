import React from 'react';

const ProfileModal = ({ open, onClose, imageSrc }) => {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
      <img
        src="/images/close.png"
        alt="Modal Image"
        styles={{
          maxWidth: '5px',
          maxHeight: '5px',
          objectFit: 'contain',
        }}
        onClick={onClose} />        
      <img src={imageSrc} alt="Modal Image" />
      </div>
    </div>
  );
};

export default ProfileModal;