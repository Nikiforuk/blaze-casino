import cases from '../../../assets/images/game-list/cases.png';
import crash from '../../../assets/images/game-list/crash.png';
import mines from '../../../assets/images/game-list/mines.png';
import plinko from '../../../assets/images/game-list/plinko.png';

export const dashboardGames = [
  {
    id: 'crash',
    bg: crash,
    statusBar: 'Top',
    title: 'Crash',
    description: "Watch the multiplier rise and cash out before it's gone",
    href: '/crash',
  },
  {
    id: 'cases',
    bg: cases,
    statusBar: 'Popular',
    title: 'Case',
    description: 'Open cases and win random rewards',
    href: '/cases',
  },
  {
    id: 'mines',
    bg: mines,
    statusBar: 'Hot',
    title: 'Mines',
    description: 'Avoid the mines and collect bigger rewards',
    href: '/mines',
  },
  {
    id: 'plinko',
    bg: plinko,
    statusBar: 'New',
    title: 'Plinko',
    description: 'Drop the ball, watch it bounce, and win prizes',
    href: '/plinko',
  },
];
