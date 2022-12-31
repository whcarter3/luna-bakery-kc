import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout';
import mainImage from '../public/homepage-cover.jpeg';

export default function Home() {
  return (
    <>
      <Head>
        <title>Luna Bakery KC</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Image
          src={mainImage}
          alt="A bread layout"
          width={1280}
          height={768}
        ></Image>
        <h1 className="text-3xl font-serif">Hello World!</h1>
        <p>this is a sans serif font</p>
      </Layout>
    </>
  );
}
