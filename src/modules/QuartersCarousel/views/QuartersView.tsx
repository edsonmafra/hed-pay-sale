import React from 'react';
import Carousel from 'react-multi-carousel';

import QuarterWrapper from '../components/QuarterWrapper/QuarterWrapperComponent';

import 'react-multi-carousel/lib/styles.css';
import styles from './styles.module.scss';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1920 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 1920, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1400, min: 970 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 970, min: 0 },
    items: 1
  }
};

const QuartersView = () => (
  <div className={styles.quartersViewRoot}>
    <Carousel ssr responsive={responsive}>
      <QuarterWrapper
        quarterNumber={4}
        year={2023}
        releaseNumber={0}
        tokenAmount={1500}
        totalReleases={8}
        released
      />
      <QuarterWrapper
        quarterNumber={1}
        year={2024}
        releaseNumber={1}
        tokenAmount={1500}
        totalReleases={8}
      />
      <QuarterWrapper
        quarterNumber={2}
        year={2024}
        releaseNumber={2}
        tokenAmount={1500}
        totalReleases={8}
      />
      <QuarterWrapper
        quarterNumber={3}
        year={2024}
        releaseNumber={3}
        tokenAmount={1500}
        totalReleases={8}
      />
      <QuarterWrapper
        quarterNumber={4}
        year={2024}
        releaseNumber={4}
        tokenAmount={1500}
        totalReleases={8}
      />
      <QuarterWrapper
        quarterNumber={1}
        year={2025}
        releaseNumber={5}
        tokenAmount={1500}
        totalReleases={8}
      />
      <QuarterWrapper
        quarterNumber={2}
        year={2025}
        releaseNumber={6}
        tokenAmount={1500}
        totalReleases={8}
      />
      <QuarterWrapper
        quarterNumber={3}
        year={2025}
        releaseNumber={7}
        tokenAmount={1500}
        totalReleases={8}
      />
    </Carousel>
  </div>
);

export default QuartersView;
