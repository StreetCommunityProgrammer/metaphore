import React from 'react';
import StoryIcon from '@/components/StoryIcon';
import { format } from 'date-fns';
import { GoClock } from 'react-icons/go';
import Breadcrumb from '../Breadcrumb';
import Image from 'next/image';

function StoryHeader({ title, author, language, createdAt }) {
	return (
		<header className="bg-zinc-900 dark:bg-zinc-50 px-32 py-20 flex flex-col items-center justify-center">
			<h1 className="text-zinc-50 dark:text-zinc-900 font-semibold text-3xl">
				{title}
			</h1>
			<div className="flex">
				<div className="my-2 flex items-center">
					<div className="avatar">
						<div className="w-10 mask mask-squircle">
							<Image
								src={`https://github.com/${author}.png`}
								alt={`${author} avatar`}
								width={40}
								height={40}
							/>
						</div>
					</div>
					<div className="px-2">
						<span className="text-xs text-zinc-50 dark:text-zinc-900 block">
							Github Accout
						</span>
						<strong className="font-bold text-zinc-50 dark:text-zinc-900">
							@{author}
						</strong>
					</div>
				</div>
				<div className="my-2 flex items-center">
					<div className="w-10 rounded-md flex items-center justify-center bg-zinc-50 dark:bg-zinc-900">
						<StoryIcon
							language={language}
							size={35}
							className="text-zinc-900 dark:text-zinc-50"
						/>
					</div>
					<div className="px-2">
						<span className="text-xs text-zinc-50 dark:text-zinc-900 block">
							Language
						</span>
						<strong className="font-bold text-zinc-50 dark:text-zinc-900">
							{language.toUpperCase()}
						</strong>
					</div>
				</div>
				<div className="my-2 flex items-center">
					<div className="w-10 rounded-md flex items-center justify-center bg-zinc-50 dark:bg-zinc-900 py-[.4em]">
						<GoClock size={25} className="text-zinc-900 dark:text-zinc-50" />
					</div>
					<div className="px-2">
						<span className="text-xs text-zinc-50 dark:text-zinc-900 block">
							Published At
						</span>
						<strong className="font-bold text-zinc-50 dark:text-zinc-900">
							{format(new Date(createdAt), 'yyyy-MM-dd HH:ii:ss')}
						</strong>
					</div>
				</div>
			</div>
			<div className="my-2 flex">
				<Breadcrumb />
			</div>
		</header>
	);
}

export default StoryHeader;
