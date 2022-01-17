import Layout from '../../components/Layout';
import PitchItem from '../../components/PitchItem';
import { API_URL } from '../../config/index';
import { useState } from 'react';
import Filter from '@/components/Filter';
import Link from 'next/link';

const filterBySport = (pitchSport, filterSport) => {
  return pitchSport === filterSport;
};

export default function PitchesPage({ pitches }) {
  const [sport, setSport] = useState('All');
  const [roof, setRoof] = useState(null);
  const [floor, setFloor] = useState('');

  return (
    <Layout>
      <h1>Pitches</h1>
      <Filter
        setSport={setSport}
        roof={roof}
        setRoof={setRoof}
        setFloor={setFloor}
      />

      {pitches.length === 0 && <h3>No Pitches Found</h3>}
      {roof
        ? pitches.filter((pitch) => pitch.roof === true)
        : pitches.map((pitch) => <PitchItem key={pitch.id} pitch={pitch} />)}
      <Link href='/pitches'>
        <a className='btn-secondary'>Go Back</a>
      </Link>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/pitches`);
  const pitches = await res.json();

  return {
    props: { pitches },
    revalidate: 1,
  };
}
