import React from 'react';
import clsx from 'clsx';

import styles from './styles.module.scss';

const LimitedOfferComponent = () => (
  <div className={styles.limitedOfferRoot}>
    <div>
      <div>
        <p className={styles.limitedOfferHeader}>Limited offer</p>
        <p className={styles.warning}>
          Maximum purchase per address is <span>5</span>
          <span>%</span> of the total amount of HDP-B per phase
        </p>
      </div>
      <div className={styles.buttonsWrapper}>
        <div className={styles.whiteBox}>
          <div>
            <span>100$</span>to<span>1,000$</span>
          </div>
          <p>Discount 10%</p>
        </div>
        <div className={clsx(styles.whiteBox, styles.button)}>Buy now</div>
      </div>
    </div>
    <div>
      <div className={styles.phasesWrapper}>
        <div className={clsx(styles.phase, styles.activePhase)}>
          <span>1</span>
        </div>
        <div className={styles.phase}>
          <span>2</span>
        </div>
        <div className={styles.phase}>
          <span>3</span>
        </div>
      </div>
      <p className={styles.phasesDescription}>
        HDP-B offer in 3 Phases, distribution of total tokens will be after
        final phase finish, tokens will be divided in segments during 6- 12
        months in monthly installments, for amounts purchased less than {'<'}
        $1000 will be instant after the final phase.
      </p>
    </div>
  </div>
);

export default LimitedOfferComponent;
