import React from 'react';
import styles from './debtCardSkeleton.module.css';

const DebtCardSkeleton = () => {
  return (
    <div className={styles.card}>
      {/* Header Section */}
      <div className={styles.header}>
        <div className={`${styles.line} ${styles.lineSmall}`}></div>
        <div className={`${styles.line} ${styles.lineMedium}`}></div>
      </div>

      {/* Content Section */}
      <div className={styles.content}>
        {/* Price Section */}
        <div className={styles.priceSection}>
          <div className={styles.priceOriginal}>
            <div className={`${styles.line} ${styles.lineSmall}`}></div>
            <div className={`${styles.line} ${styles.lineMedium}`}></div>
          </div>
          <div className={styles.discountBadge}></div>
        </div>

        {/* Discounted Price */}
        <div className={styles.priceDiscounted}>
          <div className={`${styles.line} ${styles.lineSmall}`}></div>
          <div className={`${styles.line} ${styles.lineLarge}`}></div>
        </div>

        {/* Due Date */}
        <div className={styles.dueDate}>
          <div className={`${styles.line} ${styles.lineSmall}`}></div>
          <div className={`${styles.line} ${styles.lineMedium}`}></div>
        </div>

        {/* Description */}
        <div className={styles.description}>
          <div className={`${styles.line} ${styles.lineSmall}`}></div>
          <div className={`${styles.line} ${styles.lineSmall}`}></div>
          <div className={`${styles.line} ${styles.lineSmall}`}></div>
        </div>
      </div>

      {/* Actions Section */}
      <div className={styles.actions}>
        <div className={styles.button}></div>
        <div className={styles.buttonOutline}>
          <div className={`${styles.line} ${styles.buttonText} ${styles.lineMedium}`}></div>
        </div>
      </div>
    </div>
  );
};

export default DebtCardSkeleton;

