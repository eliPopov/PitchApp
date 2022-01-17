import Layout from '../components/Layout';
import Link from 'next/link';
import PitchItem from '../components/PitchItem';
import { API_URL } from '../config/index';
import Showcase from '../components/Showcase';

export default function HomePage({ pitches }) {
  return (
    <Layout>
      <Showcase />
      <h1>Top Pitches</h1>
      {pitches.length === 0 && <h3>No Pitches Found</h3>}

      {pitches.map((pitch) => (
        <PitchItem key={pitch.id} pitch={pitch} />
      ))}

      {pitches.length > 0 && (
        <Link href='/pitches'>
          <a className='btn-secondary'>View All</a>
        </Link>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/pitches`);
  const pitches = await res.json();

  return {
    props: { pitches: pitches.slice(0, 3) },
    revalidate: 1,
  };
}
