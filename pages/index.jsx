import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Monochrome</title>
      </Head>

      <header>
        <Header></Header>
      </header>

      <main className="content"></main>

      <footer className="footer"></footer>
    </div>
  );
}
