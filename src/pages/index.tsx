import Head from 'next/head';
import Main from 'components/Main';

type Props = {
  title: string;
};

export default function Home({ title = 'React avançado!' }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
    </>
  );
}
