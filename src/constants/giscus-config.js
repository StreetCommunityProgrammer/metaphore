const dev = process.env.NODE_ENV !== 'production';

// Define Giscus Configuration
export const GISCUS = {
	repo: dev ? 'darkterminal/metaphore' : 'StreetCommunityProgrammer/metaphore',
	repoId: dev ? 'R_kgDOIi7hpQ' : 'R_kgDOIi5AGA',
	category: dev ? 'Discuss - Metaphor' : 'Metaphor - Discussion',
	categoryId: dev ? 'DIC_kwDOIi7hpc4CUz0K' : 'DIC_kwDOIi5AGM4CUz3V',
};
