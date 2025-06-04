import React from 'react';
import S from './debtCardSkeleton.module.css';

interface DebtCardSkeletonProps {
  numberOfCards: number;
}

const DebtCardSkeleton = ({ numberOfCards }: DebtCardSkeletonProps) => {
  return (
    <div className={S.container}>
      {Array.from({ length: numberOfCards }).map((_, index) => (
        <div key={index} className={S.card}>
          <div className={S.header}>
            <div className={`${S.line} ${S.lineSmall}`}></div>
            <div className={`${S.line} ${S.lineMedium}`}></div>
          </div>

          <div className={S.content}>
            <div className={S.priceSection}>
              <div className={S.priceOriginal}>
                <div className={`${S.line} ${S.lineMedium}`}></div>
              </div>
              <div className={S.discountBadge}></div>
            </div>

            <div className={S.priceDiscounted}>
              <div className={`${S.line} ${S.lineLarge}`}></div>
            </div>

            <div className={S.dueDate}>
              <div className={`${S.line} ${S.lineSmall}`}></div>
              <div className={`${S.line} ${S.lineMedium}`}></div>
            </div>

            <div className={S.description}>
              <div className={`${S.line} ${S.lineSmall}`}></div>
              <div className={`${S.line} ${S.lineSmall}`}></div>
              <div className={`${S.line} ${S.lineSmall}`}></div>
            </div>
          </div>

          <div className={S.actions}>
            <div className={S.button}></div>
          </div>
        </div>
      ))}
    </div>
  )
};

export default DebtCardSkeleton;
