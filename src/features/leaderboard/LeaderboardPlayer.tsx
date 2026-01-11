import Image from 'next/image';

import styles from './LeaderboardPlayer.module.scss';
import firstPlace from '../../assets/icons/1st-place.svg';
import dollar from '../../assets/icons/dollar.svg';
// import secondPlace from '../../assets/icons/2nd-place.svg';
// import thirdPlace from '../../assets/icons/3rd-place.svg';

export function LeaderboardPlayer() {
  return (
    <div className={styles.container}>
      <Image className={styles.place} src={firstPlace} width={32} height={32} alt="place-image" />
      {/* <b className={styles.placeNum}>4</b> */}
      <div className={styles.content}>
        <div className={styles.infoContent}>
          <h3 className={styles.infoContent_title}>LuckyStrike</h3>
          <div className={styles.balance}>
            <Image
              src={dollar}
              width={16}
              height={16}
              alt="dollar-image"
              className={styles.balance_icon}
            />
            <p className={styles.balance_sum}>5000</p>
          </div>
        </div>
        <div className={styles.infoContent}>
          <p className={styles.infoContent_text}>250 games</p>
          <p className={styles.infoContent_percentOfWin}>58% win</p>
        </div>
      </div>
    </div>
  );
}
