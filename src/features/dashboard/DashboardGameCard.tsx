'use client';
import { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';

import PrimaryButton from '@/shared/ui/PrimaryButton';

import CardMotion from './animations/CardMotion';
import styles from './DashboardGameCard.module.scss';
import DashboardStatusBar from './DashboardStatusBar';

interface DashboardGameCardProps {
  bg: StaticImageData;
  statusBar?: string;
  title?: string;
  description?: string;
  href?: string;
}

export default function DashboardGameCard({
  bg,
  statusBar,
  title,
  description,
  href,
}: DashboardGameCardProps) {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href);
    }
  };

  return (
    <CardMotion style={{ backgroundImage: `url(${bg.src})` }} className={styles.container}>
      <div className={styles.statusContent}>
        <DashboardStatusBar statusBar={statusBar} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.actionZone}>
        <PrimaryButton text="Free play" type="button" onClick={handleClick} />
      </div>
    </CardMotion>
  );
}
