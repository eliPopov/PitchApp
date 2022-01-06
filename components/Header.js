import Link from 'next/link';
import styles from '../styles/Header.module.css';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import AuthContext from 'context/AuthContext';
import { useContext } from 'react';

export default function Header() {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href='/'>
          <a>Pitch finder</a>
        </Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link href='/pitches'>
              <a>Pitches</a>
            </Link>
          </li>
          {user ? (
            <>
              <li>
                <Link href='/user/profile'>
                  <a>Profile</a>
                </Link>
              </li>
              <li>
                <button
                  onClick={() => logout()}
                  className='btn-secondary btn-icon'
                >
                  <FaSignOutAlt /> Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link href='/user/login'>
                <a className='btn-secondary btn-icon'>
                  <FaSignInAlt />
                  Login
                </a>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
