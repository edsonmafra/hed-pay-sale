import React, { memo } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

import MedalIcon from '@hedpay/assets/icons/medal.png';
import ReleasedMarkIcon from '@hedpay/assets/icons/released.png';

import styles from './styles.module.scss';

type Props = {
  releaseNumber: number;
  totalReleases: number;
  year: number;
  quarterNumber: number;
  tokenAmount: number;
  released?: boolean;
};

const numberToOrderText = [
  'First',
  'Second',
  'Third',
  'Fourth',
  'Fifth',
  'Sixth',
  'Seventh',
  'Eighth'
];

const QuarterWrapperComponent: React.FC<Props> = memo<Props>(
  ({ quarterNumber, tokenAmount, year, releaseNumber, totalReleases, released }) => (
    <div className={styles.quaterWrapperRoot}>
      <div className={styles.quaterWrapperHeader}>
        <p>{`${numberToOrderText[releaseNumber]} Release of ${totalReleases}`}</p>
        <p>
          Quarter {quarterNumber}&nbsp;
          <span>{year}</span>
        </p>
      </div>
      <div className={styles.quaterWrapperBody}>
        <p>
          on Q{quarterNumber}, {year}. <span>{`${tokenAmount} HDP-B`}</span>
        </p>
        <p>Tokens will be unlocked to your wallet on scheduled dates</p>
      </div>
      {released && (
        <>
          <Image src={ReleasedMarkIcon} alt="released" />
          <Image src={MedalIcon} alt="medal" />
        </>
      )}
    </div>
  )
);

QuarterWrapperComponent.propTypes = {
  releaseNumber: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  quarterNumber: PropTypes.number.isRequired,
  tokenAmount: PropTypes.number.isRequired,
  totalReleases: PropTypes.number.isRequired,
  released: PropTypes.bool
};
QuarterWrapperComponent.displayName = 'QuarterWrapperComponent';

export default QuarterWrapperComponent;
