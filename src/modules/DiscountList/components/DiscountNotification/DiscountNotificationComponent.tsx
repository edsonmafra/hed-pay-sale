import React, { memo } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

type Props = {
  phaseNumber: number;
  discountPercentageFrom: number;
  discountPercentageTo: number;
  minAmount: number;
  maxAmount: number;
  disabled?: boolean;
};

const DiscountNotificationComponent: React.FC<Props> = memo<Props>(
  ({
    phaseNumber,
    discountPercentageFrom,
    discountPercentageTo,
    minAmount,
    maxAmount,
    disabled
  }) => (
    <div
      className={clsx(
        styles.discountNotificationRoot,
        disabled ? styles.disabled : ''
      )}
    >
      <div>
        <div className={styles.phase}>
          <span>{phaseNumber}</span>
        </div>
        <span>{minAmount.toLocaleString()}$</span>
        <span className={styles.textTo}>to</span>
        <span>{maxAmount.toLocaleString()}$</span>
      </div>
      <div className={styles.discountPercentage}>
        <span className={styles.discountLabel}>Discount</span>{' '}
        <span>{`${discountPercentageFrom}%-${discountPercentageTo}%`}</span>
      </div>
    </div>
  )
);

DiscountNotificationComponent.propTypes = {
  phaseNumber: PropTypes.number.isRequired,
  discountPercentageFrom: PropTypes.number.isRequired,
  discountPercentageTo: PropTypes.number.isRequired,
  minAmount: PropTypes.number.isRequired,
  maxAmount: PropTypes.number.isRequired,
  disabled: PropTypes.bool
};

DiscountNotificationComponent.displayName = 'DiscountNotificationComponent';

export default DiscountNotificationComponent;
