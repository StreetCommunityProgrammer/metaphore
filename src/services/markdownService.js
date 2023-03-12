import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { orderBy } from 'lodash';

export const getStoryPath = (folder) => {
	return path.join(process.cwd(), `/${folder}`);
};

export const getStoryContent = (filename, folder) => {
	const METAPHOR_COLLECTIONS = getStoryPath(folder);
	return fs.readFileSync(path.join(METAPHOR_COLLECTIONS, filename), 'utf8');
};

export const getAllStories = (folder) => {
	const METAPHOR_COLLECTIONS = getStoryPath(folder);
	const files = fs.readdirSync(METAPHOR_COLLECTIONS);
	let result = [];
	files.forEach((file) => {
		const filePath = path.join(folder, `/${file}`);
		const stat = fs.lstatSync(filePath);
		if (stat.isDirectory() && file !== '.gitkeep') {
			result = result.concat(getAllStories(filePath));
		} else if (/\.md?$/.test(filePath)) {
			const source = getStoryContent(file, folder);
			const slug = file.replace(/\.md?$/, '');
			const { data } = matter(source);
			delete data.layout;
			data.created_at = new Date(String(data.created_at)).toISOString();
			const metadata = {
				slug: slug,
				frontmatter: data,
			};
			result.push(metadata);
		}
	});
	return orderBy(result, ['frontmatter.created_at'], ['desc']);
};

export const getSingleStory = (slug, folder) => {
	const source = getStoryContent(
		`${slug}.md`,
		`/public/collections/stories/${folder}`
	);
	const { data: frontmatter, content } = matter(source);
	frontmatter.created_at = new Date(
		String(frontmatter.created_at)
	).toISOString();

	return {
		frontmatter,
		content,
	};
};

export const getLanguageLists = () => {
	const folder = 'public/collections/stories';
	const METAPHOR_COLLECTIONS = getStoryPath(folder);
	const files = fs.readdirSync(METAPHOR_COLLECTIONS);
	let result = [];
	files.forEach((file) => {
		const filePath = path.join(folder, `/${file}`);
		const stat = fs.lstatSync(filePath);
		if (stat.isDirectory()) {
			result.push({
				name: file,
			});
		}
	});
	return orderBy(result, ['name'], ['asc']);
};
