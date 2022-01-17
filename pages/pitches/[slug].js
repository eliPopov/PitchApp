import { API_URL } from '../../config/index';
import styles from '../../styles/Pitch.module.css';
import Layout from '../../components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import SimpleMap from '../../components/PitchMap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import StarRatings from 'react-star-ratings';

const properties = {
  width: '500px',
  prevArrow: (
    <div style={{ width: '30px', marginRight: '-30px' }}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' fill='#fff'>
        <path d='M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z' />
      </svg>
    </div>
  ),
  nextArrow: (
    <div style={{ width: '30px', marginLeft: '-30px' }}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' fill='#fff'>
        <path d='M512 256L270 42.6v138.2H0v150.6h270v138z' />
      </svg>
    </div>
  ),
};
export default function PitchPage({ pitch }) {
  const ratings = pitch.ratings;
  const ratingSum = ratings.reduce((a, b) => a + b, 0);
  const ratingAvg = ratingSum / ratings.length;
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.left_col}>
          <div className={styles.slide_container}>
            <Slide {...properties}>
              {pitch.photos.map((photo, index) => (
                <div key={index}>
                  <Image src={photo} width={664} height={260} />
                </div>
              ))}
            </Slide>
          </div>
          <SimpleMap pitch={pitch} className={styles.map} />
        </div>
        <div className={styles.right_col}>
          <div className={styles.controls}>
            <h1>{pitch.name}</h1>
            <p>{pitch.address}</p>
            <StarRatings
              rating={ratingAvg}
              starRatedColor='yellow'
              starDimension='30px'
              starSpacing='1px'
            />
            <span>{`(${pitch.reviews.length})`}</span>
            <p>Roof: {pitch.roof ? 'yes' : 'no'}</p>
            <p>Light: {pitch.lighting ? 'yes' : 'no'}</p>
          </div>
          <div className={styles.calendar_container}>
            <Calendar />
          </div>
          <Link href='/pitches'>
            <a className='btn-secondary'>Go Back</a>
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
