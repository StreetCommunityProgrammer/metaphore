module.exports = {
	branches: [
		'+([0-9])?(.{+([0-9]),x}).x',
		'main',
		'next',
		{
			name: 'beta',
			prerelease: true,
		},
	],
	plugins: [
		'@semantic-release/commit-analyzer',
		'@semantic-release/release-notes-generator',
		'@semantic-release/changelog',
		[
			'@semantic-release/git',
			{
				assets: ['CHANGELOG.md', 'package.json'],
				message:
					'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
			},
		],
		[
			'@semantic-release/github',
			{
				assets: [{ path: 'dist.zip', name: 'dist.zip' }],
			},
		],
	],
};
