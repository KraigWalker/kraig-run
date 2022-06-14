import { Header, Heading }  from '@adobe/react-spectrum';
import Link from 'next/link';

/* eslint-disable-next-line */
export interface SiteHeaderProps {}

export function SiteHeader(props: SiteHeaderProps) {
  return (
    <Header>
      <Heading level={1}>kraig.run</Heading>
    </Header>
  );
}

export default SiteHeader;
