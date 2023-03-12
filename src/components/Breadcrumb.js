import { capitalize } from 'lodash';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Breadcrumb = () => {
	const router = useRouter();
	const pathSegments = router.asPath.split('/').filter((x) => x);
	pathSegments.pop();

	return (
		<nav className="text-sm breadcrumbs" aria-label="breadcrumb">
			<ol>
				<li>
					<Link href="/">Home</Link>
				</li>
				{pathSegments.map((segment, index) => {
					const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
					return (
						<li key={path}>
							<Link href={path}>{capitalize(segment)}</Link>
						</li>
					);
				})}
			</ol>
		</nav>
	);
};

export default Breadcrumb;
