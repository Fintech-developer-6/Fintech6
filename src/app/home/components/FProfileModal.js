import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Profile.module.css';

const FProfileModal = ({ open, onClose, imageSrc }) => {
  if (!open) return null;

  return (
    <div className={styles['profile-overlay']} onClick={onClose}>
      <img
        src="/images/close.png"
        alt="Close Image"
        style={{
          top : '0',
          maxWidth: '1px',
          maxHeight: '1px'}}        /> 
      <div className={styles['profile-content']} onClick={(e) => e.stopPropagation()}>
      
        <img src={imageSrc} alt="Modal Image" />      
        </div>
    </div>
  );
};

export default FProfileModal;