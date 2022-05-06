import styles from './SiteHeader.module.css';

/* eslint-disable-next-line */
export interface SiteHeaderProps {}

export function SiteHeader(props: SiteHeaderProps) {
  return (
    <header role="banner" className={styles['banner']}>
      <h1 className={styles['title']}>kraig.run</h1>
      <nav>
        <ul>
          <li>Journal</li>
          <li>Stats</li>
          <li>About</li>
          <li>Gear</li>
        </ul>
      </nav>
    </header>
  );
}

export default SiteHeader;
