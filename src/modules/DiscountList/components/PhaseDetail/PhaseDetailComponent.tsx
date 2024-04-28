import React from "react";

import styles from "./styles.module.scss";

const PhaseDetailComponent = () => (
  <div className={styles.phaseDetailRoot}>
    <div className={styles.phaseNumber}>
      <p>Phase 1</p>
      <p>June 1 - June 30</p>
    </div>
    <div>
      <div className={styles.tokenSupply}>3,000,000 Tokens</div>
      <div className={styles.description}>
        Tokens release after end of final offer phase
      </div>
    </div>
    <div className={styles.tokenPrice}>
      <p>$ 0.15</p>
      <p>For token</p>
    </div>
  </div>
);

export default PhaseDetailComponent;
