import React from 'react';
import Link from 'gatsby-link';

import styles from './landing.module.scss';

const LandingPage = () => (
  <div className={styles.landing}>
    <div>
      <h1 className={styles.landing__header}>JS BYTES </h1>
      <p className={styles.landing__subheader}>Collections of JS snippets and codes which we encounter</p>
      <div className={styles.btn__wrapper}>
        <Link to="/docs/getting-started/introduction" className={styles.landing__btn}>
          <span>Get started!</span>
        </Link>
      </div>
    </div>
  </div>
);

export default LandingPage;
