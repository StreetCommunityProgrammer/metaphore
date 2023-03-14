/** @type {import('next-sitemap').IConfig} */
const config = {
	siteUrl: process.env.SITE_URL || 'https://metaphore.vercel.app',
	generateRobotsTxt: true,
	sitemapSize: 1000,
    changefreq: 'weekly'
};

module.exports = config;
