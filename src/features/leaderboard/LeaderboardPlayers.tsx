import { LeaderboardPlayer } from './LeaderboardPlayer';
import styles from './LeaderboardPlayers.module.scss';
import { LeaderboardPlayer as LeaderboardPlayerType } from './types';

interface LeaderboardPlayersProps {
  players: LeaderboardPlayerType[];
  currentUser: LeaderboardPlayerType | null;
}

export default function LeaderboardPlayers({ players, currentUser }: LeaderboardPlayersProps) {
  return (
    <div className={styles.container}>
      {players.map((player) => (
        <LeaderboardPlayer
          key={player.rank}
          player={player}
          isCurrentUser={currentUser?.username === player.username}
        />
      ))}
    </div>
  );
}
