import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Monochrome</title>
      </Head>

      <header className="header mt-5 text-warning">
        Hello
        <i className="fa-solid fa-phone"></i>
      </header>

      <main className="content">
        <div className="button">View all</div>
      </main>

      <footer className="footer"></footer>
    </div>
  );
}
