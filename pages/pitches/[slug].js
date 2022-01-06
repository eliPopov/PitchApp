import { API_URL } from '../../config/index';
import styles from '../../styles/Pitch.module.css';
import Layout from '../../components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import PitchMap from '../../components/PitchMap';

export default function PitchPage({ pitch }) {
  return (
    <Layout>
      <div className={styles.pitch}>
        <Image src={pitch.photos[0]} width={500} height={320} />
        <div className={styles.controls}>
          <span>{pitch.address}</span>
          <h1>{pitch.name}</h1>
          <h3>Sports:</h3> <p>{pitch.sports}</p>
          <h3>Roof:</h3> <p>{pitch.roof}</p>
          {pitch.image && (
            <div className={styles.image}>
              <Image src={pitch.image} width={960} height={600} />
            </div>
          )}
          <PitchMap pitch={pitch} />
          <Link href='/pitches'>
            <a className={styles.back}>Go Back</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/pitches`);
  const pitches = await res.json();

  const paths = pitches.map((pitch) => ({
    params: { slug: pitch.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/api/pitches/${slug}`);
  const pitches = await res.json();

  return {
    props: {
      pitch: pitches[0],
    },
    revalidate: 1,
  };
}
// export async function getServerSideProps({ query: { slug } }) {
//   const res = await fetch(`${API_URL}/api/pitches/${slug}`);
//   const pitches = await res.json();

//   return {
//     props: {
//       pitch: pitches[0],
//     },
//   };
// }
