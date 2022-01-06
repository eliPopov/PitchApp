import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/PitchItem.module.css';

export default function PitchItem({ pitch }) {
  const source = pitch.photos[0];
  return (
    <div className={styles.pitch}>
      <div className={styles.img}>
        <Image src={source} width={240} height={120} />
      </div>
      <div className={styles.info}>
        <h3>{pitch.name}</h3>
        <span>{pitch.address}</span>
      </div>
      <div className={styles.link}>
        <Link href={`/pitches/${pitch.slug}`}>
          <a className='btn'>Details</a>
        </Link>
      </div>
    </div>
  );
}
