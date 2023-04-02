import { GoMarkGithub } from 'react-icons/go';
import ThemeSwitcher from './ThemeSwicther';
import Image from 'next/image';
import ActiveLink from './ActiveLink';
import Link from 'next/link';
import favicon32 from '../../public/favicon/favicon-32x32.webp';

function Navbar() {
	return (
		<div className="navbar bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<ActiveLink href="/our-hustle-and-grind">
								Our Hustle and Grind
							</ActiveLink>
						</li>
						<li>
							<ActiveLink href="/stories">Stories</ActiveLink>
						</li>
						<li>
							<ActiveLink href="/the-culture-and-vibe">
								The Culture And Vibe
							</ActiveLink>
						</li>
						<li>
							<ActiveLink href="/paperdocs">
								Paper Docs
							</ActiveLink>
						</li>
					</ul>
				</div>
				<Link className="btn btn-ghost normal-case text-xl" href="/">
					<Image
						src={favicon32}
						alt="Metaphor Logo"
						width={32}
						height={32}
						className="mr-2"
					/>
					<span>Metaphore</span>
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					<li>
						<ActiveLink className="font-bold" href="/our-hustle-and-grind">
							Our Hustle and Grind
						</ActiveLink>
					</li>
					<li>
						<ActiveLink className="font-bold" href="/stories">
							Stories
						</ActiveLink>
					</li>
					<li>
						<ActiveLink className="font-bold" href="/the-culture-and-vibe">
							The Culture And Vibe
						</ActiveLink>
					</li>
					<li>
						<ActiveLink href="/paperdocs">
							Paper Docs
						</ActiveLink>
					</li>
				</ul>
			</div>
			<div className="navbar-end px-3">
				<ul className="menu menu-horizontal px-1">
					<li>
						<ActiveLink
							href="https://github.com/StreetCommunityProgrammer/metaphore"
							target="_blank"
						>
							<GoMarkGithub className="dark:text-zinc-900" />
						</ActiveLink>
					</li>
					<li>
						<ThemeSwitcher />
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Navbar;
