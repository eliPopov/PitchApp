import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { useRouter } from 'next/router';
import Showcase from './Showcase';
import styles from '../styles/Layout.module.css';

export default function Layout({ title, children }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <Header />
      {router.pathname === '/' && <Showcase />}

      <div className={styles.container}>{children}</div>

      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: 'PitchFinder',
};
