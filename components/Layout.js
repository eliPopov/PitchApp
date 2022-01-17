import Head from 'next/head';
import Header from './Header';
import styles from '@/styles/Layout.module.css';

export default function Layout({ title, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <Header />

      <div className={styles.container}>{children}</div>
    </div>
  );
}

Layout.defaultProps = {
  title: 'PitchFinder',
};
