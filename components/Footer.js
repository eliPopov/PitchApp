import Link from 'next/link';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <p>Copyright &copy; PitchFinder 2021</p>
      </footer>
    </div>
  );
}
