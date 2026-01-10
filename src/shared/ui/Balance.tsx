import Image from 'next/image';

import styles from './Balance.module.scss';
import dollar from '../../assets/icons/dollar.svg';

export default function Balance() {
  return (
    <div className={styles.container}>
      <Image src={dollar} width={24} height={24} alt="dollar-image" />
      <b className={styles.currency}>10.000</b>
    </div>
  );
}
