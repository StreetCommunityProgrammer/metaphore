import Link from 'next/link';
import Image from 'next/image';
import { GiSheep } from 'react-icons/gi';

function Footer() {
  return (
    <footer className="footer self-end dark:bg-white bg-zinc-900 px-4 py-2 border-t-2">
      <div className="items-center grid-flow-col">
        <GiSheep size={32} />
        <p>
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
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <span className="font-normal text-md">Build with</span>
        <Image
          src="/next.svg"
          alt="NextJS Icon"
          width={50}
          height={28}
          className="mt-1 bg-white p-1 dark:grayscale"
        />
        <span className="font-normal text-md">host by</span>
        <Image
          src="/vercel.svg"
          alt="Vercel Icon"
          width={50}
          height={28}
          className="mt-1 bg-white p-1 dark:grayscale"
        />
      </div>
    </footer>
  );
}

export default Footer;
