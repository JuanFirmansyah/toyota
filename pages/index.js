import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Product from '../components/Product';
import Background from '../components/Background';
import Promo from '../components/Promo';
import Benefits from '../components/Benefits';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Honda</title>
        <link rel="icon" href="/toyota-icon.png" />
      </Head>

      <Header />
      <main className="flex flex-col justify-center h-auto w-full">
        <Background />
        <Promo />
        <Benefits />
        <Product />
      </main>
      <Footer />
    </div>
  );
}
