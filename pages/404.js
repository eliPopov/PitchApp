import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/404.module.css';
import { FaExclamationTriangle } from 'react-icons';

export default function NotFoundPage() {
  return (
    <div>
      <Layout title='Page Not Found'>
        <div className={styles.error}>
          <h1>
            <FaExclamationTriangle />
            Offside
          </h1>
          <h4>Sorry, there is nothing here</h4>
          <Link href='/'>Go Back Home</Link>
        </div>
      </Layout>
    </div>
  );
}