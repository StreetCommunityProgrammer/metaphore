import React from 'react';
import { GoQuestion } from 'react-icons/go';
import StoryIcon from '../StoryIcon';
import Link from 'next/link';
import { capitalize } from 'lodash';

function StoryLanguages({ languages }) {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 place-content-center my-5">
			{languages.map((lang, index) => (
				<Link
					key={index}
					href={`/stories/${lang.name}`}
					className="w-full flex items-center justify-center flex-col shadow-md py-5 h-32 rounded-md bg-white dark:bg-zinc-900"
				>
					<StoryIcon
						language={lang.name}
						size={35}
						className="text-zinc-900 dark:text-white"
					/>
					<span className="font-bold text-zinc-900 dark:text-white">
						{capitalize(lang.name)} Stories
					</span>
				</Link>
			))}
			<div className="flex items-center justify-center flex-col shadow-md py-5 h-32 rounded-md bg-gray-300 dark:bg-zinc-500">
				<GoQuestion size={35} className="text-zinc-900 dark:text-white" />
				<span className="font-bold text-zinc-900 dark:text-white">
					Suggest Other Metaphor
				</span>
			</div>
		</div>
	);
}

export default StoryLanguages;
