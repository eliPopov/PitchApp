import { useRouter } from 'next/router';

export default function Pitch() {
  const router = useRouter();

  return (
    <div>
      <h1>Pitch no.{router.query.slug}</h1>
    </div>
  );
}
