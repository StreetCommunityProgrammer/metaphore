import { NEXT_APP_NAME } from '@/constants/app-config';
import Head from 'next/head';

function Meta() {
	return (
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
	);
}

export default Meta;
