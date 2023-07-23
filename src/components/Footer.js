import Link from 'next/link';
import Image from 'next/image';
import { GiSheep } from 'react-icons/gi';

function Footer() {
	return (
		<div className="mt-auto">
			<footer className="absolute bottom-0 w-full px-4 py-2 border-t-2 sm:flex sm:items-center sm:justify-between backdrop-filter backdrop-blur-lg backdrop-opacity-90">
				<div className="flex items-center">
					<GiSheep size={32} className='hidden sm:block text-slate-50 dark:text-slate-900' />
					<p className="ml-2 text-sm sm:text-base sm:text-left text-center text-slate-50 dark:text-slate-900">
						<Link
							href="https://www.gnu.org/licenses/licenses.html#GPL"
							target="_blank"
							className="font-bold text-slate-50 dark:text-slate-900"
						>
							GNU General Public License (GPLv3)
						</Link>{' '}
						- Nobody should be restricted by the knowledge they have.
					</p>
				</div>
				<div className="flex justify-center mt-2 sm:mt-0 text-center items-center">
					<span className="font-normal text-sm sm:text-md text-slate-50 dark:text-slate-900">Built with</span>
					<Image
						src="/next.svg"
						alt="NextJS Icon"
						width={50}
						height={28}
						className="mx-2 mt-1 bg-white p-1 dark:grayscale"
					/>
					<span className="font-normal text-sm sm:text-md text-slate-50 dark:text-slate-900"> host by </span>
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
