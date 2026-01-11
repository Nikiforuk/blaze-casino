'use client';
import ContainerMotion from './animations/ContainerMotion';
import DashboardGameCard from './DashboardGameCard';
import styles from './DashboardGameList.module.scss';
import cases from '../../assets/images/game-list/cases.png';
import crash from '../../assets/images/game-list/crash.png';
import mines from '../../assets/images/game-list/mines.png';
import plinko from '../../assets/images/game-list/plinko.png';

export default function DashboardGameList() {
  return (
    <div className={styles.container}>
      <ContainerMotion className={styles.games}>
        <DashboardGameCard
          bg={crash}
          statusBar="Top"
          title={'Crash'}
          description="Watch the multiplier rise and cash out before it's gone"
          href="/crash"
        />
        <DashboardGameCard
          bg={cases}
          statusBar="Popular"
          title={'Case'}
          description={'Open cases and win random rewards'}
          href="/cases"
        />
        <DashboardGameCard
          bg={mines}
          statusBar="Hot"
          title={'Mines'}
          description={'Avoid the mines and collect bigger rewards'}
          href="/mines"
        />
        <DashboardGameCard
          bg={plinko}
          statusBar="New"
          title={'Plinko'}
          description={'Drop the ball, watch it bounce, and win prizes'}
          href="/plinko"
        />
      </ContainerMotion>
    </div>
  );
}
