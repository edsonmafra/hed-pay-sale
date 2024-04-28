import React from 'react';

import { SaleProcessContainer } from '@hedpay/modules/SaleProcess/containers/SaleProcessContainer';

import LimitedOffer from '../components/LimitedOffer/LimitedOfferComponent';
import PhaseWrapper from '../components/PhaseWrapper/PhaseWrapperComponent';

import styles from './styles.module.scss';

const LandingHeaderView = () => {
  return (
    <div className={styles.landingHeaderRoot} id="landingView">
      <div>
        <PhaseWrapper className={styles.seedSale}>
          <div>
            <span>1</span>
          </div>
          <div>
            <span>3,000 HDP</span>
            <span>to</span>
            <span>3,000,000 HDP</span>
          </div>
          <span>Seed</span>
          <span>June 1 -June 30</span>
        </PhaseWrapper>
        <PhaseWrapper className={styles.privateSale}>
          <div>
            <span>2</span>
          </div>
          <div>
            <span>70,000 HDP</span>
            <span>to</span>
            <span>7,000,000 HDP</span>
          </div>
          <span>Private Sale</span>
          <span>July 1 -July 31</span>
        </PhaseWrapper>
        <PhaseWrapper className={styles.publicSale}>
          <div>
            <span>3</span>
          </div>
          <div>
            <span>100,000 HDP</span>
            <span>to</span>
            <span>10,000,000 HDP</span>
          </div>
          <span>Public Sale</span>
          <span>Aug 1 -Aug 31</span>
        </PhaseWrapper>
        <LimitedOffer />
      </div>
      <SaleProcessContainer />
    </div>
  );
};

export default LandingHeaderView;
