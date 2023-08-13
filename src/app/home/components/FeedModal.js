import React from 'react';
import styles from '../Feed.module.css';

const FeedModal = ({ open, onClose, imageSrc }) => {
  if (!open) return null;

  return (
    <div className={styles.container}>
      <img
        src="/images/close.png"
        alt="Close Image"    
        onClick={onClose}
        style={{
          position: 'fixed',
          top: '10px',
          right: '10px',
          width: '20px',
          height: '20px',
          cursor: 'pointer'
        }}
      />
      <div className={styles.lineContainer}>
    <img src="/images/big_line.png" 
    style={{
      marginTop: '20%'
    }}
    className={styles.lineImage} />
  </div>
  <div className={styles.textContainer}>
    <div className={styles.centeredText}>
      모그
    </div>
  </div>
  <div className={styles.lineContainer}>
    <img src="/images/big_line.png" className={styles.lineImage} />
  </div>
  <div className={styles.centerContainer}>
    <img
      src="/images/hungry_bear.png"
      className={styles.centeredImage}
    />
  </div>
  <div className={styles.buttonContainer}>
    <button className={styles.customButton}>
      먹이주기
    </button>
  </div>
  <div className={styles.bottom}>
    <div className={styles.coincontainer}>
      <img
        src="/images/coin.png"
        className={styles.coin}
      />
    </div>
    <div className={styles.cointext}>
      내 먹이 : 14개
    </div>
  </div>
  </div>
  );
};

export default FeedModal;