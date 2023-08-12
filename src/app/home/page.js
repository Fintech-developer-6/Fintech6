"use client"

import React, { useEffect, useState } from "react";
import Image from 'next/image';
import styles from './Home.module.css';

const Home = () => {
  const [modalOpen1, setModalOpen1] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [modalOpen3, setModalOpen3] = useState(false);

  const [selectedImage, setSelectedImage] = useState('');

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalOpen1(true);
  };

  const handleImage2Click = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalOpen2(true);
  };

  const handleImage3Click = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalOpen3(true);
  };

  const closeModal1 = () => {
    setModalOpen1(false);
    setSelectedImage('');
  };

  const closeModal2 = () => {
    setModalOpen2(false);
    setSelectedImage('');
  };

  const closeModal3 = () => {
    setModalOpen3(false);
    setSelectedImage('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img
          src="/images/kuromi_m.png"
          alt="Left Image"
          className={`${styles.left_image} ${styles.clickableImage}`}
          onClick={() => handleImageClick('/images/kuromi_m.png')}
        />
        <div className={styles.center_content}>
          <div className={styles.line_container}>
            <img
              src="/images/small_line.png"
              alt="Left Image"
              className={styles.left_image}
            />
            <img
              src="/images/heart.png"
              alt="Left Image"
              style={{
                maxWidth: '20px',
                maxHeight: '20px',
                objectFit: 'contain',
              }}
            />
            <img
              src="/images/small_line.png"
              alt="Right Image"
              className={styles.right_image}
            />
          </div>
          <div className={styles.text_container}>
            Day 100
          </div>
          <div className={styles.text_container}>
            연애중
          </div>
          <div className={styles.line_container}>
            <img
              src="/images/big_line.png"
              alt="Left Image"
              className={styles.right_image}
            />
          </div>
        </div>
        <img
          src="/images/kuromi_f.png"
          alt="Right Image"
          className={`${styles.right_image} ${styles.clickableImage}`}
          onClick={() => handleImageClick('/images/kuromi_f.png')}
        />
      </div>
      <div className={styles.feedButton}></div>
      {/* <Image
                fill={true}
                src="/images/logo.png"
                alt="Logo"
                style={{
                    maxWidth: '50px',
                    maxHeight: '50px',
                    objectFit: 'contain',
                }}
                className={`${styles.logo_image} ${styles.clickableImage}`}
                onClick={() => handleImageClick('/images/kuromi_f.png')}
            /> */}
      <div className={styles.AdWrapper}>
      </div>
      {/* <HomeBottom />
            <MProfileModal open={modalOpen1} onClose={closeModal1} imageSrc={selectedImage} />
            <FProfileModal open={modalOpen2} onClose={closeModal2} imageSrc={selectedImage} />
            <RewardModal open={modalOpen3} onClose={closeModal3} imageSrc={selectedImage} /> */}
    </div>
  );
};

export default Home;