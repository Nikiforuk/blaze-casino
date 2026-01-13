'use client';
import ContainerMotion from './animations/ContainerMotion';
import { dashboardGames } from './constants/games';
import DashboardGameCard from './DashboardGameCard';
import styles from './DashboardGameList.module.scss';

export default function DashboardGameList() {
  return (
    <div className={styles.container}>
      <ContainerMotion className={styles.games}>
        {dashboardGames.map((game) => (
          <DashboardGameCard
            key={game.id}
            bg={game.bg}
            statusBar={game.statusBar}
            title={game.title}
            description={game.description}
            href={game.href}
          />
        ))}
      </ContainerMotion>
    </div>
  );
}
