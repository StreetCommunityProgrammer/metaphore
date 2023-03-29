import Link from 'next/link';
import Image from 'next/image';
import { GiSheep } from 'react-icons/gi';

function Footer() {
	return (
		<div className="mt-auto">
			<footer className="absolute bottom-0 w-full dark:bg-white bg-zinc-900 px-4 py-2 border-t-2 sm:flex sm:items-center sm:justify-between">
				<div className="flex items-center">
					<GiSheep size={32} />
					<p className="ml-2 text-sm sm:text-base">
						<Link
							href="https://www.gnu.org/licenses/licenses.html#GPL"
							target="_blank"
							className="font-bold"
						>
							GNU General Public License (GPLv3)
						</Link>{' '}
						- Nobody should be restricted by the knowledge they have.
					</p>
				</div>
				<div className="flex justify-center mt-2 sm:mt-0 text-center items-center">
					<span className="font-normal text-sm sm:text-md">Built with</span>
					<Image
						src="/next.svg"
						alt="NextJS Icon"
						width={50}
						height={28}
						className="ml-2 mt-1 bg-white p-1 dark:grayscale"
					/>
					<span className="font-normal text-sm sm:text-md">host by</span>
					<Image
						src="/vercel.svg"
						alt="Vercel Icon"
						width={50}
						height={28}
						className="ml-2 mt-1 bg-white p-1 dark:grayscale"
					/>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
