import Head from 'next/head';

function Meta({
  title = 'SCP - Metaphore',
  description = 'SCP - Metaphore Website',
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default Meta;
