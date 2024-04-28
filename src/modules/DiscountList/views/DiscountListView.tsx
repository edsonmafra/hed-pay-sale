import React from 'react';

import { Discounts } from '@hedpay/constants/discounts';

import DiscountNotification from '../components/DiscountNotification/DiscountNotificationComponent';
import PhaseDetail from '../components/PhaseDetail/PhaseDetailComponent';

import styles from './styles.module.scss';

export const DiscountListView = () => (
  <div className={styles.discountListViewRoot}>
    <PhaseDetail />
    {Discounts.map((discount, index) => (
      <DiscountNotification
        discountPercentageFrom={discount.discountPercentageFrom}
        discountPercentageTo={discount.discountPercentageTo}
        maxAmount={discount.maxAmount}
        minAmount={discount.minAmount}
        phaseNumber={discount.phaseNumber}
        key={discount.discountPercentageFrom}
        disabled={index > 4}
      />
    ))}
  </div>
);
