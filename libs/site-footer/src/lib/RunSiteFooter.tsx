import styles from './RunSiteFooter.module.css';

/* eslint-disable-next-line */
export interface RunSiteFooterProps {}

export function RunSiteFooter(props: RunSiteFooterProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to RunSiteFooter!</h1>
    </div>
  );
}

export default RunSiteFooter;
