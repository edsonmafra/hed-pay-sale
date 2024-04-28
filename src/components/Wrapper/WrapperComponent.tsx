import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

type Props = {
  children: string;
};

const WrapperComponent: React.FC<Props> = React.memo<Props>(({ children }) => (
  <div className={styles.wrapperRoot}>{children}</div>
));

WrapperComponent.propTypes = {
  children: PropTypes.string.isRequired
};

WrapperComponent.displayName = 'WrapperComponent';

export default WrapperComponent;
