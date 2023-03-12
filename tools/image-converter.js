const sharp = require('sharp')
const glob = require('glob')

const dir = './public';
const files = glob.globSync(`${dir}/**/*.png`)

files.forEach(file => {
    sharp(file)
			.webp({
				quality: 80,
				alphaQuality: 100,
				lossless: false,
			})
			.toFile(file.replace('.png', '.webp'), (err, info) => {
				console.log('Error: ', err);
				console.log('Info: ', info);
			});
})
