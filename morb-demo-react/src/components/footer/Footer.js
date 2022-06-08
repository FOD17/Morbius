import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBitcoinSign } from '@fortawesome/free-solid-svg-icons';
import {
  faCcVisa,
  faCcMastercard,
  faCcAmex,
  faStripe,
} from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

export default function Footer() {
  return (
    <footer>
      <h2>GIVE US YOUR MONEY</h2>
      <FontAwesomeIcon icon={faCcVisa} />
      <FontAwesomeIcon icon={faCcMastercard} />
      <FontAwesomeIcon icon={faCcAmex} />
      <FontAwesomeIcon icon={faBitcoinSign} />
      <FontAwesomeIcon icon={faStripe} />
    </footer>
  );
}
