import styles from './SiteHeader.module.css';
import Link from 'next/link';

/* eslint-disable-next-line */
export interface SiteHeaderProps {}

export function SiteHeader(props: SiteHeaderProps) {
  return (
    <header role="banner" className={styles['banner']}>
      <div className={styles['border']}>
        <div className={styles['top-border']}></div>
        <div className={styles['bottom-border']}></div>
        <div className={styles['left-border']}></div>
        <div className={styles['top-border']}></div>
      </div>
      <h1 className={styles['title']}>kraig.run</h1>
      <nav>
        <ul>
          <li>
            <Link href="/log">Log</Link>
          </li>
          <li>
            <Link href="/stats">Stats</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/gear">Gear</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default SiteHeader;
