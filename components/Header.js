import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href='/'>
          <a>Pitch Finder</a>
        </Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link href='/pitches'>
              <a>Pitches</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
